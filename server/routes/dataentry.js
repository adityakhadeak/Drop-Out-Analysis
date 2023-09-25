import express from "express";
import dataEntry from '../controlers/dataEntryController.js';

const router = express.Router();
router.post('/main',dataEntry);

export default router