const contentHeader = document.querySelector('.h-content');
const url = '/api/v1/questions';

const loadQuestions = () => {
  fetch(url, {
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(res => res.json())
    .then((res) => {
      if (res.status === 'success') {
        let htmlContent = '';
        const questions = res.data;

        if (questions.length > 1) {
          questions.forEach((question) => {
            const questionUrl = `/questions/${question.id}`;
            htmlContent += `<div class="content-container">
              <div class="votes">
                <div class="v-counts">
                  <span title="">2</span>
                </div>
                <div class="quote">votes</div>
            </div>
            <div class="answers">
              <div class="ans-counts">
                <span>${question.totalanswers}</span>
              </div>
              <div class="quote">answers</div>
            </div>
            <div class="ques-details">
              <h3><a href=${questionUrl}>${question.questitle}</a></h3>
              <p>${question.quesbody}</p>
            </div>
          </div>`;
          });
          contentHeader.insertAdjacentHTML('afterend', htmlContent);
        }
      } else if (res.status === 'fail') {
        throw new Error(`${res.message}`);
      }
    })
    .catch((error) => {
      let htmlContent = '';
      htmlContent = `<div class="error-no-image">Sorry! ${error.message} (${error.error})</div>`;
      contentHeader.insertAdjacentHTML('afterend', htmlContent);
    });
};

window.onload = loadQuestions();
