import React, { useContext } from 'react'
import { TextField } from '@mui/material'
import multiStepFormContext from '../../Context/multiStepFormContext'

const SecondStep = () => {
  const { handleChange, currentStep, setCurrentStep, userData, setUserData, finalData, setFinalData } = useContext(multiStepFormContext)

  return (
    <div className='flex justify-center flex-col items-center'>
      <div className='flex my-[10px] flex-col items-center'>
        <div>
          <h4 className='mx-[10px] mt-[10px] p-[5px] text-left w-[95%] font-semibold'>Basic Info</h4>
        </div>
        <div className='flex m-1 p-2'>
          <TextField name='resname' label='Name' value={userData['resname']} onChange={(event) => handleChange(event)} className='mx-1 z-0' variant="outlined" />
          <TextField name='resid' label='ID' value={userData['resid']} onChange={(event) => handleChange(event)} className='mx-1 z-0' variant="outlined" />
        </div>
        <div className='flex m-1 p-2'>
          {/* Fix the name prop here */}
          <TextField name='position' label='Position' value={userData['position']} onChange={(event) => handleChange(event)} className='mx-1 z-0' variant="outlined" />
          <TextField name='resemail' label='Email' value={userData['resemail']} onChange={(event) => handleChange(event)} className='mx-1 z-0' variant="outlined" />
        </div>
        <div className='flex m-1 p-2'>
          <TextField name='resmobno' label='Mobile No.' value={userData['resmobno']} onChange={(event) => handleChange(event)} className='mx-1 z-0' variant="outlined" />
        </div>
      </div>
      <div className='flex m-1 p-2 justify-between w-[100%]'>
        <button className='btn' onClick={() => { setCurrentStep(1) }}>Back</button>
        <button onClick={() => { setCurrentStep(3) }} className='btn'>Next</button>
      </div>
    </div>
  )
}

export default SecondStep
