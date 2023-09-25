import express from "express";
const router = express.Router();
import { schoolInfoController,rejectSchoolinfoController } from "../controlers/schoolinfoController.js";

router.post('/accept',schoolInfoController);
router.post('/reject',rejectSchoolinfoController);           
      
export default router;