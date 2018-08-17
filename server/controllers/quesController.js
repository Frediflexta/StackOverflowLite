import questions from '../models/questions';
import answers from '../models/answers';

class QuesController {
  static getAllQues(req, res) {
    res.status(200).json({
      status: 'success',
      data: {
        questions,
      },
    });
  }

  static getAQues(req, res) {
    const quesID = Number(req.params.Qid);

    // find ques with id
    const findQues = questions.find(question => question.id === quesID);
    if (findQues) {
      return res.status(200).json({
        status: 'success',
        data: {
          findQues,
        },
      });
    }

    return res.status(404).json({
      status: 'fail',
      data: {
        message: 'Question Not Found',
      },
    });
  }

  static postQues(req, res) {
    const {
      title,
      text,
    } = req.body;

    questions.push({
      id: questions[questions.length - 1].id + 1,
      title,
      text,
    });

    const newQues = questions.find(ques => ques.title === req.body.title && ques.text === req.body.text);

    if (req.body.title === '' || req.body.text === '') {
      return res.status(400).json({
        status: 'fail',
        data: {
          message: 'Please fill in the fields',
        },
      });
    }

    return res.status(201).json({
      status: 'success',
      data: {
        newQues,
      },
    });
  }

  static postAns(req, res) {
    const quesID = Number(req.params.Qid);

    const answer = {
      id: answers[answers.length - 1].id + 1,
      text: req.body.text,
    };

    if (answer.text === '') {
      return res.status(400).json({
        status: 'fail',
        message: 'Please provide an answer before sending',
      });
    }

    return res.status(201).json({
      staus: 'success',
      data: {
        id: `${answer.id}`,
        quesID: `${quesID}`,
        text: `${answer.text}`,
      },
    });
  }
}

export default QuesController;
