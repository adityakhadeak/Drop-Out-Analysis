import React, { useContext, useEffect, useState } from 'react';
import { TextField, IconButton } from '@mui/material';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { AiOutlinePlus } from "react-icons/ai";
import MenuItem from '@mui/material/MenuItem';
import '../Styles/DataEntry.css';
import alertContext from '../Context/alertContext';
import { useNavigate } from 'react-router-dom';
const DataEntry = () => {
  const { showAlert } = useContext(alertContext)
  const navigate = useNavigate()
  const textFieldStyle = {
    width: '150px',
  };

  const [schoolId, setSchoolId] = useState({ schoolid: '' });
  const [inputFields, setInputFields] = useState([
    { name: '', standard: '', gender: '', lcno: '', caste: '', reason: '', schoolid: '' },
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

  const genders = [
    {
      value: 'male',
      label: 'Male',
    },
    {
      value: 'female',
      label: 'Female',
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

  const handleChange = (event) => {
    setSchoolId({ schoolid: event.target.value });
  };

  const handleChangeInput = (index, event) => {
    const values = [...inputFields];
    values[index][event.target.name] = event.target.value;
    values[index]['schoolid'] = schoolId.schoolid;
    setInputFields(values);
  };

  const handleAddData = () => {
    setInputFields([...inputFields, { name: '', standard: '', gender: '', lcno: '', caste: '', reason: '', schoolid: schoolId.schoolid }]);
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
        schoolId.schoolid === "" ||
        inputField.name === "" ||
        inputField.standard === "" ||
        inputField.gender === "" ||
        inputField.lcno === "" ||
        inputField.caste === "" ||
        inputField.reason === ""
      );
    });

    if (isEmptyField) {
      // Handle empty fields (e.g., display an error message)
      showAlert("warning", "Please fill all the fields")
    } else {
      // If no empty fields, proceed with form submission
      showAlert("success", "Data Added Successfully")
      navigate('/')
      console.log('InputFields', inputFields);
      // Add your form submission logic here
    }
  };

  useEffect(() => {
    if (localStorage.getItem('token') == null) {
        navigate("/schoollogin")
    }
    else {

        // fetchAllNotes()
    }
    // eslint-disable-next-line

}, [])

  return (
    <div className="dataEntrySection">
      <div className='data-entry-heading'>
        <h1 className="heading">Welcome Pillai College Of Engineering</h1>

        <h4 className="sub-heading">Add Drop Out data here</h4>
      </div>
      <div className='form-con'>
        <form className="dataEntryForm" onSubmit={handleSubmit}>
          <div className='schoolid my-3 '>
            <div className='my-2 font-bold'>School ID</div>
            <TextField
              name="schoolid"
              value={schoolId.schoolid}
              inputProps={{ required: true }}
              onChange={handleChange}
            />
          </div>
          <table className="dataEntryTable">
            <thead>
              <tr className='table-heading'>
                <th>Sr No.</th>
                <th>Full Name</th>
                <th>Gender</th>
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
                      type='text'
                      value={inputField.name}
                      inputProps={{ required: true }}
                      onChange={(event) => handleChangeInput(index, event)}
                    />
                  </td>
                  <td>
                    <TextField
                      name="gender"
                      select
                      value={inputField.gender}
                      inputProps={{ required: true }}
                      style={textFieldStyle}
                      onChange={(event) => handleChangeInput(index, event)}
                    >
                      {genders.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </TextField>
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
            <button onClick={handleAddData} className='btn flex items-center w-[80px]'> Add <AiOutlinePlus className='mx-[1px]' /> </button>
          </div>
          <div className="submitBtn text-center">
            <button className='btn w-[80px]' onClick={handleSubmit}>
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DataEntry;
