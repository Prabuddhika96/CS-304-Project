import React, { useState } from 'react';
import image from 'img/logo.png';
import { Link } from 'react-router-dom';
import { TextField } from '@mui/material';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';

function Login() {
  const [showPw, setShowPw]=useState<boolean>(false);

  const handleClick=()=>{
    if(showPw){
      setShowPw(false);
    }
    else{
      setShowPw(true);
    }
  }

  return (
    <div className='flex items-center w-11/12 pt-24 mb-20'>
      <div className='w-6/12'>
        <img src={image} alt="" className='w-full'/>
      </div>

      <div className='w-6/12 '>
        <div className="mt-10 sm:mt-0">
          
          <form action="#" method="POST">
              
            <div className="overflow-hidden drop-shadow-2xl sm:rounded-md">
              <div className="px-4 py-5 bg-white sm:p-6">

                <h1 className='mb-3 text-3xl text-left'>Log <span className='text-[#ffa537]'>In</span></h1>

                <div className="col-span-6 buttonIn my-7 sm:col-span-4">
                  <TextField id="outlined" label="Email address" className='w-full' variant="outlined" />
                </div>

                <div className="flex w-full col-span-6 buttonIn my-7 sm:col-span-4">
                  <TextField id="outlined" type={showPw ? "text" : "password"} label="Password" className='w-full rounded-[5px] outline-none m-0 p-0 ' variant="outlined" />
                  <h1 id="clear" className='showPw' onClick={handleClick}>
                    {showPw ? <AiOutlineEyeInvisible/> : <AiOutlineEye/>}
                  </h1>
                  {/* className='absolute rounded-[5px] right-0 z-[2] border-none top-[2px] translate-x-[2px]' */}
                </div>
              </div>

              

              <div className="px-4 py-3 text-right bg-gray-50 sm:px-6">
              <p className='text-left'>Didn't Have An Account? <Link to='/signup' className='text-[#e17c01]'>Sign Up</Link></p>
                <button
                  type="submit"
                  className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-[#ffa537] border border-transparent rounded-md shadow-sm hover:bg-[#d48019] focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Login
                </button>
              </div>
              
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login