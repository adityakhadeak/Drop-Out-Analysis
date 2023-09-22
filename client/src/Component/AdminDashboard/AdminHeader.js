import React from 'react'
import {BsFillBellFill, BsFillEnvelopeFill, BsPersonCircle, BsSearch, BsJustify} from 'react-icons/bs'
const AdminHeader = ({OpenSidebar}) => {
  return (
   
      <header className='header'>
        <div className='menu-icon'>
            <BsJustify className='icon' onClick={OpenSidebar} />
        </div>
        
        <div className='flex text-xl'>
            <BsFillBellFill className='mx-2'/>
            <BsFillEnvelopeFill className='mx-2'/>
            <BsPersonCircle className='mx-2'/>
        </div>
    </header>
  )
}

export default AdminHeader
