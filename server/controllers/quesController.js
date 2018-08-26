// import dotenv from 'dotenv';
// import bcrypt from 'bcrypt';
// import jwt from 'jsonwebtoken';
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
      const allQuestions = await pool.query(queries.getallquetions);

      if (allQuestions.rows.length < 1) {
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
   * @staticmethod
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

      const oneQues = await pool.query(queries.getaquestion, [quesId]);

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
