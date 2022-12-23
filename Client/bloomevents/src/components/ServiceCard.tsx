import { BiCategory } from 'react-icons/bi';
import { GoLocation } from 'react-icons/go';
import { FiPackage } from 'react-icons/fi';

// import image from 'img/dj.jpg';


function ServiceCard({image, providerName, district, category, packageCount}:any) {
  return (
    <div className='service-card'>
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
                width: '25%',

            }}
        >

        </div>


        <div className='w-9/12 px-6 pt-2 text-left'>
            <h2 className='mb-4 text-xl'>{providerName}</h2>
            <p className='flex items-center mb-1'><GoLocation className='mr-2'/> {district}</p>
            <h3 className='flex items-center mb-1'><BiCategory className='mr-2'/> {category}</h3>
            <h3 className='flex items-center mb-1'><FiPackage className='mr-2'/> {packageCount} Packages</h3>
        </div>
    </div>
  )
}

export default ServiceCard