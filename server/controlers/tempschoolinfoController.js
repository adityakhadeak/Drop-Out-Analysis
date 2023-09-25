import express from 'express';

import tempSchoolinfo from '../models/tempSchoolInfoModel.js'
const router = express.Router();
router.use(express.json());

 const tempSchoolInfoController=(req, res) => {
  const data=req.body;
  const newschoolinfo= new tempSchoolinfo({
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
  .then(
        console.log('All Data Entries saved:', newschoolinfo),
        res.json({message:'Application sent succesfully for Verification',success:"true"})
    )
    .catch(error => {
      console.error('Error saving Data Entry:', error);
      res.status(500).json({ error: 'Error to send a Application',success:"true"});
    });
}

 const tempSchoolInfoToAdminController=async(req,res)=>{
try{
  const data= await tempSchoolinfo.find();
  const dataArray=data.map(item=>({
  schoolname:item.scname,
  schoolid :item.scid,
  principalname:item.scprincipal,
  schoolemail:item.scemail,
  schoolcontact:item.sccontact,
  schoolboard:item.scboard,
  district:item.scdistrict,
  taluka:item.sctaluka,
  city:item.sccity,
  pincode:item.scpincode,
  certificate:"https://www.pdf995.com/samples/pdf.pdf",
  repname:item.repname,
  repid:item.repid,
  repposition:item.repposition,
  repemail:item.repemail,
  repmobno:item.repmobno,
  dateofres:item.dateofres
  }));
  res.json(dataArray);
  console.log(dataArray);
}
catch (error) {
  console.error('Error fetching data:', error);
  res.status(500).json({ error: 'Error fetching data' });
}
}

export {tempSchoolInfoController,tempSchoolInfoToAdminController}