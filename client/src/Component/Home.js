import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import mybackgrnd from '../images/backgrnd.jpg'
import { TextField, IconButton } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import React, { useEffect, useState } from 'react';
import '../Styles/Home.css';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
const columns = [
  { field: 'id', headerName: 'Sr No.', width: 90 },
  {
    field: 'fullname',
    headerName: 'Full Name',
    width: 150,
  },
  {
    field: 'gender',
    headerName: 'Gender',
    width: 150,
  },
  {
    field: 'standard',
    headerName: 'Standard',
    type: 'number',
    width: 110,
  },
  {
    field: 'lcno',
    headerName: 'Lc No',
  },
  {
    field: 'caste',
    headerName: 'Caste',
    type: 'number',
    width: 110,
  },
  {
    field: 'reason',
    headerName: 'Reason',
    type: 'number',
    width: 110,
  },
];

const rows = [
  { id: 1, fullname: 'Snow', gender: 'Jon', standard: 35, lcno: 234223, caste: "Caste", reason: "Financial" },
  { id: 2, fullname: 'John', gender: 'Doe', standard: 42, lcno: 123456, caste: "Another Caste", reason: "Academic" },
  { id: 3, fullname: 'Alice', gender: 'Smith', standard: 28, lcno: 987654, caste: "Different Caste", reason: "Health" },
  { id: 4, fullname: 'Bob', gender: 'Johnson', standard: 30, lcno: 345678, caste: "Yet Another Caste", reason: "Family Issues" },
  { id: 5, fullname: 'Eve', gender: 'Adams', standard: 22, lcno: 876543, caste: "Caste X", reason: "Other" },
  { id: 6, fullname: 'Michael', gender: 'Brown', standard: 25, lcno: 456789, caste: "Caste Y", reason: "Academic" },
  { id: 7, fullname: 'Jennifer', gender: 'Wilson', standard: 32, lcno: 543210, caste: "Another Caste", reason: "Financial" },
  { id: 8, fullname: 'David', gender: 'Miller', standard: 27, lcno: 987123, caste: "Different Caste", reason: "Health" },
  { id: 9, fullname: 'Sarah', gender: 'Davis', standard: 29, lcno: 345987, caste: "Caste Z", reason: "Academic" },
  { id: 10, fullname: 'Emily', gender: 'Taylor', standard: 31, lcno: 789654, caste: "Caste P", reason: "Financial" },
  { id: 11, fullname: 'Matthew', gender: 'Jones', standard: 23, lcno: 654789, caste: "Caste Q", reason: "Family Issues" },
  { id: 12, fullname: 'Olivia', gender: 'Johnson', standard: 37, lcno: 321456, caste: "Caste R", reason: "Academic" },
  { id: 13, fullname: 'Daniel', gender: 'Wilson', standard: 26, lcno: 567890, caste: "Caste S", reason: "Health" },
  { id: 14, fullname: 'Sophia', gender: 'Clark', standard: 38, lcno: 234567, caste: "Caste T", reason: "Family Issues" },
  { id: 15, fullname: 'James', gender: 'Thomas', standard: 34, lcno: 876543, caste: "Caste U", reason: "Other" },
  { id: 16, fullname: 'Ava', gender: 'Moore', standard: 20, lcno: 456123, caste: "Caste V", reason: "Academic" },
  { id: 17, fullname: 'Liam', gender: 'Brown', standard: 24, lcno: 321987, caste: "Caste W", reason: "Financial" },
  { id: 18, fullname: 'Mia', gender: 'Wilson', standard: 36, lcno: 789012, caste: "Caste X", reason: "Health" },
  { id: 19, fullname: 'William', gender: 'Harris', standard: 33, lcno: 543789, caste: "Caste Y", reason: "Academic" },
  { id: 20, fullname: 'Emma', gender: 'Smith', standard: 21, lcno: 890123, caste: "Caste Z", reason: "Financial" },
];


