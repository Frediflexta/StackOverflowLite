const postAnswer = document.querySelector('#postBtn');
const answerContainer = document.querySelector('.ans-votes-container');
const quesurlId = window.location.pathname;
const postAnswerUrl = `/api/v1${quesurlId}/answers`;

const answerBody = (event) => {
  const ansbody = document.querySelector('#textarea');
  const access = localStorage.getItem('x-access-token');

  event.preventDefault();
  fetch(postAnswerUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-access-token': access,
    },
    body: JSON.stringify({
      ansbody: ansbody.value,
    }),
  })
    .then(res => res.json())
    .then((res) => {
      if (res.status === 'success') {
        const postedAnswer = res.data.answer;
        let htmlPostedAnswer = '';
        ansbody.value = '';

        htmlPostedAnswer += `<div class="ans-votes">
        <a href="vote-up"><i class="far fa-arrow-alt-circle-up fa-2x"></i></a>
        <span>2</span>
        <a href="vote-down"><i class="far fa-arrow-alt-circle-down fa-2x"></i></a>
      </div>
      <div class="answer">
        <p>${postedAnswer.ansbody}</p>
      </div>`;
        answerContainer.insertAdjacentHTML('afterbegin', htmlPostedAnswer);
      } else if (res.status === 'fail') {
        throw new Error(`${res.message}`);
      }
    })
    .catch((error) => {
      let htmlContent = '';
      htmlContent = `<div class="error-no-image">Sorry! ${error.message}</div>`;
      answerContainer.insertAdjacentHTML('beforebegin', htmlContent);
    });
};

postAnswer.addEventListener('click', answerBody);
