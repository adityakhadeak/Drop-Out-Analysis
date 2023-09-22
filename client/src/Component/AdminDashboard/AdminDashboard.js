import React, { useState } from 'react'
import AdminSidebar from './AdminSidebar'
import AdminHeader from './AdminHeader'
import AdminHome from './AdminHome'
import '../../Styles/AdminDashboard.css'
const AdminDashboard = () => {

  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }

 
  return (
    <div className='grid-container'>
      <AdminHeader OpenSidebar={OpenSidebar}/>
      <AdminSidebar OpenSidebar={OpenSidebar} openSidebarToggle={openSidebarToggle}/>
      <AdminHome />
    </div>
  )
}

export default AdminDashboard
