import React, { useEffect, useState } from "react";
import logo from 'img/logo.png';
import { Link } from 'react-router-dom';

function Header() {
    const [small, setSmall] = useState(false);

    useEffect(() => {
        if (typeof window !== "undefined") {
        window.addEventListener("scroll", () =>
            setSmall(window.pageYOffset > 50)
        );
        }
    }, []);

  return (
    <div>
            <header className={`px-50 text-center text-[90] flex z-50 font-bold top-0 w-full ease-in-out duration-200 fixed ${
            small ? "bg-red-600 py-2" : "py-1"
            }`}>
                <div className='flex w-6/12 pl-20 text-left'>
                    <Link to='/'><img src={logo} alt="" className='w-28'/></Link>
                    
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