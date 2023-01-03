import ServiceCard from 'components/ServiceCard';
import image from 'img/parallax.jpg';
import { Link } from 'react-router-dom';

import { useState } from 'react';

import Select from 'react-select';
import { colourOptions } from 'docs/data';
import { cards } from 'docs/cards';


function Services() {

  const [isClearable /*, setIsClearable*/ ] = useState(true);
  // const [isSearchable, setIsSearchable] = useState(true);
  // const [isDisabled, setIsDisabled] = useState(false);
  // const [isLoading, setIsLoading] = useState(false);
  // const [isRtl, setIsRtl] = useState(false);


  return (
    <div className='pt-24'>
      {/* search section */}
      <div className='flex justify-around w-full mx-auto'>     
          <div className="w-3/12">
            <Select
              className=" basic-single"
              classNamePrefix="Category"
              defaultValue={colourOptions[0]}
              // isDisabled={isDisabled}
              // isLoading={isLoading}
              isClearable={isClearable}
              // isRtl={isRtl}
              // isSearchable={isSearchable}
              name="color"
              onChange={e=>{console.log(e?.value)}}
              options={colourOptions}
            />
          </div>

          <div className="w-3/12">
            <Select
              className="w-full basic-single"
              classNamePrefix="Category"
              defaultValue={colourOptions[0]}
              // isDisabled={isDisabled}
              // isLoading={isLoading}
              isClearable={isClearable}
              // isRtl={isRtl}
              // isSearchable={isSearchable}
              name="color"
              onChange={e=>{console.log(e?.value)}}
              options={colourOptions}
            />
          </div>

          <div className="w-5/12">
            <Select
              className="w-full basic-single"
              classNamePrefix="Category"
              defaultValue={colourOptions[0]}
              // isDisabled={isDisabled}
              // isLoading={isLoading}
              isClearable={isClearable}
              // isRtl={isRtl}
              // isSearchable={isSearchable}
              name="color"
              onChange={e=>{console.log(e?.value)}}
              options={colourOptions}
            />
          </div>      
          
      </div>


      

      {/* service cards */}
      <div className='service-card-area'>
        {cards.map((c:any , i:number)=>
          <Link to={{
            pathname: `/providerdetails/${c.provider_id}`
          }}>
            <ServiceCard 
              image={image} 
              providerName={c.providerName}
              district={c.district}
              category={c.category} 
              packageCount={c.packageCount}
              description={c.description}
              ratings={c.ratings}
            />
          </Link>
        )}
      </div>

      
    </div>
  )
}

export default Services