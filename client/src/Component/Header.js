import React, { useContext, useEffect, useState } from 'react';
import logo from '../images/gujlogo.png';
import gujEdu from '../images/GujEdulogo.png';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';
import alertContext from '../Context/alertContext';
import '../Styles/Header.css';

const Header = () => {
    const location=useLocation()
    const navigate=useNavigate()
    const{showAlert}=useContext(alertContext)
    const [shouldShrink, setShouldShrink] = useState(false);
    const [menu, setMenu] = useState(false)

    const showMenu=()=>{
        if(menu)
        {
            setMenu(false)
        }
        else
        {
            setMenu(true)
        }
    }

    const handleAdmin=()=>{
        if(location.pathname==='/admindashboard')
        {
            navigate('/adminlogin')
            showAlert('success','Logged Out Succesfully')
        }
    }

    const logout=()=>{
        localStorage.removeItem('token')
        navigate('/schoollogin')
        showAlert("success","Logged Out Successfully")
    }
    const adminlogout=()=>{
        localStorage.removeItem('admin')
        navigate('/adminlogin')
        showAlert("success","Logged Out Successfully")
    }

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 60) {
                setShouldShrink(true);
            } else {
                setShouldShrink(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="header-main-con">
            <div className="desk-top-nav">
                <div
                    className="header-con"
                    style={{
                        transition: 'all',
                        transitionDuration: '0.3s',
                    }}
                >
                    <div className="header-left">
                        <div className="header-logo-con">
                            <img src={logo} className="header-logo-img" alt="logo" />
                        </div>
                    </div>
                    <div className="header-right">
                        <div className="header-btns">
                        {!localStorage.getItem("admin")&&<Link onClick={handleAdmin} to={'/adminlogin'}>Admin Login</Link>}
                        {localStorage.getItem("admin")&&<Link onClick={adminlogout} to={'/adminlogin'}>Admin Logout</Link>}
                        {localStorage.getItem("admin")&&<Link to={'/admindashboard'}>Admin Dashboard</Link>}
                        {/* {!localStorage.getItem("token")&&<Link onClick={handleAdmin} to={'/adminlogin'}>{location.pathname=='/admindashboard'?'Log out':'Admin Login'}</Link>} */}
                        {!localStorage.getItem("token") && <Link to={'/schoollogin'}>School Login/Register</Link>}
                        {localStorage.getItem("token") && <Link  onClick={logout} to={'/schoollogin'}>School Logout</Link>}

                        </div>
                    </div>
                </div>
                <nav
                    className="nav-bar"
                    style={{
                        boxShadow: shouldShrink ? '0 2px 20px #8f8f8f' : 'none',
                        position: shouldShrink ? 'fixed' : 'static',
                        top: shouldShrink ? '0' : 'auto',
                        width: '100%',
                        zIndex: '999',
                    }}
                >
                    <div className="nav-logo-con" style={{ display: shouldShrink ? 'inline' : 'none' }}>
                        <Link to={'/home'}>
                            <img src={gujEdu} style={{ display: shouldShrink ? 'inline' : 'none' }} className="nav-logo-img" alt="logo" />
                        </Link>
                    </div>
                    <div className="nav-links ">
                        <ul className="nav-link-list">
                            <li>
                                <NavLink to={'/'}>Home</NavLink>
                            </li>
                            <li>
                                <NavLink to={'/graphicres'}>Graphical View</NavLink>
                            </li>
                            <li>
                                <NavLink to={'/dataentry'}>Data Entry</NavLink>
                            </li>
                            <li>
                                <NavLink to={'/aboutus'}>About Us</NavLink>
                            </li>
                            <li>
                                <NavLink to={'/contactus'}>Contact Us</NavLink>
                            </li>
                            <li>
                                <NavLink to={'/qna'}>QNA</NavLink>
                            </li>
                        </ul>
                    </div>
                    {/* <div className="header-btns " style={{ display: shouldShrink ? 'flex' : 'none' }}>
                        <Link to={'/adminlogin'}>Admin Login</Link>
                        <Link to={'/schoollogin'}>School Login/Register</Link>
                    </div> */}
                </nav>
            </div>
            <div className="mobile-nav">
                <div className="mobile-nav-left">
                    <img src={gujEdu} alt="" />
                </div>
                <div className="mobile-nav-right">
                    <div className="menu" onClick={showMenu}>
                        <GiHamburgerMenu />
                    </div>
                </div>
                <div className=' hidden w-[200px] absolute transition-all duration-300 top-16 h-[100vh] bg-slate-400' style={{right:menu?'0':'-200px'}}>
                    <ul className=" mobile-nav-links flex flex-col justify-center ">
                        <li>
                            <NavLink to={'/'}>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to={'/graphicres'}>Graphical View</NavLink>
                        </li>
                        <li>
                            <NavLink to={'/dataentry'}>Data Entry</NavLink>
                        </li>
                        <li>
                            <NavLink to={'/aboutus'}>About Us</NavLink>
                        </li>
                        <li>
                            <NavLink to={'/contactus'}>Contact Us</NavLink>
                        </li>
                        <li>
                            <NavLink to={'/qna'}>QNA</NavLink>
                        </li>
                    </ul>
                    <div className="  flex flex-col items-center">
                        <Link className='nav-btn p-[15px]' to={'/adminlogin'}>Admin Login</Link>
                        <Link className='nav-btn p-[15px]' to={'/schoollogin'}>School Login/Register</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
