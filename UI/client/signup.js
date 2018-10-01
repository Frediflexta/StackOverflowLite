const signupFrom = document.querySelector('#signupBtn');

const signup = (event) => {
  const username = document.querySelector('#username');
  const email = document.querySelector('#email');
  const password = document.querySelector('#password');
  const signupHeader = document.querySelector('#login-h');

  event.preventDefault();
  const url = '/api/v1/auth/signup';
  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username: username.value,
      email: email.value,
      password: password.value,
    }),
  })
    .then(res => res.json())
    .then((res) => {
      if (res.status === 'success') {
        const token = `${res.token}`;
        const userId = `${res.data.userId}`;
        localStorage.setItem('current-user-id', userId);
        localStorage.setItem('x-access-token', token);
        const successHeader = `<h3 id='signup-success'>${res.message}</h3>`;
        signupHeader.insertAdjacentHTML('afterend', successHeader);
        setTimeout(() => {
          document.location.replace('homepage.html');
        }, 2000);
      }

      if (res.status === 'fail') {
        throw new Error(`${res.message}`);
      }
    })
    .catch((error) => {
      const htmlContent = `<h3 id='signup-error'>${error.message}</h3>`;
      signupHeader.insertAdjacentHTML('afterend', htmlContent);
    });
};

signupFrom.addEventListener('click', signup);
