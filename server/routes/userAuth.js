import express from "express";
import logininfo from "../models/loginInfoModel.js"
import fetchUser from "../middleware/fetchUser.js";
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

const router = express.Router();

router.post('/schoollogin', async (req, res) => {
    // Finds the validation errors in this request and wraps them in an object with handy functions
    // const errors = validationResult(req);
    // if (!errors.isEmpty()) {
    //     return res.status(400).json({ errors: errors.array() });
    // }
    const { email, password } = req.body;
    let success = false;
    try {
        // checking if the user exists or not
        console.log(email)
        // const user = await logininfo.findOne({ email });
        const user = await logininfo.findOne({ scemail: email });
        console.log(user)
        if (!user) {
            return res.status(400).json({
                message: "EMail worng",
                success
            });
        }
        // comparing the password
        const comparePass = await bcrypt.compare(password, user.scpassword); // Change this to user.password
        if (!comparePass) {
            return res.status(400).json({
                message: "Invalid Credentials",
                success
            });
        }
        const data = {
            user: {
                id: user.scid// Assuming "_id" is the user's ID field
            }
        };
        const authtoken = jwt.sign(data, process.env.JWT_SECRET);
        success = true;
        res.status(200).json({
            success,
            authtoken
        });
    } catch (error) {
        console.log(error.message);
        res.status(400).json({
            message: "Internal server error"
        });
    }
});

router.post('/getuser', fetchUser, async (req, res) => {
    try {
        const userId = req.user.scid;
        const user = await logininfo.findById(userId).select('-password');
        res.send(user);
    } catch (error) {
        console.log(error.message);
        res.status(400).json({
            message: "Internal server error"
        });
    }
});

export default router