import multiStepFormContext from "../../Context/multiStepFormContext";
import React, { useState,useEffect } from 'react'

const StepContext = (props) => {
  const [currentStep, setCurrentStep] = useState(1)
  
  // Initialize userData as an object with form field keys
  const [userData, setUserData] = useState({
    schoolname: '', 
    schoolid: '', 
    pricipalname: '', 
    schoolemail: '', 
    schoolcontact: '', 
    schoolboard: '', 
    district: '', 
    taluka: '', 
    city: '', 
    area: '', 
    resname: '', 
    resid: '', 
    position: '', 
    resemail: '', 
    resmobno: '', 
    certificate: '', 
    dateofres: '' 
  })
  
  const [finalData, setFinalData] = useState([])

  const handleChange = (event) => {
    setUserData({ ...userData, [event.target.name]: event.target.value })
  }

  const handleSubmit = () => {
    console.log(userData)
    setFinalData([...finalData, userData])
    
    // Reset userData to an object with the same keys
    setUserData({
      schoolname: '', 
      schoolid: '', 
      pricipalname: '', 
      schoolemail: '', 
      schoolcontact: '', 
      schoolboard: '', 
      district: '', 
      taluka: '', 
      city: '', 
      area: '', 
      resname: '', 
      resid: '', 
      position: '', 
      resemail: '', 
      resmobno: '', 
      certificate: '', 
      dateofres: '' 
    })
    
  }

  useEffect(() => {
    console.log(finalData);
  }, [finalData]);

  return (
    <multiStepFormContext.Provider value={{ handleSubmit, handleChange, currentStep, setCurrentStep, userData, setUserData, finalData, setFinalData }}>
      {props.children}
    </multiStepFormContext.Provider>
  )
}

export default StepContext
