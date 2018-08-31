import pool from '../config/config';
import queries from '../models/queries';

/**
 * @exports
 * @class Questions Controller
 */
class QuesController {
  /**
   * Get all questions
   * @static method
   * @param  {object} req - Request object
   * @param {object} res - Response object
   * @return {json} res.json
   */
  static async getAllQues(req, res) {
    try {
      const allQuestions = await pool.query(queries.getAllQuetions);

      return res.status(200).json({
        status: 'success',
        data: allQuestions.rows,
      });
    } catch (error) {
      return res.status(500).json({
        status: 'fail',
        message: 'Internal server error',
        data: {
          Error: error.message,
        },
      });
    }
  }

  /**
   * Get a single question
   * @static method
   * @param  {object} req - Request object
   * @param {object} res - Response object
   * @return {object} res.json
   */
  static async getAQues(req, res) {
    try {
      const questionId = Number(req.params.qId);

      if (Number.isInteger(questionId) === false) {
        return res.status(400).json({
          status: 'fail',
          message: 'Invalid params',
        });
      }

      const oneQuestion = await pool.query(queries.getQuestion, [questionId]);
      const allAnswers = await pool.query(queries.getAllAnswers, [questionId]);
      if (oneQuestion.rowCount === 0) {
        return res.status(404).json({
          status: 'fail',
          message: 'Question not found',
        });
      }

      return res.status(200).json({
        status: 'success',
        message: 'Retrieval successful',
        data: {
          question: {
            response: oneQuestion.rows[0],
            answers: allAnswers.rows,
          },
        },
      });
    } catch (error) {
      return res.status(500).json({
        status: 'fail',
        message: 'internal server error',
        data: {
          Error: error.message,
        },
      });
    }
  }
  /**
   * Create a question
   * @static method
   * @param  {object} req - Request object
   * @param {object} res - Response object
   * @return {object} res.json
   */
  static async postQues(req, res) {
    try {
      const {
        questitle,
        quesbody,
      } = req.body;

      const trimedTitle = questitle.trim();
      const trimedBody = quesbody.trim();
      const userId = req.decoded.id;

      if (trimedTitle.trim() === '' || typeof trimedTitle !== 'string' || trimedTitle === undefined) {
        return res.status(400).json({
          status: 'fail',
          message: 'Please add a title',
        });
      }

      if (typeof trimedBody !== 'string' || trimedBody.trim() === '' || trimedBody === undefined) {
        return res.status(400).json({
          status: 'fail',
          message: 'What is your question',
        });
      }

      const insertQues = await pool.query(queries.postQuestion, [userId, trimedTitle, trimedBody]);

      return res.status(201).json({
        status: 'success',
        message: 'Your question has been posted succesfully',
        data: insertQues.rows,
      });
    } catch (error) {
      return res.status(500).json({
        status: 'fail',
        message: 'internal server error',
        data: {
          Error: error.message,
        },
      });
    }
  }

  /**
   * Delete a question
   * @static method
   * @param  {object} req - Request object
   * @param {object} res - Response object
   * @return {object} res.json
   */
  static async deleteQues(req, res) {
    try {
      const questionId = Number(req.params.qId);
      if (Number.isInteger(questionId) === false) {
        return res.status(400).json({
          status: 'fail',
          message: 'Invalid request',
        });
      }

      const userId = req.decoded.id;
      const findQues = await pool.query(queries.findQuestion, [questionId]);

      if (findQues.rowCount >= 1) {
        if (findQues.rows[0].userid === userId) {
          const deleted = await pool.query(queries.deleteQuestion, [questionId, userId]);
          return res.status(200).json({
            status: 'success',
            message: 'Successfully deleted',
            data: deleted.rows[0],
          });
        }

        if (findQues.rows[0].userId !== userId) {
          return res.status(401).json({
            status: 'fail',
            message: 'Unauthorized action',
          });
        }
      }

      return res.status(404).json({
        status: 'fail',
        message: 'Question does not exist',
      });
    } catch (error) {
      return res.status(500).json({
        status: 'fail',
        message: 'internal server error',
        data: {
          Error: error.message,
        },
      });
    }
  }

  /**
   * Post an answer
   * @static method
   * @param  {object} req - Request object
   * @param {object} res - Response object
   * @return {object} res.json
   */
  static async postAns(req, res) {
    try {
      const questionId = Number(req.params.qId);
      if (Number.isInteger(questionId) === false) {
        return res.status(400).json({
          status: 'fail',
          message: 'Invalid request',
        });
      }

      const {
        ansbody,
      } = req.body;

      const userId = req.decoded.id;

      const trimedAns = ansbody.trim();

      if (trimedAns.trim() === '' || typeof trimedAns !== 'string' || trimedAns === undefined) {
        return res.status(400).json({
          status: 'fail',
          message: 'Please fill the blank field',
        });
      }

      const foundQuestion = await pool.query(queries.availableQues, [questionId]);

      if (foundQuestion.rowCount === 0) {
        return res.status(404).json({
          status: 'fail',
          message: 'Question does not exist',
        });
      }

      if (foundQuestion.rows[0].id === questionId) {
        const ansQues = await pool.query(queries.postAnswer, [userId, questionId, trimedAns]);
        // const result = await pool.query(queries.quesAndAns, [questionId]);
        return res.status(201).json({
          status: 'success',
          message: 'Your answer has been posted',
          data: {
            answer: ansQues.rows[0],
          },
        });
      }
    } catch (error) {
      return res.status(500).json({
        status: 'fail',
        message: 'internal server error',
        data: {
          Error: error.message,
        },
      });
    }
  }

  /**
   * Updates favourite answer of a question
   * @static method
   * @param  {object} req - Request object
   * @param {object} res - Response object
   * @return {object} res.json
   */
  // static async favouriteQuestion(req, res) {
  //   try {
  //     const questionId = Number(req.params.qId);
  //     const answerId = Number(req.params.aId);

  //     if (Number.isInteger(questionId) === false || Number.isInteger(answerId) === false) {
  //       return res.status(400).json({
  //         status: 'fail',
  //         message: 'Invalid request',
  //       });
  //     }

  //     const userId = req.decoded.id;
  //     const { favourite } = req.body;

  //     if (typeof favourite !== typeof 'boolean') {
  //       return res.status(400).json({
  //         status: 'fail',
  //         message: 'Invalid response',
  //       });
  //     }

  //     const checkQuestion = await pool.query(queries.searchAnswer, [questionId, answerId]);

  //     if (checkQuestion.rows[0].userid === userId) {
  //       const tapFavourite = await pool.query(queries.togglefavourite, [favourite, answerId]);

  //       return res.status(201).json({
  //         status: 'success',
  //         message: 'Updated',
  //         data: tapFavourite,
  //       });
  //     }
  //     return res.status(404).json({
  //       status: 'fail',
  //       message: 'Question does not exist',
  //     });
  //   } catch (error) {
  //     return res.status(500).json({
  //       status: 'fail',
  //       message: 'internal server error',
  //       data: {
  //         Error: error.message,
  //       },
  //     });
  //   }
  // }
}

export default QuesController;
