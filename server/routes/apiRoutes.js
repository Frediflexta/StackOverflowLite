import express from 'express';
import QuesController from '../controllers/quesController';

const router = express.Router();

// GET all questions
router.get('/questions', QuesController.getAllQues);

// GET a question
router.get('/questions/:Qid', QuesController.getAQues);

// POST a question
router.post('/questions', QuesController.postQues);

export default router;
