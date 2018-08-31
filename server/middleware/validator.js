/**
 * @description Validation middleware, used to validate input fields
 */
class Validate {
  /**
   * @param {object} req - Request object
   * @param {object} res - Response object
   * @param {function} next - passes along the process another handler
   * @return {json} res.json
   */
  static signUp(req, res, next) {
    try {
      const {
        username,
        email,
        password,
      } = req.body;

      const properEmail = /[\w]+@[\w]+\.[\w]{2,3}\b/;
      const whiteSpace = /\s/;

      if (typeof username !== 'string' || username.trim() === '') {
        return res.status(400).json({
          status: 'fail',
          message: 'Please provide username',
        });
      }


      if (typeof email !== 'string' || email.trim() === '' || properEmail.test(email) === false) {
        return res.status(400).json({
          status: 'fail',
          message: 'Please provide an email',
        });
      }

      if (typeof password !== 'string' || password.trim() === '' || password.trim().length === '' || password.trim().length < 6 || password.replace(whiteSpace, '') < 6) {
        return res.status(400).json({
          success: 'false',
          message: 'Please provide a password of Minimum lenght of 6 characters',
        });
      }

      return next();
    } catch (error) {
      return res.status(500).json({
        success: 'false',
        message: error.message,
      });
    }
  }
  /**
   * @param {object} req - Request object
   * @param {object} res - Response object
   * @param {function} next - passes along the process another handler
   * @return {json} res.json
   */
  static logIn(req, res, next) {
    try {
      const {
        username,
        password,
      } = req.body;

      const whiteSpace = /\s/;

      if (typeof username !== 'string' || username.trim() === '') {
        return res.status(400).json({
          status: 'fail',
          message: 'Please provide a username',
        });
      }

      if (typeof password !== 'string' || password.trim() === '' || password.trim().length === '' || password.trim().length < 6 || password.replace(whiteSpace, '') < 6) {
        return res.status(400).json({
          status: 'fail',
          message: 'Please provide a password of Minimum lenght of 6 characters',
        });
      }
      return next();
    } catch (error) {
      return res.status(500).json({
        status: 'fail',
        message: error.message,
      });
    }
  }
}

export default Validate;
