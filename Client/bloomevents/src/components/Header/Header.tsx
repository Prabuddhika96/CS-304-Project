import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import logo from 'img/logo.png';
import NavElement from "./NavElement/NavElement";
import HeaderBtnLink from "./NavElement/HeaderBtnLink";

import { RouteName } from 'constant/routeName';
import LoggedUserNav from "./Logged User/LoggedUserNav";

function Header() {
    const user:boolean =true;
    const admin:boolean =false;

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
            <header className={`px-50 py-[13px] text-center text-[#fff] bg-[#00000086]  flex justify-between z-50 top-0 w-full ease-in-out duration-200 fixed ${
            small ? "py-[13px]" : "py-[13px]" }`}>
                <div className='w-2/12 pl-20 text-left'>
                    <Link to={RouteName.Home}><img src={logo} alt="" className='w-20 hover:shadow-lg'/></Link>
                </div>
                
                <div className='pl-20 text-left'>                   
                    <ul className={`pt-4 ml-10 text-center flex text-base`}>
                        <NavElement linkAddress={RouteName.Home} name={'Home'}/>
                        <NavElement linkAddress={RouteName.Services} name={'Services'}/>
                        <NavElement linkAddress={RouteName.Aboutus} name={'About Us'}/>
                        <NavElement linkAddress={RouteName.Contactus} name={'Contact Us'}/>
                    </ul>
                </div>
    
                {user ?
                    <>
                        {admin ? 
                            <></>
                        : 
                            <div className="flex pr-8">
                                <LoggedUserNav/>
                            </div>
                        }
                    </>                
                    
                :
                    <div className='right-0 text-right text-[#000]'>
                        <ul className='flex pt-4 pr-12 list-none'>
                            <HeaderBtnLink address={RouteName.Login}  name={'Login'}/>
                            <HeaderBtnLink address={RouteName.Register}  name={'Register'}/>
                        </ul>
                    </div>
                }
            </header>
            
        </div>
  )
}

export default Header