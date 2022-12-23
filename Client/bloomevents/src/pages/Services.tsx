import ServiceCard from 'components/ServiceCard'
import React from 'react';
import image from 'img/dj.jpg';

function Services() {
  return (
    <div className='pt-24'>
      <ServiceCard image={image} providerName='Provider Name' district='District' category='Category' packageCount='3'/>
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
  )
}

export default Services