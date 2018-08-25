// const trimValue = (word) => {
//   const whitespace = /\s/g;
//   return word.replace(whitespace, '');
// };

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
  static async validUser(req, res, next) {
    try {
      const {
        username,
        email,
        password,
      } = req.body;

      const properEmail = /[\w]+@[\w]+\.[\w]{2,3}\b/;
      const whitespace = /\s/;

      if (typeof username !== 'string' || username.trim() === '') {
        return res.status(400).json({
          success: 'false',
          message: 'Please provide username',
        });
      }


      if (typeof email !== 'string' || email.trim() === '' || properEmail.test(email) === false) {
        return res.status(400).json({
          success: 'false',
          message: 'Please provide an email',
        });
      }

      if (typeof password !== 'string' || password.trim() === '' || password.trim().length === '' || password.trim().length < 6 || password.replace(whitespace, '') < 6) {
        return res.status(400).json({
          success: 'false',
          message: 'Please provide a password of Minimum lenght of 6 characters',
        });
      }

      return next();
    } catch (e) {
      return res.status(500).json({
        success: 'false',
        message: e.message,
      });
    }
  }
}

export default Validate;
