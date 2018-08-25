import express from 'express';
import Validate from '../middleware/validator';
import UserController from '../controllers/userController';
// import QuesController from '../controllers/quesController';

const router = express.Router();

// Routes
// router.get('/questions', QuesController.getAllQues);
// router.get('/questions/:Qid', QuesController.getAQues);
// router.post('/questions', QuesController.postQues);
// router.post('/questions/:Qid/answers', QuesController.postAns);
router.post('/auth/signup', Validate.validUser, UserController.userSignup);

export default router;
