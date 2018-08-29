import pool from '../../config/config';
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

      if (allQuestions.rowsCount < 1) {
        return res.status(200).json({
          success: 'true',
          message: 'There are no questions, be the first to make history!',
          data: null,
        });
      }

      return res.status(200).json({
        success: 'true',
        data: allQuestions.rows,
      });
    } catch (e) {
      return res.status(500).json({
        success: 'false',
        message: 'Internal server error',
        data: {
          Error: e.message,
        },
      });
    }
  }

  /**
   * Get a single question
   * @static method
   * @param  {object} req - Request object
   * @param {object} res - Response object
   * @return {json} res.json
   */
  static async getAQues(req, res) {
    try {
      const quesId = Number(req.params.qId);

      if (Number.isInteger(quesId) === false) {
        return res.status(400).json({
          success: 'false',
          message: 'Invalid params',
        });
      }

      const oneQues = await pool.query(queries.getQuestion, [quesId]);

      if (oneQues.rowCount < 1) {
        return res.status(404).json({
          success: 'false',
          message: 'Page Not Found',
        });
      }

      return res.status(200).json({
        success: 'true',
        message: 'Retrieval successful',
        data: oneQues.rows[0],
      });
    } catch (e) {
      return res.status(500).json({
        success: 'false',
        message: 'internal server error',
        data: {
          Error: e.message,
        },
      });
    }
  }
  /**
   * Create a question
   * @static method
   * @param  {object} req - Request object
   * @param {object} res - Response object
   * @return {json} res.json
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
          success: 'false',
          message: 'Please a title',
        });
      }

      if (typeof trimedBody !== 'string' || trimedBody.trim() === '' || trimedBody === undefined) {
        return res.status(400).json({
          success: 'false',
          message: 'Please explain what you mean',
        });
      }

      await pool.query(queries.postQuestion, [userId, trimedTitle, trimedBody]);

      return res.status(201).json({
        success: 'true',
        message: 'Your question has been posted succesfully',
        data: {
          trimedTitle,
          trimedBody,
        },
      });
    } catch (e) {
      return res.status(500).json({
        success: 'false',
        message: 'internal server error',
        data: {
          Error: e.message,
        },
      });
    }
  }

  /**
   * Delete a question
   * @static method
   * @param  {object} req - Request object
   * @param {object} res - Response object
   * @return {json} res.json
   */
  static async deleteQues(req, res) {
    try {
      const quesId = Number(req.params.qId);
      if (Number.isInteger(quesId) === false) {
        return res.status(400).json({
          success: 'false',
          message: 'Invalid request',
        });
      }

      const userId = req.decoded.id;
      const findQues = await pool.query(queries.findQuestion, [quesId]);

      if (findQues.rowCount >= 1) {
        if (findQues.rows[0].userid === userId) {
          const deleted = await pool.query(queries.deleteQuestion, [quesId, userId]);
          return res.status(200).json({
            success: 'true',
            message: 'Successfully deleted',
            data: deleted.rowCount,
          });
        }

        if (findQues.rows[0].userId !== userId) {
          return res.status(401).json({
            success: 'false',
            message: 'Unauthorized action',
          });
        }
      }

      return res.status(404).json({
        success: 'false',
        message: 'Question does not exist',
      });
    } catch (e) {
      return res.status(500).json({
        success: 'false',
        message: 'internal server error',
        data: {
          Error: e.message,
        },
      });
    }
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
