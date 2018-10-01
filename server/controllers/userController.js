import dotenv from 'dotenv';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import pool from '../config/config';
import queries from '../models/queries';

dotenv.config();

const secret = process.env.SECRET;

/**
 * @description User Controller
 */
class UserController {
  /**
   * @param {object} req -Request object
   * @param {object} res - Response object
   * @return {object} res.json
   */
  static async userSignup(req, res) {
    try {
      const {
        username,
        email,
        password,
      } = req.body;

      const trimedUsername = username.toLowerCase().trim();
      const trimedEmail = email.trim();
      const trimedPassword = password.trim();

      const hashPwd = await bcrypt.hashSync(trimedPassword, 10);
      const insert = await pool.query(queries.signUp, [trimedUsername, trimedEmail, hashPwd]);
      const newUser = insert.rows[0];

      const token = jwt.sign(
        { id: newUser.id },
        secret,
        { expiresIn: '24h' },
      );

      return res.header('x-access-token', token).status(201).json({
        status: 'success',
        message: 'Your Account has been created',
        data: {
          userId: insert.rows[0].id,
        },
        token,
      });
    } catch (error) {
      return res.status(406).json({
        status: 'fail',
        error: error.message,
        message: 'Email already exists',
      });
    }
  }

  static async userLogin(req, res) {
    try {
      const {
        username,
        password,
      } = req.body;

      const checkUser = await pool.query(queries.signIn, [username]);

      if (checkUser.rowCount === 0) {
        return res.status(400).json({
          status: 'fail',
          message: 'Username does not exist, Please sign up',
        });
      }

      const foundUser = checkUser.rows[0];

      const verifyPassword = await bcrypt.compareSync(password, foundUser.password);

      if (!verifyPassword) {
        return res.status(400).json({
          status: 'fail',
          message: 'Invalid Password',
        });
      }

      const token = jwt.sign(
        { id: foundUser.id },
        secret,
        { expiresIn: '24h' },
      );

      return res.header('x-access-token', token).status(200).json({
        status: 'success',
        message: 'Welcome back...',
        data: {
          userId: checkUser.rows[0].id,
        },
        token,
      });
    } catch (error) {
      return res.status(406).json({
        status: 'fail',
        error: error.message,
        message: 'internal server error',
      });
    }
  }
}

export default UserController;
