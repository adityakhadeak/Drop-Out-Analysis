import React, { useState, useContext } from 'react';
import { TextField } from '@mui/material';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Input from '@mui/material/Input';
import multiStepFormContext from '../../Context/multiStepFormContext';
import {BASE_URL} from '../../helper.js'
import { useNavigate } from 'react-router-dom'
import alertContext from '../../Context/alertContext.js';


function ThirdStep() {
  const navigate = useNavigate();
  const { showAlert } = useContext(alertContext)

  
  const { handleSubmit, handleChange, setCurrentStep, userData } = useContext(multiStepFormContext);

  const [selectedFile, setSelectedFile] = useState(null);

  const [dateValue, setDateValue] = useState(() => {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
    const day = currentDate.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
  });

  const certificate = [
    {
      value: 'license',
      label: 'License'
    },
    {
      value: 'accreditation certificate',
      label: 'Accreditation Certificate'
    }
  ];

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };



  const handleRegister = async (e) => {
    handleSubmit()
      const response = await fetch(`${BASE_URL}/application/submit`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData) // body data type must match "Content-Type" header
      });
      const json = await response.json()
      if (json.success=="true") {
        navigate('/')
        showAlert("success",json.message)
      }
      else {
        showAlert("error",json.error)      }
    
  }

  return (
    <div className='flex justify-center items-center flex-col'>
      <div className='my-3 flex justify-center items-center flex-col'>
        <div className='flex md:flex-row flex-col m-1 p-2'>
          <TextField
            label='Certificate'
            select
            value={userData['certificate']}
            onChange={(event) => handleChange(event)}
            name='certificate'
            className='mx-1 my-2 z-0 w-[210px]'
            variant="outlined"
          >
            {certificate.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            label='Date Of Registration'
            type='date'
            defaultValue={dateValue}
            onChange={(event) => handleChange(event)}
            name='dateofres'
            className='mx-1 my-2 z-0'
            variant="outlined"
          />
        </div>
        <Input
          type="file"
          inputProps={{ accept: 'application/pdf' }}
          onChange={handleFileChange}
          style={{ display: 'none' }}
          id="fileInput"
        />
        <Button
          variant="outlined"
          component="label"
          htmlFor="fileInput"
        >
          Choose File
        </Button>
        {selectedFile && <p className='my-1'>Selected File: {selectedFile.name}</p>}
      </div>

      <div className='flex m-1 p-2 items-center justify-between w-[100%]'>
        <button className='btn w-[90px]' onClick={() => { setCurrentStep(2) }}>Back</button>
        <button onClick={handleRegister} className='btn w-[90px]'>Submit</button>
      </div>
    </div>
  );
}

export default ThirdStep;
