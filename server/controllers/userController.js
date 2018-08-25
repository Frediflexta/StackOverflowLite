import dotenv from 'dotenv';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import pool from '../../config/config';
import queries from '../queries';

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

      const hashPwd = bcrypt.hashSync(password, 10);
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
}

export default UserController;
