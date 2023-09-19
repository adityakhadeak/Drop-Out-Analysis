import React, { useState } from 'react'
import alertContext from '../../Context/alertContext'
const AllAlertsContext = (props) => {
    const [alert, setAlert] = useState(null)

    const showAlert=(type,message)=>{
        setAlert({type,message})
        setTimeout(() => {
        setAlert(null)
        }, 2000);
    }
  return (
    <alertContext.Provider value={{showAlert,alert,setAlert}}>
        {props.children}
    </alertContext.Provider>
  )
}

export default AllAlertsContext
