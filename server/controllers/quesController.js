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

    return res.status(400).json({
      status: 'fail',
      data: {
        message: 'Question Not Found',
      },
    });
  }
}

export default QuesController;
