import express from "express";
import { tempSchoolInfoController,tempSchoolInfoToAdminController } from "../controlers/tempschoolinfoController.js";

const router = express.Router();
router.post('/submit',tempSchoolInfoController);
router.get('/fetchApplication',tempSchoolInfoToAdminController);        

export default router