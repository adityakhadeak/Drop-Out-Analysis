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
    scarea: String,
    // sccertificate: {
    //     data: Buffer, // Use Buffer type to store binary data (PDF content)
    //     contentType: String, // Store the content type (e.g., 'application/pdf')
    //   },
    sccertificate: {
      type:String// Use Buffer type to store binary data (PDF content)
     // Store the content type (e.g., 'application/pdf')
    },
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
      sccertificatetype:String,
  });

  export default mongoose.model('tempschoolinfo',tempSchoolInfoSchema)