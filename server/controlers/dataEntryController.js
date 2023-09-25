import dataentry from "../models/dataEntryModel.js"

 const dataEntry=async(req, res) => {
    const dataArray = req.body; // Assuming req.body is an array of objects
  
    // Create an array to store saved data entries
    const savedDataEntries = [];
  
        dataArray.forEach(dataObj => {
        const newdataentry = new dataentry({
          doname: dataObj.name,
          dostd: dataObj.standard,
          dolc: dataObj.lcno,
          docaste: dataObj.caste,
          doreason: dataObj.reason
        });


        const existingDataEntry = dataentry.findOne({ dolc: dataObj.lcno });
        if (existingDataEntry.length > 0) {
          console.log('Data Entry already exists:',dataObj.lcno);
          res.json({error:"Data Entry already exists"});
        }
        else{       
          // Save the new dataentry object to the database
        
          newdataentry.save()
            .then(savedDataEntry => {
              savedDataEntries.push(savedDataEntry);
      
              // Check if all objects have been saved
              if (savedDataEntries.length === dataArray.length) {
                console.log('All Data Entries saved:', savedDataEntries);
                res.json(savedDataEntries);
              }
            })
            .catch(error => {
              console.error('Error saving Data Entry:', error);
              res.status(500).json({ error: 'Error saving Data Entry' });
            });}

      });
    
    // Iterate over each object in the array and save it
  
  }
  export default dataEntry;