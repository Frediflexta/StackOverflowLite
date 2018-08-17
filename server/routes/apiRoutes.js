import express from 'express';
import QuesController from '../controllers/quesController';

const router = express.Router();

// Routes
router.get('/questions', QuesController.getAllQues);
router.get('/questions/:Qid', QuesController.getAQues);
router.post('/questions', QuesController.postQues);
router.post('/questions/:Qid/answers', QuesController.postAns);

export default router;
