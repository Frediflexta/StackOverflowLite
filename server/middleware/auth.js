import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const secret = process.env.SECRET;

/**
 * @function auth
  * @param {object} req -Request object
  * @param {object} res - Response object
  * @param {next} next - hands over the next process to another handler
 */
const auth = async (req, res, next) => {
  try {
    const token = req.header('x-access-token');
    if (!token) {
      return res.status(401).json({
        success: 'false',
        message: 'Please sign in',
      });
    }

    return jwt.verify(token, secret, (error, decoded) => {
      if (error) {
        return res.status(401).json({
          success: 'false',
          message: 'Your session has expired',
        });
      }

      req.decoded = decoded;
      return next();
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
};

export default auth;
