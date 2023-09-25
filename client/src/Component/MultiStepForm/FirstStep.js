import React, { useContext } from 'react';
import { TextField } from '@mui/material';
import { boards, gujaratDistricts, gujaratTalukas, gujaratCities } from '../ReqData';
import MenuItem from '@mui/material/MenuItem';
import multiStepFormContext from '../../Context/multiStepFormContext';

const FirstStep = () => {
  const { handleChange, setCurrentStep, userData } = useContext(multiStepFormContext);
  const area = [
    {
      value: 'rural',
      label: 'Rural',
    },
    {
      value: 'urban',
      label: 'Urban',
    },
  ];
  return (
    <>
      <div className='flex  flex-col items-center'>
        <h4 className='mx-[10px] mt-[10px] p-[5px] text-left w-[95%] font-semibold'>Basic Info</h4>
        <div className='flex m-1 p-2'>
          <TextField
            name='schoolname'
            label='Name'
            value={userData['schoolname'] || ''}
            onChange={(event) => handleChange(event)}
            className='mx-1 z-0'
            variant="outlined"
          />
          <TextField
            name='schoolid'
            label='ID'
            value={userData['schoolid'] || ''}
            onChange={(event) => handleChange(event)}
            className='mx-1 z-0'
            variant="outlined"
          />
        </div>
        <div className='flex m-1 p-2'>
          <TextField
            name='principalname'
            label='Principal Name'
            value={userData['principalname'] || ''}
            onChange={(event) => handleChange(event)}
            className='mx-1 z-0'
            variant="outlined"
          />
          <TextField
            name='schoolemail'
            label='School Email'
            type='email'
            value={userData['schoolemail'] || ''}
            onChange={(event) => handleChange(event)}
            className='mx-1 z-0'
            variant="outlined"
          />
        </div>
        <div className='flex m-1 p-2'>
          <TextField
            name='schoolcontact'
            type='number'
            label='School Contact'
            value={userData['schoolcontact'] || ''}
            onChange={(event) => handleChange(event)}
            className='mx-1 z-0'
            variant="outlined"
          />
          <TextField
            name='schoolboard'
            label='Board'
            select
            value={userData['schoolboard'] || ''}
            onChange={(event) => handleChange(event)}
            className='mx-1 z-0 w-[210px]'
            variant="outlined"
          >
            {boards.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </div>
      </div>
      <div className='flex justify-center flex-col items-center'>
        <h4 className='mx-[10px] mt-[10px] p-[5px] text-left w-[95%] font-semibold'>Address Info</h4>
        <div className='flex m-1 p-2'>
          <TextField
            name='district'
            label='District'
            select
            value={userData['district'] || ''}
            onChange={(event) => handleChange(event)}
            className='mx-1 z-0 w-[210px]'
            variant="outlined"
          >
            {gujaratDistricts.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            name='taluka'
            label='Taluka'
            select
            value={userData['taluka'] || ''}
            onChange={(event) => handleChange(event)}
            className='mx-1 z-0 w-[210px]'
            variant="outlined"
          >
            {gujaratTalukas.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </div>
        <div className='flex m-1 p-2'>
          <TextField
            name='city'
            label='City'
            select
            value={userData['city'] || ''}
            onChange={(event) => handleChange(event)}
            className='mx-1 z-0 w-[210px]'
            variant="outlined"
          >
            {gujaratCities.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <TextField
              name="area"
              label='Area'
              select
              value={userData['area'] || ''}
              onChange={(event) => handleChange(event)}
              className='mx-1 z-0 w-[210px]'
              variant="outlined"
              >
              {area.map((option, index) => (
                <MenuItem key={index} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
        </div>
      </div>
      <div className='flex m-1 p-2 justify-between'>
        <button onClick={() => { setCurrentStep(2) }} className='btn w-[90px]'>
          Next
        </button>
      </div>
    </>
  );
}

export default FirstStep;
