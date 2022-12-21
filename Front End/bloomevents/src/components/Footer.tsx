import React from 'react';
import { Link } from 'react-router-dom';
import { FaTwitterSquare, FaFacebookSquare, FaLinkedin } from 'react-icons/fa';

function Footer() {
  return (
    <div className='flex p-5 bg-[#e6e6e6] py-8'>
        <div className='w-1/3 text-center'>
            <h2 className='mb-8 text-2xl'>Bloom <span className='text-[#ffa537]'>Events</span></h2>

            <p className='mb-5'>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est quod quaerat suscipit ipsa reprehenderit animi maxime, 
                debitis, mollitia saepe repudiandae pariatur nam fuga ratione delectus aut aliquam quo, eum autem?
            </p>

            <p>@2022 Bloom Events. All Rights Reserved</p>
        </div> 

        <div className='w-1/3 text-center'>
            <h2 className='mb-5 text-xl'>Navigation</h2>

            <div className=''>
                <ul>
                    <li className='p-2'><Link to='/'>Home</Link></li>
                    <li className='p-2'><Link to='/services'>Services</Link></li>
                    <li className='p-2'><Link to='/services'>About Us</Link></li>
                    <li className='p-2'><Link to='/services'>Contact Us</Link></li>
                </ul>

                <ul className='flex justify-center w-full'>
                    <li className='inline px-2 mt-2 text-3xl hover:scale-[1.2] hover:duration-300'><Link to=''><FaTwitterSquare/></Link></li>
                    <li className='inline px-2 mt-2 text-3xl hover:scale-[1.2] hover:duration-300'><Link to=''><FaFacebookSquare/></Link></li>
                    <li className='inline px-2 mt-2 text-3xl hover:scale-[1.2] hover:duration-300'><Link to=''><FaLinkedin/></Link></li>
                </ul>
            </div>
        </div>
        
        <div className='w-1/3 text-center'>
            <h2 className='mb-5 text-xl'>Contacts</h2>

           <div>
                <h3 className='text-[#565656]'>ADDRESS</h3>
                <p className='mb-4'>3517W.Gray St. Utica, Pennsylvania</p>

                <h3 className='text-[#565656]'>EMAIL</h3>
                <p className='mb-4'>bloomevents@gmail.com</p>

                <h3 className='text-[#565656]'>PHONES</h3>
                <p className='mb-4'>+9471 924 6621</p>
           </div>
        </div>
    </div>
  )
}

export default Footer