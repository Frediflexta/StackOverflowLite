import dotenv from 'dotenv';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import pool from '../../config/config';
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
   * @return {json} res.json
   */
  static async userSignup(req, res) {
    try {
      const {
        username,
        email,
        password,
      } = req.body;

      const hashPwd = await bcrypt.hashSync(password, 10);
      const insert = await pool.query(queries.signup, [username, email, hashPwd]);
      const newUser = insert.rows;

      const token = jwt.sign(
        { id: newUser.id },
        secret,
        { expiresIn: '3h' },
      );

      return res.status(201).json({
        success: 'true',
        message: 'Account was successfully created',
        token,
      });
    } catch (e) {
      return res.status(406).json({
        success: 'false',
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

      const checkUser = await pool.query(queries.signin, [username]);

      if (checkUser.rowCount < 1) {
        return res.status(400).json({
          success: 'false',
          message: 'Invalid login, please signup',
        });
      }

      const foundUser = checkUser.rows[0];

      const verifyPassword = await bcrypt.compareSync(password, foundUser.password);

      if (!verifyPassword) {
        return res.status(400).json({
          success: 'false',
          message: 'Invalid Password',
        });
      }

      const token = jwt.sign({
        id: foundUser.id,
      }, secret, { expiresIn: '3h' });

      return res.status(200).json({
        success: 'true',
        message: 'Welcome back',
        data: {
          token,
        },
      });
    } catch (e) {
      return res.status(406).json({
        success: 'false',
        message: e.message,
      });
    }
  }
}

export default UserController;
