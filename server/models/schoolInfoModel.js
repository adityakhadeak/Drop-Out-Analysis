import mongoose from "mongoose";
const schoolInfoSchema = new mongoose.Schema({
    scname: {
      type:String,
    },
    scid: {
      type: String,
      unique: true,
    },
    scprincipal: String,
    scemail: {
      type: String,
      unique: true,
    },
    sccontact: {
      type: Number,
      unique: true,
    },
    scboard: String,
    scdistrict: String,
    sctaluka: String,
    sccity: String,
    scpincode: Number,
  });
  export default mongoose.model('schoolinfo',schoolInfoSchema)