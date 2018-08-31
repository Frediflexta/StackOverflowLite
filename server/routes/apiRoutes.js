import express from 'express';
import auth from '../middleware/auth';
import Validate from '../middleware/validator';
import UserController from '../controllers/userController';
import QuesController from '../controllers/quesController';

const router = express.Router();

router.get('/questions', QuesController.getAllQues);
router.get('/questions/:qId', QuesController.getAQues);
router.post('/questions', auth, QuesController.postQues);
router.delete('/questions/:qId', auth, QuesController.deleteQues);
router.post('/questions/:qId/answers', auth, QuesController.postAns);
// router.put('/questions/:qId/answers/:aId', auth, QuesController.favouriteQuestion);
router.post('/auth/signup', Validate.signUp, UserController.userSignup);
router.post('/auth/login', Validate.logIn, UserController.userLogin);

export default router;
