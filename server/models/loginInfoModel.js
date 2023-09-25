import mongoose from "mongoose";

const loginInfoSchema = new mongoose.Schema({
    scname: {
      type: String,
    },
    scemail: {
      type: String,
      unique: true,
    },
    scid: {
      type: String,
      unique: true,
    },
    scusername: {
      type: String,
      unique: true,
    },
    scpassword: String,
  });

  export default mongoose.model('logininfo',loginInfoSchema)