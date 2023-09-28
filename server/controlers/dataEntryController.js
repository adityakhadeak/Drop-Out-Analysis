import dataentry from "../models/dataEntryModel.js"

 const dataEntry=async(req, res) => {
    const dataArray = req.body; // Assuming req.body is an array of objects
  
    // Create an array to store saved data entries
    const savedDataEntries = [];
        let success=false
        dataArray.forEach(dataObj => {
        const newdataentry = new dataentry({
          doname: dataObj.name,
          dostd: dataObj.standard,
          dolc: dataObj.lcno,
          dooccupation: dataObj.occupation,
          docaste: dataObj.caste,
          dogender: dataObj.gender,
          doreason: dataObj.reason
        });


        const existingDataEntry = dataentry.findOne({ dolc: dataObj.lcno });
        if (existingDataEntry.length > 0) {
          console.log('Data Entry already exists:',dataObj.lcno);
          res.json({message:"Data Entry already exists",success});
        }
        else{       
          // Save the new dataentry object to the database
        
          newdataentry.save()
            .then(savedDataEntry => {
              savedDataEntries.push(savedDataEntry);

              // Check if all objects have been saved
              if (savedDataEntries.length === dataArray.length) {
                success=true
                console.log('All Data Entries saved:', savedDataEntries);
                res.status(200).json({message:"Data Saved Successfully",success});
              }
            })
            .catch(error => {
              console.error('Error saving Data Entry:', error);
              res.status(500).json({ message: 'Student already added' });
            });}

      });
    
    // Iterate over each object in the array and save it
  
  }


  const showdata=async(req,res)=>{
data=req.body;

  }  
  
  
  
  export default dataEntry;