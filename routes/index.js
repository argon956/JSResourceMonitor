import express from 'express';
import { startPage } from '../controllers/pageController.js';

const router = express.Router();

router.get('/', startPage);

export default router;
