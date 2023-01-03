import ServiceCard from 'components/ServiceCard';
import image from 'img/parallax.jpg';
import { Link } from 'react-router-dom';

import { useState } from 'react';

import Select from 'react-select';
import { colourOptions } from 'docs/data';

const des='Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore perferendis corrupti sapiente maiores. Amet reprehenderit natus deserunt labore iste laborum, quam numquam possimus, obcaecati voluptatibus ut dolore tempore est ducimus.';

function Services() {

  const [isClearable, setIsClearable] = useState(true);
  const [isSearchable, setIsSearchable] = useState(true);
  const [isDisabled, setIsDisabled] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isRtl, setIsRtl] = useState(false);

  const cards=[
    {
      provider_id : 1,
      providerName : 'Provider Name 1', 
      district : 'District',
      category : 'Category', 
      packageCount : '3', 
      description : {des},
      ratings : '2.5'
    },
    {
      provider_id : 2,
      providerName : 'Provider Name 2', 
      district : 'District',
      category : 'Category', 
      packageCount : '3', 
      description : {des},
      ratings : '2.5'
    },
    {
      provider_id : 3,
      providerName : 'Provider Name 3', 
      district : 'District',
      category : 'Category', 
      packageCount : '3', 
      description : {des},
      ratings : '2.5'
    },
    {
      provider_id : 4,
      providerName : 'Provider Name 4', 
      district : 'District',
      category : 'Category', 
      packageCount : '3', 
      description : {des},
      ratings : '2.5'
    },
    {
      provider_id : 5,
      providerName : 'Provider Name 5', 
      district : 'District',
      category : 'Category', 
      packageCount : '3', 
      description : {des},
      ratings : '2.5'
    },
    {
      provider_id : 6,
      providerName : 'Provider Name 6', 
      district : 'District',
      category : 'Category', 
      packageCount : '3',  
      description : {des},
      ratings : '2.5'
    },
    {
      provider_id : 7,
      providerName : 'Provider Name 7', 
      district : 'District',
      category : 'Category', 
      packageCount : '3', 
      description : {des},
      ratings : '2.5'
    },
    {
      provider_id : 8,
      providerName : 'Provider Name 8', 
      district : 'District',
      category : 'Category', 
      packageCount : '3', 
      description : {des},
      ratings : '2.5'
    },
    {
      provider_id : 9,
      providerName : 'Provider Name 9', 
      district : 'District',
      category : 'Category', 
      packageCount : '3', 
      description : {des},
      ratings : '2.5'
    }
  ];

  const [first, setfirst] = useState()

  const handleInput=()=>{
    // console.log(name);
  }


  return (
    <div className='pt-24'>
      {/* search section */}
      <div className='flex justify-around w-full mx-auto'>     
          <div className="w-4/12">
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

          <div className="w-4/12">
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

          <div className="w-4/12">
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
              description={des}
              ratings={c.ratings}
            />
          </Link>
        )}
      </div>

      
    </div>
  )
}

export default Services