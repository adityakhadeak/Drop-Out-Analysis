import React, { useState } from 'react'
import alertContext from '../Context/alertContext'
const Allalerts = (props) => {
    const [alert, setAlert] = useState(null)

    const showAlert=()=>{
        setAlert({type,message})
        setTimeout(() => {
        setAlert(null)
        }, 1000);
    }
  return (
    <alertContext value={{showAlert,alert}}>
        {props.children}
    </alertContext>
  )
}

export default Allalerts
