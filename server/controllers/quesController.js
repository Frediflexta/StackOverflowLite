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
        error: error.message,
        message: 'internal server error',
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
          question: oneQuestion.rows[0],
          answers: allAnswers.rows,
        },
      });
    } catch (error) {
      return res.status(500).json({
        status: 'fail',
        error: error.message,
        message: 'internal server error',
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

      const insertQues = await pool.query(queries.postQuestion, [userId, trimedTitle, trimedBody]);

      return res.status(201).json({
        status: 'success',
        message: 'Your question has been posted succesfully',
        data: insertQues.rows,
      });
    } catch (error) {
      return res.status(500).json({
        status: 'fail',
        error: error.message,
        message: 'internal server error',
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

      if (findQues.rowCount === 1) {
        if (findQues.rows[0].userid === userId) {
          const deleted = await pool.query(queries.deleteQuestion, [questionId, userId]);
          return res.status(200).json({
            status: 'success',
            message: 'Question has been successfully deleted',
            data: deleted.rows[0],
          });
        } else if (findQues.rows[0].userId !== userId) {
          return res.status(401).json({
            status: 'fail',
            message: 'You are not allowed to delete this question',
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
        error: error.message,
        message: 'internal server error',
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
        error: error.message,
        message: 'internal server error',
      });
    }
  }

  /**
   * Updates favorite answer of a question
   * @static method
   * @param  {object} req - Request object
   * @param {object} res - Response object
   * @return {object} res.json
   */
  static async favouriteQuestion(req, res) {
    try {
      const questionId = Number(req.params.qId);
      const answerId = Number(req.params.aId);

      if (Number.isInteger(questionId) === false || Number.isInteger(answerId) === false) {
        return res.status(400).json({
          status: 'fail',
          message: 'Invalid request',
        });
      }

      const userId = req.decoded.id;
      const { favorite } = req.body;

      if (typeof favorite !== 'boolean') {
        return res.status(400).json({
          status: 'fail',
          message: 'Invalid response',
        });
      }

      const checkQuestionAnswer = await pool.query(queries.searchQuesAns, [questionId, answerId]);

      if (checkQuestionAnswer.rowCount === 0) {
        return res.status(404).json({
          status: 'fail',
          message: 'Question or answer does not exist',
        });
      }

      if (checkQuestionAnswer.rows[0].userid !== userId) {
        const authenticateUser = await pool.query(queries.authUser, [questionId]);

        if (authenticateUser.rows[0].userid === userId) {
          const setFavorite = await pool.query(queries.preferedAns, [favorite, questionId, answerId]);
          return res.status(205).json({
            status: 'success',
            message: 'Your prefered answer has been selected',
            data: setFavorite.rows[0],
          });
        }
      }
      return res.status(401).json({
        status: 'fail',
        message: 'You can not pick a prefered answer',
      });
    } catch (error) {
      return res.status(500).json({
        status: 'fail',
        error: error.message,
        message: 'internal server error',
      });
    }
  }
}

export default QuesController;
