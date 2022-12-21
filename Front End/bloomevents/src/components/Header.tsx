import React from 'react';
import 'styles/Header.css';
import logo from 'Img/logo.png';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div>
            <header className='flex w-full px-5 py-2 text-[#000] bg-transparent flex-nowrap'>
                <div className='flex w-6/12 pl-20 text-left'>
                    <img src={logo} alt="" className='w-28'/>

                    <ul className='pt-4 ml-10 text-left text-[#000]'>
                        <li className='inline p-5 hover:text-[#aeaeae] hover:duration-300'><Link to='/'>Home</Link></li>
                        <li className='inline p-5 hover:text-[#aeaeae] hover:duration-300'><Link to='/services'>Services</Link></li>
                        <li className='inline p-5 hover:text-[#aeaeae] hover:duration-300'><Link to='/aboutus'>About Us</Link></li>
                        <li className='inline p-5 hover:text-[#aeaeae] hover:duration-300'><Link to='/contactus'>Contact Us</Link></li>
                    </ul>
                </div>
    
                <div className='right-0 w-6/12 text-right text-[#000]'>
                    <ul className='pt-4 pr-12 list-none'>
                        <li className='inline p-5 text-[#fcad4c] text-lg'><Link to='/login' className='header-btn'>Login</Link></li>
                        <li className='inline p-5 text-[#fcad4c] text-lg'><Link to='/signup' className='header-btn'>Sign Up</Link></li>
                    </ul>
                </div>
            </header>
            
        </div>
      )
}

export default Header