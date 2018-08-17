import questions from '../models/questions';

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
    const { text } = req.body;
    if (req.body.text === '') {
      return res.status(204).json({
        status: 'fail',
        data: {
          message: 'Please provide a question',
        },
      });
    }

    questions.push({
      id: questions[questions.length - 1].id + 1,
      text,
    });

    const newQues = questions.find(ques => ques.text === req.body.text);

    return res.status(201).json({
      status: 'success',
      data: {
        newQues,
      },
    });
  }
}

export default QuesController;
