import express from 'express';
import QuesController from '../controllers/quesController';

const router = express.Router();

// GET all questions
router.get('/questions', QuesController.getAllQues);

export default router;
