import React from 'react'
import { Link } from 'react-router-dom'
import Searchbar from './Searchbar'
import ServiceCard from './ServiceCard'
import Sidebar from './Sidebar'

function Services() {
  return (
    <div className='bg-slate-100'>
      <Searchbar/>

      <div className='flex justify-center w-10/12 py-5 mx-auto'>
        <Sidebar/>

        <div className='w-9/12'>
          <Link to='/providerdetails'><ServiceCard/></Link>
          <ServiceCard/>
          <ServiceCard/>
          <ServiceCard/>
          <ServiceCard/>
          <ServiceCard/>
        </div>
      </div>
    </div>
  )
}

export default Services