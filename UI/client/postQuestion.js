const postQuestion = document.querySelector('#postQuesBtn');
const postSuccessMsg = document.querySelector('#ques-container');
const url = '/api/v1/questions';

const questionBody = (event) => {
  const access = localStorage.getItem('x-access-token');
  const quesTitle = document.querySelector('#question-title');
  const quesBody = document.querySelector('#ques-body');

  event.preventDefault();
  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-access-token': access,
    },
    body: JSON.stringify({
      questitle: quesTitle.value,
      quesbody: quesBody.value,
    }),
  })
    .then(res => res.json())
    .then((res) => {
      if (res.status === 'success') {
        const posetedQuestion = res;
        quesTitle.value = '';
        quesBody.value = '';
        let successMessage = '';
        successMessage += `<h4>${posetedQuestion.message}</h4>`;
        postSuccessMsg.insertAdjacentHTML('afterbegin', successMessage);
      } else if (res.status === 'fail') {
        throw new Error(`${res.message}`);
      }
    })
    .catch((error) => {
      let htmlContent = '';
      htmlContent = `<div class="error-no-image">Sorry! ${error.message} (${error.error})</div>`;
      postSuccessMsg.insertAdjacentHTML('beforebegin', htmlContent);
    });
};

postQuestion.addEventListener('click', questionBody);
