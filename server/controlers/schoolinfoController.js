import express from 'express';
import nodemailer from 'nodemailer';
import randomstring from 'randomstring';
import schoolinfo from '../models/schoolInfoModel.js';
import tempSchoolinfo from '../models/tempSchoolInfoModel.js';
import logininfo from '../models/loginInfoModel.js'
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken'
const router = express.Router();


router.use(express.json());

async function sendEmail(tomail, text, subject) {
  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: "dropoutanalysis@gmail.com", // Replace with your email address
      pass: "dfxvscigsrbkxrzm", // Replace with your email password (app password)
    },
  });

  const mailOptions = {
    from: "dropoutanalysis@gmail.com",
    to: tomail,
    subject: subject,
    text: text,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent: %s", info.messageId);
    // res.json({message:'Email Sent succesfully to Applicant'});
  } catch (error) {
    console.error("Error sending email:", error);
    throw error; // Rethrow the error to handle it in the route handler
  }
}

 const schoolInfoController = async (req, res) => {
  const data = req.body;
  const newschoolinfo = new schoolinfo({
    scname: data.schoolname,
    scid: data.schoolid,
    scprincipal: data.principalname,
    scemail: data.schoolemail,
    sccontact: data.schoolcontact,
    scboard: data.schoolboard,
    scdistrict: data.district,
    sctaluka: data.taluka,
    sccity: data.city,
    scpincode: data.pincode,
    repname: data.resname,
     repid: data.resid,
    repposition: data.position,
    repemail: data.resemail,
    repmobile: data.resmobno,
    sccertificate: 'https://www.pdf995.com/samples/pdf.pdf',//item.pdf
    dateofres: data.dateofres,
    sccertificatetype:data.certificate
  });
  newschoolinfo.save()
    .then(console.log("All Data Entries saved:", newschoolinfo))
    .catch((error) => {
      // console.error("Error saving Data Entry:", error);
    console.log(error)
      res.status(500).json({ error: "Error saving Data Entry" });
    });

  //mail sending with username and password
  const tomail = data.schoolemail;
  const schoolname = data.schoolname;

  const username = generateName(schoolname);
  const password = randomstring.generate(10);

  function generateName(schoolName) {
    return schoolName.slice(0, 5) + randomstring.generate(3);
  }

  const hashedPassword = bcrypt.hashSync(password, 15);

  const newlogininfo = new logininfo({
    scname: data.schoolname,
    scemail: data.schoolemail,
    scid: data.schoolid,
    scusername: username,
    scpassword: hashedPassword,
  });

  const query = { scid: data.schoolid };
  const result = await tempSchoolinfo.deleteOne(query);

  const text = `Your username: ${username}\nYour password: ${password}`;
  const subject = "Your school data is verified for Dropout analysis";
  console.log(result);
  sendEmail(tomail, text, subject)
    .then(() => {
      // res.status(200).json({ message: "Email sent successfully" });
      newlogininfo
        .save()
        .then(console.log("login info is saved :", newlogininfo));
      const data = {
        user: {
          id: newlogininfo.scid
        }
      };
      console.log(data)
      const authtoken=jwt.sign(data,process.env.JWT_SECRET)
      console.log(authtoken)
      res.status(200).json({ message: authtoken ,sentMail:"Email sent successfully"});
    })
    .catch((error) => {
      res.status(500).json({ message: "Email could not be sent", error });
    });
};

const rejectSchoolinfoController = async (req, res) => {
  const data = req.body;
  const mail = data.schoolemail;
  const query = { scid: data.schoolid };
                        
  const result = await tempSchoolinfo.deleteOne(query);
  const text = 'Please apply again with Corrected Data';
  const subject = "Your school application is Rejected for Dropout analysis";
  console.log(result);
  sendEmail(mail, text, subject)
    .then(() => {
      res.status(200).json({ message: "Email sent successfully" });
    })
    .catch((error) => {
      res.status(500).json({ message: "Email could not be sent", error });
    });
};

export {rejectSchoolinfoController,schoolInfoController}