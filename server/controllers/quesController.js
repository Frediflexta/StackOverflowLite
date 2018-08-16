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
}

export default QuesController;