import ServiceCard from 'components/ServiceCard';
import image from 'img/parallax.jpg';
import { Link } from 'react-router-dom';

const des='Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore perferendis corrupti sapiente maiores. Amet reprehenderit natus deserunt labore iste laborum, quam numquam possimus, obcaecati voluptatibus ut dolore tempore est ducimus.';

function Services() {
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

  return (
    <div className='pt-24'>
      {/* search section */}
      <div className='w-8/12 mx-auto'>
        <div className='text-center'>
          <input 
            type="text" 
            placeholder="Type here" 
            className="w-full bg-[#000] input focus:border-2 border-[#FF4C0A]" />
        </div>

        <div className="flex justify-center my-3">
          <select className="service-drop-down select select-ghost">
            <option disabled selected>District</option>
            <option>Svelte</option>
            <option>Vue</option>
            <option>React</option>
          </select>

          <select className="service-drop-down select select-ghost">
            <option disabled selected>Category</option>
            <option>Svelte</option>
            <option>Vue</option>
            <option>React</option>
          </select>
        </div>

        <button className="w-full mx-auto rounded-3 custom-btn btn-1">Search</button>
      </div>

      {/* service cards */}
      <div className='service-card-area'>
        {cards.map((c)=>
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