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

      const trimedUsername = username.trim();
      const trimedEmail = email.trim();
      const trimedPassword = password.trim();

      const hashPwd = await bcrypt.hashSync(trimedPassword, 10);
      const insert = await pool.query(queries.signUp, [trimedUsername, trimedEmail, hashPwd]);
      const newUser = insert.rows[0];

      const token = jwt.sign(
        { id: newUser.id },
        secret,
        { expiresIn: '3h' },
      );

      return res.header('x-access-token', token).status(201).json({
        success: 'true',
        message: 'Account was successfully created',
      });
    } catch (e) {
      return res.status(406).json({
        success: 'false',
        message: 'Email already exists',
        Error: e.message,
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

      return res.header('x-access-token', token).status(200).json({
        success: 'true',
        message: 'Welcome back',
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
