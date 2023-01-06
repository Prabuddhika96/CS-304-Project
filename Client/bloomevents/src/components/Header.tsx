import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import logo from 'img/logo.png';

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
            <header className={`px-50 py-[12.2px] text-center text-[#fff] bg-[#00000086]  flex justify-between z-50 top-0 w-full ease-in-out duration-200 fixed ${
            small ? "py-0" : "py-0"
            }`}>
                <div className='w-2/12 pl-20 text-left'>
                    <Link to='/'><img src={logo} alt="" className='w-20 hover:shadow-lg'/></Link>
                </div>
                
                <div className='pl-20 text-left'>                   
                    <ul className={`pt-4 ml-10 text-center text-base`}>
                        <li className='inline p-5 hover:text-[#ffc277] hover:duration-300 '><Link to='/'>Home</Link></li>
                        <li className='inline p-5 hover:text-[#ffc277] hover:duration-300'><Link to='/services'>Services</Link></li>
                        <li className='inline p-5 hover:text-[#ffc277] hover:duration-300'><Link to='/aboutus'>About Us</Link></li>
                        <li className='inline p-5 hover:text-[#ffc277] hover:duration-300'><Link to='/contactus'>Contact Us</Link></li>
                    </ul>
                </div>
    
                <div className='right-0 text-right text-[#000]'>
                    <ul className='pt-4 pr-12 list-none'>
                        <li className='inline py-1 px-5 font-medium rounded-full text-[#ffc277] border-2 border-[#ffc277] border-solid text-base hover:bg-[#ffc277] hover:text-black hover:duration-200 mx-2'><Link to='/login' className='header-btn'>Login</Link></li>
                        <li className='inline py-1 px-5 font-medium rounded-full text-[#ffc277] border-2 border-[#ffc277] border-solid text-base hover:bg-[#ffc277] hover:text-black hover:duration-200 mx-2'><Link to='/signup' className='header-btn'>Sign Up</Link></li>
                    </ul>
                </div>
            </header>
            
        </div>
  )
}

export default Header