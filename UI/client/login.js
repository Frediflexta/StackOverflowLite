const loginFrom = document.querySelector('#loginBtn');

const login = (event) => {
  const username = document.querySelector('#username');
  const password = document.querySelector('#password');
  const loginHeader = document.querySelector('#login-h');

  event.preventDefault();
  const url = '/api/v1/auth/login';
  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username: username.value,
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
        let successHeader = '';
        successHeader = `<h3 id='signup-success'>${res.message}</h3>`;
        loginHeader.insertAdjacentHTML('afterend', successHeader);
        setTimeout(() => {
          document.location.replace('homepage.html');
        }, 2000);
      }

      if (res.status === 'fail') {
        throw new Error(`${res.message}`);
      }
    }).catch((error) => {
      let htmlContent = '';
      htmlContent = `<h3 id='signup-error'>${error.message}</h3>`;
      loginHeader.insertAdjacentHTML('afterend', htmlContent);
    });
};

loginFrom.addEventListener('click', login);
