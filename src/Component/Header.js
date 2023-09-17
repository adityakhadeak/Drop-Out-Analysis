import React, { useEffect, useState } from 'react'
import logo from '../images/gujlogo.png'
import gujEdu from '../images/GujEdulogo.png'
import { Link, NavLink } from 'react-router-dom'
import { GiHamburgerMenu } from "react-icons/gi";

import '../Styles/Header.css'
const Header = () => {
    const [shouldShrink, setShouldShrink] = useState(false);

    useEffect(() => {
        // Add a scroll event listener to track scroll position
        const handleScroll = () => {
            if (window.scrollY > 10) {
                // If scroll position is greater than 100px, shrink the header
                setShouldShrink(true);
            } else {
                // Otherwise, keep the header normal size
                setShouldShrink(false);
            }
        };

        // Attach the scroll event listener
        window.addEventListener('scroll', handleScroll);

        // Cleanup the event listener when the component unmounts
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <div className='header-main-con'>
            <div className='desk-top-nav'>
                <div className='header-con' style={{ display: shouldShrink ? 'none' : 'flex', transition: 'all', transitionDuration: '0.3s' }}>
                    <div className='header-left'>
                        <div className='header-logo-con'>
                            <img src={logo} className='header-logo-img' alt="logo" />
                        </div>
                    </div>
                    <div className='header-right'>
                        <div className='header-btns'>
                            <Link to={'/adminlogin'}>Admin Login</Link>
                            <Link to={'/schoollogin'}>School Login/Register</Link>
                        </div>
                    </div>
                </div>
                <nav className='nav-bar' style={{ boxShadow: shouldShrink ? '0 2px 20px #8f8f8f' : 'none' }}>
                    <div className='nav-logo-con' style={{ display: shouldShrink ? 'inline' : 'none' }}>
                        <a href=""><img src={gujEdu} style={{ display: shouldShrink ? 'inline' : 'none' }} className='nav-logo-img' alt="logo" /></a>
                    </div>
                    <div className='nav-links'>
                        <ul className='nav-link-list'>
                            <li><NavLink to={'/'}>Home</NavLink></li>
                            <li><NavLink to={'/graphicres'}>Graphical View</NavLink></li>
                            <li><NavLink to={'/dataentry'}>Data Entry</NavLink></li>
                            <li><NavLink to={'/aboutus'}>About Us</NavLink></li>
                            <li><NavLink to={'/contactus'}>Contact Us</NavLink></li>
                            <li><NavLink to={'/qna'}>QNA</NavLink></li>
                        </ul>
                    </div>
                    <div className='header-btns ' style={{ display: shouldShrink ? 'flex' : 'none' }}>
                        <a>Admin Login</a>
                        <a>School Login/Register</a>
                    </div>

                </nav>
            </div>
            <div className='mobile-nav'>
                <div className='mobile-nav-left'>
                    <img src={gujEdu} alt="" />
                </div>
                <div className='mobile-nav-right'>
                    <div className='menu'><GiHamburgerMenu/></div>
                </div>
            </div>
        </div>


    )
}

export default Header
