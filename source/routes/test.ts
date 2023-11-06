import express from 'express';
import controller from '../controllers/test';

const router = express.Router();

router.get('/testRoute', controller.testFunction0);

export default router;
