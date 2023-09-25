import mongoose from "mongoose";

const tempSchoolInfoSchema = new mongoose.Schema({
    scname: String,
    scid: {
      type: String,
      unique: true,
    },
    scprincipal: String,
    scemail: {
      type: String,
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
    sccertificate: {
        data: Buffer, // Use Buffer type to store binary data (PDF content)
        contentType: String, // Store the content type (e.g., 'application/pdf')
      },
  });

  export default mongoose.model('tempschoolinfo',tempSchoolInfoSchema)