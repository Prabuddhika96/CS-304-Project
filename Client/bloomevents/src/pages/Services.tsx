import ServiceCard from 'components/ServiceCard'
import image from 'img/parallax.jpg';

function Services() {
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
        <ServiceCard image={image} providerName='Provider Name' district='District' category='Category' packageCount='3'/>
        <ServiceCard image={image} providerName='Provider Name' district='District' category='Category' packageCount='3'/>
        <ServiceCard image={image} providerName='Provider Name' district='District' category='Category' packageCount='3'/>
        <ServiceCard image={image} providerName='Provider Name' district='District' category='Category' packageCount='3'/>
        <ServiceCard image={image} providerName='Provider Name' district='District' category='Category' packageCount='3'/>
        <ServiceCard image={image} providerName='Provider Name' district='District' category='Category' packageCount='3'/>
        <ServiceCard image={image} providerName='Provider Name' district='District' category='Category' packageCount='3'/>
        <ServiceCard image={image} providerName='Provider Name' district='District' category='Category' packageCount='3'/>
        <ServiceCard image={image} providerName='Provider Name' district='District' category='Category' packageCount='3'/>
      </div>
    </div>
  )
}

export default Services