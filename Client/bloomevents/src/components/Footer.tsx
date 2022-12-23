import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineInstagram, AiOutlineWhatsApp, AiOutlineFacebook } from 'react-icons/ai';

function Footer() {
  return (
    <div className='flex p-5 py-8 mt-12 relative h-[300px] bg-[#000] border-t-2 border-solid border-[#FF4C0A] pt-7'>
        <div className='w-1/3 text-left'>
            <div className='z-10 absolute inset-x-0 bottom-0 h-[105px] px-5'>
                <p><Link className='footer-links' to='/'>Privacy Policies</Link></p>          
                <p><Link className='footer-links' to='/'>Terms And Conditions</Link></p>          
                <p><Link className='footer-links' to='/'>Help and Support</Link></p>
            </div>          
        </div> 

        <div className='w-1/3 text-center'>
           <h1 className='text-3xl'>Bloom <span className='text-[#FF4C0A]'>Events</span></h1>

           <ul className='flex justify-center w-full '>
                <li className='footer-social-media'><Link to=''><AiOutlineInstagram/></Link></li>
                <li className='footer-social-media'><Link to=''><AiOutlineFacebook/></Link></li>
                <li className='footer-social-media'><Link to=''><AiOutlineWhatsApp/></Link></li>
            </ul>

            <div className='absolute inset-x-0 bottom-0 h-[50px] px-5'>
                <p>Powerd by <span className='text-[#FF4C0A]'>Bloom Events</span></p>
            </div>     
        </div>
        
        <div className='w-1/3 text-right'>
            <div className='absolute inset-x-0 bottom-0 h-[105px] px-5'>
                <p>071-9246621</p>          
                <p>bloomevents@gmail.com</p>          
                <p>Sri Lanka</p>
            </div>          
        </div> 
    </div>
  )
}

export default Footer