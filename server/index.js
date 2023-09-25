import express from "express";
import connectToDB from './database/db.js'
import cors from 'cors'
import dotenv from 'dotenv'

import dataRoutes from './routes/dataentry.js'

import schoolRoutes from './routes/schoolinfo.js'
import tempSchoolRoutes from './routes/tempschoolinfo.js'
import userAuthRoutes from './routes/userAuth.js'
const app=express();
app.use(express.json());
app.use(cors());



dotenv.config();

    connectToDB()

    app.use('/data',dataRoutes);
   
    app.use('/school',schoolRoutes);

    app.use('/application',tempSchoolRoutes);
    app.use('/schoola',userAuthRoutes);

app.listen(5000, ()=>
console.log("server started on port 5000"));
