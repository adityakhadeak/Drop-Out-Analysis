import React, { useState } from 'react';
import { TextField, IconButton } from '@mui/material';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { AiOutlinePlus} from "react-icons/ai";
import MenuItem from '@mui/material/MenuItem';


import '../Styles/DataEntry.css';

const DataEntry = () => {
  const textFieldStyle = {
    width: '150px',
  };

  const [inputFields, setInputFields] = useState([
    { name: '', standard: '', lcno: '', caste: '', reason: '' },
  ]);

  const castes = [
    {
      value: 'obc',
      label: 'OBC',
    },
    {
      value: 'open',
      label: 'Open',
    },
    {
      value: 'sc',
      label: 'SC',
    },
    {
      value: 'st',
      label: 'ST',
    },
  ];

  const reasons = [
    {
      value: 'financial',
      label: 'Financial',
    },
    {
      value: 'other',
      label: 'Other',
    }
  ];

  const standardOptions = [];
  for (let i = 1; i <= 12; i++) {
    standardOptions.push(i);
  }

  const handleChangeInput = (index, event) => {
    const values = [...inputFields];
    values[index][event.target.name] = event.target.value;
    setInputFields(values);
  };

  const handleAddData = () => {
    setInputFields([...inputFields, { name: '', standard: '', lcno: '', caste: '', reason: '' }]);
  };

  const handleRemoveData = (index) => {
    const values = [...inputFields];
    values.splice(index, 1);
    setInputFields(values);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Check if any of the required fields are empty
    const isEmptyField = inputFields.some((inputField) => {
      return (
        inputField.name === "" ||
        inputField.standard === "" ||
        inputField.lcno === "" ||
        inputField.caste === "" ||
        inputField.reason === ""
      );
    });
  
    if (isEmptyField) {
      // Handle empty fields (e.g., display an error message)
      alert("Please fill in all required fields.");
    } else {
      // If no empty fields, proceed with form submission
      console.log('InputFields', inputFields);
      // Add your form submission logic here
    }
  };
  

  return (
    <div className="dataEntrySection">
      <div className='data-entry-heading'>
        <h1 className="heading">Welcome Pillai College Of Engineering</h1>

        <h4 className="sub-heading">Add Drop Out data here</h4>
      </div>
      <div className='form-con'>
        <form className="dataEntryForm" onSubmit={handleSubmit}>
          <table className="dataEntryTable">
            <thead>
              <tr className='table-heading'>
                <th>Sr No.</th>
                <th>Full Name</th>
                <th>Standard</th>
                <th>LC No.</th>
                <th>Caste</th>
                <th>Reason</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody className='table-body'>
              {inputFields.map((inputField, index) => (
                <tr className='table-body-row' key={index}>
                  <td>{index + 1}</td>
                  <td>
                    <TextField
                      name="name"
                      value={inputField.name}
                      inputProps={{ required: true }}
                      onChange={(event) => handleChangeInput(index, event)}
                    />
                  </td>
                  <td>
                    <TextField
                      name="standard"
                      select
                      value={inputField.standard}
                      inputProps={{ required: true }}
                      style={textFieldStyle}
                      onChange={(event) => handleChangeInput(index, event)}
                    >
                      {standardOptions.map((option) => (
                        <MenuItem key={option} value={option}>
                          {option}
                        </MenuItem>
                      ))}
                    </TextField>
                  </td>
                  <td>
                    <TextField
                      name="lcno"
                      value={inputField.lcNo}
                      inputProps={{ required: true }}
                      onChange={(event) => handleChangeInput(index, event)}
                    />
                  </td>
                  <td>
                    <TextField
                      name="caste"
                      select
                      value={inputField.caste}
                      inputProps={{ required: true }}
                      style={textFieldStyle}
                      onChange={(event) => handleChangeInput(index, event)}
                    >
                      {castes.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </TextField>
                  </td>
                  <td>
                    <TextField
                      select
                      name="reason"
                      value={inputField.reason}
                      inputProps={{ required: true }}
                      style={textFieldStyle}
                      onChange={(event) => handleChangeInput(index, event)}
                    >
                      {reasons.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </TextField>

                  </td>
                  <td>
                    <IconButton>
                      <DeleteForeverIcon onClick={() => handleRemoveData(index)} />
                    </IconButton>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="addMoreBtn">
            <button onClick={handleAddData} className='btn flex items-center'> Add <AiOutlinePlus className='mx-[1px]'/> </button>
          </div>
          <div className="submitBtn text-center">
            <button  className='btn' onClick={handleSubmit}>
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DataEntry;
