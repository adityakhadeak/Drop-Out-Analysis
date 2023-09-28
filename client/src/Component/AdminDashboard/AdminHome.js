import React, { useState,useEffect, useContext } from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsFillBellFill }
    from 'react-icons/bs'
import alertContext from  '../../Context/alertContext.js';
import { useNavigate } from 'react-router-dom';



const AdminHome = () => {
    const navigate=useNavigate()
    const [data, setData] = useState([]);
const { showAlert } = useContext(alertContext)


  // Step 1: Create a function to fetch data
  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:5000/application/fetchApplication'); // Replace with your actual API endpoint
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const jsonData = await response.json();
      setData(jsonData); // Step 4: Update the data state
      console.log(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

   // Step 3: Fetch data when the component mounts
   useEffect(() => {
        if (localStorage.getItem('admin') == null) {
      navigate("/adminlogin")
    }
    else {

        fetchData();
    }
  }, [data]);


    

  
  const acceptSchool = async (item) => {
    try {
        const response = await fetch('http://localhost:5000/school/accept', {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(item),
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        else{
            showAlert("success", "School Accepted")
        }

    } catch (error) {
        console.error('Error accepting school:', error);
    }
};

const rejectSchool = async (item) => {
    try {
        const response = await fetch('http://localhost:5000/school/reject', {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(item),
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        else{
            showAlert("error", "School Rejected")
        }

    } catch (error) {
        console.error('Error rejecting school:', error);
    }
};



    return (
        <main className='main-container'>
            <div className='flex justify-between text-3xl p-3 my-3 mx-2'>
                <h3>Dashboard</h3>
            </div>

            <div className='main-cards'>
                <div className='card'>
                    <div className='card-inner'>
                        <h3>Applications</h3>
                        <BsFillArchiveFill className='card_icon' />
                    </div>
                    <h1>300</h1>
                </div>
                <div className='card'>
                    <div className='card-inner'>
                        <h3>Schools</h3>
                        <BsFillGrid3X3GapFill className='card_icon' />
                    </div>
                    <h1>12</h1>
                </div>
                <div className='card'>
                    <div className='card-inner'>
                        <h3>Students</h3>
                        <BsPeopleFill className='card_icon' />
                    </div>
                    <h1>33</h1>
                </div>
                <div className='card'>
                    <div className='card-inner'>
                        <h3>ALERTS</h3>
                        <BsFillBellFill className='card_icon' />
                    </div>
                    <h1>42</h1>
                </div>
            </div>


            <div className='applications'>
                <h1 className='text-3xl p-3 my-3 mx-2'>Applications</h1>
                 <div>
                    {data.map((item, index) => (
                        <div className='my-2 flex items-center ' key={index}>
                            <div className='mr-3'>{index + 1}</div>
                            <Accordion className='w-[100%]'>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls={`panel${index + 1}-content`}
                                    id={`panel${index + 1}-header`}
                                >
                                    <div className='flex justify-between'>
                                        <div className='mx-2 font-extrabold text-lg'>School Name: {item.schoolname}</div>
                                        <div className='mx-2 font-extrabold text-lg' >School ID: {item.schoolid}</div>
                                    </div>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <div className='flex flex-col'>

                                        <div className='bg-slate-400'>
                                            <h2 className='font-extrabold text-lg bg-slate-300 p-2'>School Details</h2>
                                            <div className='flex '>
                                                <div className='m-2 p-2'>
                                                    <h4 className='font-bold'>Principal Name</h4>
                                                    <h3>{item.principalname}</h3>
                                                </div>
                                                <div className='m-2 p-2'>
                                                    <h4 className='font-bold'>School Email</h4>
                                                    <h3>{item.schoolemail}</h3>
                                                </div>
                                                <div className='m-2 p-2'>
                                                    <h4 className='font-bold'>School Contact</h4>
                                                    <h3>{item.schoolcontact}</h3>
                                                </div>
                                            </div>

                                            <div className='flex '>
                                                <div className='m-2 p-2'>
                                                    <h4 className='font-bold'>Board</h4>
                                                    <h3>{item.schoolboard}</h3>
                                                </div>
                                                <div className='m-2 p-2'>
                                                    <h4 className='font-bold'>District</h4>
                                                    <h3>{item.district}</h3>
                                                </div>
                                                <div className='m-2 p-2'>
                                                    <h4 className='font-bold'>Taluka</h4>
                                                    <h3>{item.taluka}</h3>
                                                </div>
                                            </div>
                                            <div className='flex '>
                                                <div className='m-2 p-2'>
                                                    <h4 className='font-bold'>City</h4>
                                                    <h3>{item.city}</h3>
                                                </div>
                                                <div className='m-2 p-2'>
                                                    <h4 className='font-bold'>Area</h4>
                                                    <h3>{item.area}</h3>
                                                </div>
                                            </div>
                                        </div>

                                        <div className='bg-slate-400'>
                                            <h2 className='font-extrabold bg-slate-300 p-2 text-lg'>School Representative Details</h2>
                                            <div className='flex '>
                                                <div className='m-2 p-2 '>
                                                    <h4 className='font-bold'>Name</h4>
                                                    <h3>{item.resname}</h3>
                                                </div>
                                                <div className='m-2 p-2'>
                                                    <h4 className='font-bold'>Email</h4>
                                                    <h3>{item.resemail}</h3>
                                                </div>
                                                <div className='m-2 p-2'>
                                                    <h4 className='font-bold'>Contact</h4>
                                                    <h3>{item.resmobno}</h3>
                                                </div>
                                            </div>

                                            <div className='flex '>
                                                <div className='m-2 p-2'>
                                                    <h4 className='font-bold'>ID</h4>
                                                    <h3>{item.resid}</h3>
                                                </div>
                                                <div className='m-2 p-2'>
                                                    <h4 className='font-bold'>Position</h4>
                                                    <h3>{item.position}</h3>
                                                </div>

                                            </div>

                                        </div>

                                        <div className='bg-slate-400'>
                                            <h2 className='font-extrabold bg-slate-300 p-2 text-lg'>Document</h2>
                                            <div className='flex '>
                                                <div className='m-2 p-2'>
                                                    <h4 className='font-bold'>Certificate</h4>
                                                    <h3>{item.certificate}</h3>
                                                </div>
                                                <div className='m-2 p-2'>
                                                    <h4 className='font-bold'>Date Of Registration</h4>
                                                    <h3>{item.dateofres}</h3>
                                                </div>
                                                <div className='m-2 p-2'>
                                                    <a target='_blank' href={item.certificate}><button className='btn w-[100px]' >View</button></a>
                                                </div>

                                            </div>


                                        </div>

                                        <div className='bg-slate-400  flex flex-wrap'>

                                            <div className='m-2 p-2'>
                                                <button className='btn w-[100px]' onClick={() => acceptSchool(item)}>Accept</button>
                                            </div>
                                            <div className='m-2 p-2'>
                                                <button className='btn w-[100px]' onClick={() => rejectSchool(item)}>Reject</button>
                                            </div>

                                        </div>
                                    </div>

                                </AccordionDetails>
                            </Accordion>
                        </div>
                    ))}
                </div>
            </div>

        </main>

    )
}

export default AdminHome