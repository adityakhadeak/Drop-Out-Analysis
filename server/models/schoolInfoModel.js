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
    repname: String,
  repid:{
    type: String,
    unique: true,
  },
  repposition: String,
  repemail:{
    type: String,
    unique: true,
  },
  repmobile:Number,
  dateofres:Date,
  sccertificate: {
    data: Buffer, // Use Buffer type to store binary data (PDF content)
    contentType: String, // Store the content type (e.g., 'application/pdf')
  },
  sccertificatetype:String,
  });
  export default mongoose.model('schoolinfo',schoolInfoSchema)