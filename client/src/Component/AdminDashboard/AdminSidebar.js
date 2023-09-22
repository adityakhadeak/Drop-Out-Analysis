import React from 'react'
import {
  BsCart3, BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill,
  BsListCheck, BsMenuButtonWideFill, BsFillGearFill
}
  from 'react-icons/bs'
import { AiOutlineClose } from "react-icons/ai";


const AdminSidebar = ({openSidebarToggle,OpenSidebar}) => {
  return (
    <aside id='sidebar' className={openSidebarToggle ? "sidebar-responsive": ""} >
      <div className='flex justify-center items-center px-5 py-6'>
        <div className='mt-4 text-xl'>
          <h2>Admin</h2>
        </div>
        <div className='absolute right-[20px] top-[20px]'>
          <AiOutlineClose className='close_icon' onClick={OpenSidebar} />
        </div>
      </div>

      <ul className='flex flex-col justify-start items-start'>
        <li className='sidebar-list-item'>
          <a className='flex justify-start items-center' href="">
            <BsGrid1X2Fill className='mx-3' /> Dashboard
          </a>
        </li>

        <li className='sidebar-list-item'>
          <a className='flex justify-start items-center' href="">
            <BsFillGrid3X3GapFill className='mx-3' /> Schools
          </a>
        </li>
        <li className='sidebar-list-item'>
          <a className='flex justify-start items-center' href="">
            <BsPeopleFill className='mx-3' /> Data
          </a>
        </li>

        <li className='sidebar-list-item'>
          <a className='flex justify-start items-center' href="">
            <BsFillGearFill className='mx-3' /> Setting
          </a>
        </li>
      </ul>
    </aside>
  )
}

export default AdminSidebar
