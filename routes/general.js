import express from 'express';
import { getUser, getDashboardStats, getMemory } from '../controllers/general.js';

const router = express.Router();

router.get('/user/:id', getUser);
router.get('/dashboard', getDashboardStats);
router.get('/showCPU', getMemory);

export default router;
