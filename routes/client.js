import express from 'express';
import { getAllProducts, getAllCustomers, getAllTransactions, getGeography } from '../controllers/client.js';

const router = express.Router();

router.get('/products', getAllProducts);
router.get('/customers', getAllCustomers);
router.get('/transactions', getAllTransactions);
router.get('/geography', getGeography);

export default router;
