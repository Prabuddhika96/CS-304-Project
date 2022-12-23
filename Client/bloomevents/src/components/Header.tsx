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
            <header className={`px-50 text-center text-[90] flex z-50 top-0 w-full ease-in-out duration-200 fixed ${
            small ? "bg-[#000000a8] py-2" : "py-1"
            }`}>
                <div className='w-2/12 pl-20 text-left'>
                    <Link to='/'><img src={logo} alt="" className='w-28 hover:shadow-lg hover:shadow-[#FF4C0A] hover:duration-300'/></Link>
                </div>
                
                <div className='w-7/12 pl-20 text-left'>                   
                    <ul className='pt-4 ml-10 text-center text-xl text-[#fff]'>
                        <li className='inline p-5 hover:text-[#FF4C0A] hover:duration-300'><Link to='/'>Home</Link></li>
                        <li className='inline p-5 hover:text-[#FF4C0A] hover:duration-300'><Link to='/services'>Services</Link></li>
                        <li className='inline p-5 hover:text-[#FF4C0A] hover:duration-300'><Link to='/aboutus'>About Us</Link></li>
                        <li className='inline p-5 hover:text-[#FF4C0A] hover:duration-300'><Link to='/contactus'>Contact Us</Link></li>
                    </ul>
                </div>
    
                <div className='right-0 w-3/12 text-right text-[#000]'>
                    <ul className='pt-4 pr-12 list-none'>
                        <li className='inline py-2 px-6 font-medium rounded-full text-[#FF4C0A] border-2 border-[#FF4C0A] border-solid text-lg hover:bg-[#FF4C0A] hover:text-black hover:duration-200 mx-2'><Link to='/login' className='header-btn'>Login</Link></li>
                        <li className='inline py-2 px-6 font-medium rounded-full text-[#FF4C0A] border-2 border-[#FF4C0A] border-solid text-lg hover:bg-[#FF4C0A] hover:text-black hover:duration-200 mx-2'><Link to='/signup' className='header-btn'>Sign Up</Link></li>
                    </ul>
                </div>
            </header>
            
        </div>
  )
}

export default Header