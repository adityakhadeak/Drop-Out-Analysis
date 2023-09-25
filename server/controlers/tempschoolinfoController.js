import express from 'express';

import tempSchoolinfo from '../models/tempSchoolInfoModel.js'
const router = express.Router();
router.use(express.json());

 const tempSchoolInfoController=(req, res) => {
  const data=req.body;
  const newschoolinfo= new tempSchoolinfo({
  scname:data.schoolname,
  scid:data.schoolid,
  scprincipal:data.principalname,
  scemail:data.schoolemail,
  sccontact:data.schoolcontact,
  scboard:data.schoolboard,
  scdistrict:data.district,
  sctaluka:data.taluka,
  sccity:data.city,
  scpincode:data.pincode,
  sccertificate:data.certificate,
  // repname:data.resname,
  // repid:data.resid,
  // repposition:data.position,
  // repemail:data.resemail,
  // repmobile:data.resmobno,
  // dateofres:data.dateofres
  });
  newschoolinfo.save()
  .then(
        console.log('All Data Entries saved:', newschoolinfo),
        res.json({message:'Application sent succesfully for Verification'})
    )
    .catch(error => {
      console.error('Error saving Data Entry:', error);
      res.status(500).json({ error: 'Error to send a Application' });
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
  certificate:item.sccertificate,
  repname:item.repname,
  repid:item.repid,
  repposition:item.repposition,
  repemail:item.repemail,
  repmobno:item.repmobno,
  dateofres:item.dateofres
  }));
  res.json(dataArray);
}
catch (error) {
  console.error('Error fetching data:', error);
  res.status(500).json({ error: 'Error fetching data' });
}
}

export {tempSchoolInfoController,tempSchoolInfoToAdminController}