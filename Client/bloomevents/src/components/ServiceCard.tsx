import * as React from 'react';
import { BiCategory } from 'react-icons/bi';
import { GoLocation, GoPackage } from 'react-icons/go';

import image from 'img/dj.jpg';


function ServiceCard() {
  return (
    <div className='flex overflow-hidden h-44 bg-[#fff] w-11/12 mx-auto my-2 text-center border-2 rounded-2xl drop-shadow-lg hover:scale-[1.01] hover:duration-300 '>
        {/* <div className='w-2/12'>
            <img src={image} alt="" className='w-48 bg-cover' />
        </div> */}

        <div
            id='back-img'
            style={{
                background: `url(${image}) center no-repeat`,
                backgroundSize: 'cover',
                // position: 'absolute',
                zIndex: -10,
                // height: '500px',
                // top: '32px',
                overflow: 'hidden',
                width: '20%',

            }}
        >

        </div>


        <div className='w-9/12 px-6 pt-2 text-left'>
            <h2 className='mb-4 text-xl'>Provider Name</h2>
            <p className='flex items-center mb-1'><GoLocation className='mr-2'/> District</p>
            <h3 className='flex items-center mb-1'><BiCategory className='mr-2'/> Categoty</h3>
            <h3 className='flex items-center mb-1'><GoPackage className='mr-2'/> 3 Packages</h3>
        </div>
    </div>
  )
}

export default ServiceCard