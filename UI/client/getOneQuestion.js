const questionContainer = document.querySelector('#ans-container');
const answersContainer = document.querySelector('.ans-votes-container');
const urlId = window.location.pathname;
const url = `/api/v1${urlId}`;

const loadSingleQuestion = () => {
  const answerContainer = document.querySelector('#answers-container');
  const userId = localStorage.getItem('current-user-id');
  const currentUserId = localStorage.getItem('question-user-id');

  if (userId === currentUserId) {
    let elementContent = '';
    elementContent += '<button id="delete-question" class="deleteBtn">Delete</button>';
    answerContainer.insertAdjacentHTML('beforebegin', elementContent);
  }

  fetch(url, {
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(res => res.json())
    .then((res) => {
      if (res.status === 'success') {
        const ownerQuestion = `${res.data.question.userid}`;
        localStorage.setItem('question-user-id', ownerQuestion);
        let htmlQuestionContent = '';
        let htmlAnswerContent = '';
        const { question } = res.data;
        const { answers } = res.data;

        htmlQuestionContent += `
        <div class="ans-header">
        <h1 id="question-header"><a href="#">${question.questitle}</a></h1>
      </div>
      <div class="post-text">
        <p>${question.quesbody}</p>
        <div class="user-tag">by ${question.username}</div>
      </div>`;
        questionContainer.insertAdjacentHTML('afterbegin', htmlQuestionContent);

        answers.forEach((answer) => {
          htmlAnswerContent += `<div class="ans-votes">
          <a href="vote-up"><i class="far fa-arrow-alt-circle-up fa-2x"></i></a>
          <span>2</span>
          <a href="vote-down"><i class="far fa-arrow-alt-circle-down fa-2x"></i></a>
        </div>
        <div class="answer">
          <p>${answer.ansbody}</p>
        </div>`;
        });
        answersContainer.insertAdjacentHTML('afterbegin', htmlAnswerContent);
      } else if (res.status === 'fail') {
        throw new Error(`${res.message}`);
      }
    })
    .catch((error) => {
      let htmlContent = '';
      htmlContent = `<div class="error-no-image">Sorry! ${error.message} (${error.error})</div>`;
      questionContainer.insertAdjacentHTML('afterbegin', htmlContent);
    });
};

window.onload = loadSingleQuestion();
