const deleteQuestion = () => {
  const section = document.querySelector('#ans-container');
  const access = localStorage.getItem('x-access-token');
  const deleteQuestionBtn = document.querySelector('.deleteBtn');

  const deleteFunction = (event) => {
    event.preventDefault();
    const questionUrlId = window.location.pathname;
    const questionToDeleteUrl = `/api/v1${questionUrlId}`;

    fetch(questionToDeleteUrl, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'x-access-token': access,
      },
    })
      .then(res => res.json())
      .then((res) => {
        console.log(res);
        if (res.status === 'success') {
          let successMessage = '';
          successMessage += `<h4>${res.message}</h4>`;
          section.insertAdjacentHTML('afterbegin', successMessage);
          setTimeout(() => {
            document.location.replace('/UI/homepage.html');
          }, 2000);
        } else if (res.status === 'fail') {
          throw new Error(`${res.message}`);
        }
      })
      .catch((error) => {
        let htmlContent = '';
        htmlContent = `<div class="error-no-image">Sorry! ${error.message}</div>`;
        section.insertAdjacentHTML('beforebegin', htmlContent);
      });
  };

  deleteQuestionBtn.addEventListener('click', deleteFunction);
};

window.onload = deleteQuestion();
