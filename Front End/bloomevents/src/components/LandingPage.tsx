// import React from 'react';
import 'styles/LandingPage.css'
// import landing_img from 'Img/landing.jpg';
import OurSuccessCard from './OurSuccessCard';

function LandingPage() {
  return (
    <div>
      {/* Landing Page */}
      <div className="parallax text-[#fff] text-center pt-36">
        <div className='w-7/12 p-12 px-40 mx-auto bg-[#00000085]'>
          <h1 className='text-5xl uppercase'>We create your space better</h1>
          <p className='mt-4'>
            Our team creates comfortable spaces for our clients. 
            We’ve been designing your everyday life and work through great ideas since 1999.
          </p>
          <button className='py-2 mt-5 text-lg px-14 explore-btn rounded-xl hover:scale-105 hover:duration-300'>Explore</button> 
        </div>
      </div>



      {/* <div className='flex'>
        <div className='w-6/12 p-12 px-40 mx-auto mt-16'>
          <h1 className='text-5xl'>We create your<br/>space better</h1>
          <p className='mt-4'>
            Our team creates comfortable spaces for our clients. 
            We’ve been designing your everyday life and work through great ideas since 1999.
          </p>
          <button className='py-2 mt-5 text-lg px-14 explore-btn rounded-xl hover:scale-105 hover:duration-300'>Explore</button> 
        </div>

        <div className='w-6/12'>
          <img src={landing_img} alt="" />
        </div>        
      </div> */}

      {/* Our Success */}
      <div className='py-16 w-full bg-[#e6e6e6]'>
        <h1 className='pb-8 text-3xl text-center'>Our <span className='text-[#fcad4c]'>Success</span></h1>

        <div className='flex justify-center'>          
          <OurSuccessCard/>
          <OurSuccessCard/>
          <OurSuccessCard/>
          <OurSuccessCard/>
        </div>
      </div>

      {/* contact Us */}
      <div className='flex justify-around p-5 my-20'>
        <div className=''>
          <h1 className='m-auto text-3xl text-center'>Do you have <br/><span className='text-[#fcad4c]'>any question ?</span></h1>
        </div>

        <div>
          <button className='py-2 my-auto text-lg px-14 explore-btn rounded-xl hover:scale-105 hover:duration-300'>CONTACT US</button> 
        </div>
      </div>

    </div>    
  )
}

export default LandingPage