import React, { useContext } from 'react'
import '../Styles/SchoolRegister.css'
import FirstStep from './MultiStepForm/FirstStep'
import SecondStep from './MultiStepForm/SecondStep'
import ThirdStep from './MultiStepForm/ThirdStep'
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import multiStepFormContext from '../Context/multiStepFormContext';
const steps = [
  'School Information',
  'School Representative Information',
  'Document Upload',
];
const SchoolRegister = () => {
  const { currentStep, userData, setUserData, finalData, setFinalData } = useContext(multiStepFormContext)
  const showStep = (step) => {
    switch (step) {
      case 1:
        return <FirstStep />
      case 2:
        return <SecondStep />
      case 3:
        return <ThirdStep />
    }
  }
  return (
    <div className='registration-form py-5 '>
      <h1 className='text-center  heading'>Register Your School </h1>

      <div className='flex justify-center flex-col items-center my-2 '>
        <Stepper activeStep={currentStep - 1} alternativeLabel>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        
          {showStep(currentStep)}
      
      </div>

    </div>

  )
}

export default SchoolRegister