const Home = () => {
  const textFieldStyle = {
    width: '250px',
  };
  const [selectedArea, setSelectedArea] = useState(null)
  const [selectedSchool, setSelectedSchool] = useState(null)
  const [selectedStandard, setSelectedStandard] = useState(null)
  const [selectedGender, setSelectedGender] = useState(null)
  const [selectedCaste, setSelectedCaste] = useState(null)

  const [inputFields, setInputFields] = useState(
    { area: 'all', standard: 'All', school: 'all', gender: 'all', caste: 'all' },
  );
  const castes = [
    {
      value: 'all',
      label: 'All',
    },
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
  const area = [
    {
      value: 'all',
      label: 'All',
    },
    {
      value: 'thane',
      label: 'thane',
    },
    {
      value: 'panvel',
      label: 'pavel',
    },
    {
      value: 'badlpur',
      label: 'badlpur',
    },
  ];

  const school = [
    {
      value: 'all',
      label: 'All',
    },
    {
      value: 'holy writ',
      label: 'Holy Writ',
    },
    {
      value: 'holy faith',
      label: 'Holy Faith',
    }
  ];

  

  const standardOptions = ['All']; // Initialize the array with 'All'
for (let i = 1; i <= 12; i++) {
  standardOptions.push(i.toString()); // Convert i to a string and push it to the array
}

  const handleChangeInput = (event) => {
    setInputFields((prevInputFields) => ({
      ...prevInputFields,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  useEffect(() => {
    console.log(inputFields)
  }, [inputFields])
  return (
    <div className='Fullhome'>
      <div className="carousel-item active">
        <img className="img" src={mybackgrnd} alt="My Image" />
        <div className="carousel-caption">
          <h3 className="prob-statement">Dropout Students</h3>

        </div>
      </div>
      <div className="total-statement totstat">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="statement-box">
                <div className="row">
                  <div className="col-md-6">
                    <h3>Total Dropout</h3>
                    <p>As per available data</p>
                  </div>
                  <div className="col-md-3">
                    <div className="hard">
                      <h3>58</h3>
                      <p>Boys</p>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="soft">
                      <h3>181</h3>
                      <p>Girls</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


      </div>
      <div className="flex flex-wrap justify-center">
        <div className="select-div">
          <div className="labelBox">
            <label>Select Area</label>
          </div>
          <div className="short-by-box">
            <TextField
              name="area"
              select
              value={inputFields.area}
              inputProps={{ required: true }}
              style={textFieldStyle}
              onChange={handleChangeInput}
            >
              {area.map((option, index) => (
                <MenuItem key={index} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </div>
        </div>
        <div className="select-div">
          <div className="labelBox">
            <label>School</label>
          </div>
          <div className="short-by-box">
            <TextField
              name="school"
              select
              value={inputFields.school}
              inputProps={{ required: true }}
              style={textFieldStyle}
              onChange={handleChangeInput}
            >
              {school.map((option, index) => (
                <MenuItem key={index} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </div>
        </div>
        <div className="select-div">
          <div className="labelBox">
            <label>Standard</label>
          </div>
          <div className="short-by-box">
            <TextField
              name="standard"
              select
              value={inputFields.standard}
              inputProps={{ required: true }}
              style={textFieldStyle}
              onChange={handleChangeInput}
            >
              {standardOptions.map((option, index) => (
                <MenuItem key={index} value={option}>
                  {option}
                </MenuItem>
              ))}
            </TextField>
          </div>
        </div>
        <div className="select-div">
          <div className="labelBox">
            <label>Caste</label>
          </div>
          <div className="short-by-box">
            <TextField
              name="caste"
              
              select
              value={inputFields.caste}
              inputProps={{ required: true }}
              style={textFieldStyle}
              onChange={handleChangeInput}
            >
              {castes.map((option, index) => (
                <MenuItem key={index} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </div>
        </div>


      </div>
      <div className="row catBox1">
        <FormControl>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="gender" // Set the name to "gender"
            value={inputFields.gender} // Set the value to the current value of gender
            onChange={handleChangeInput} // Use handleChangeInput to handle changes
            className='flex justify-around'
          >
            <FormControlLabel value="all" control={<Radio />} label="All" />
            <FormControlLabel value="female" control={<Radio />} label="Female" />
            <FormControlLabel value="male" control={<Radio />} label="Male" />
          </RadioGroup>
        </FormControl>

      </div>
      <div className="row1">
        <div className="col-sm-12 col-md-6">
          <div id="dataTablePS_filter" className="dataTables_filter">
            <label>Search:<input type="search" className="form-control form-control-sm" placeholder="" aria-controls="dataTablePS" />
            </label>
          </div>
        </div>
      </div>
      <div className=' flex justify-center items-center py-6 mb-5'>
        <Box sx={{ height: 400, width: '65%' }}>
          <DataGrid
            rows={rows}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: {
                  pageSize: 5,
                },
              },
            }}
            pageSizeOptions={[5]}
            isRowSelectable={() => false}
            disableRowSelectionOnClick
          />
        </Box>
      </div>
    </div>

  )
}

export default Home
