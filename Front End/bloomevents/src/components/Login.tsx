import React from 'react';
import image from 'Img/logo.png';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div className='flex w-11/12 mb-20 my-14'>
      <div className='w-6/12'>
        <img src={image} alt="" className='w-full'/>
      </div>

      <div className='w-6/12 '>
        <div className="mt-10 sm:mt-0">
          
          <form action="#" method="POST">
              
            <div className="overflow-hidden drop-shadow-2xl sm:rounded-md">
              <div className="px-4 py-5 bg-white sm:p-6">

                <h1 className='mb-3 text-3xl text-left'>Log <span className='text-[#ffa537]'>In</span></h1>

                <div className="col-span-6 my-7 sm:col-span-4">
                  <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
                    Email address
                  </label>
                  <input
                    type="text"
                    name="email-address"
                    id="email-address"
                    autoComplete="email"
                    className="input-fld"
                  />
                </div>

                <div className="col-span-6 my-7 sm:col-span-4">
                  <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
                    Password
                  </label>
                  <input
                    type="text"
                    name="email-address"
                    id="email-address"
                    autoComplete="email"
                    className="input-fld"
                  />
                </div>
              </div>

              

              <div className="px-4 py-3 text-right bg-gray-50 sm:px-6">
              <p className='text-left'>Didn't Have An Account? <Link to='/signup' className='text-blue-800'>Sign Up</Link></p>
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