import Carousel from 'components/Carousel';
import SuccessCard from 'components/SuccessCard';
import 'styles/btns.css';
import man from 'img/man.jpg';
import { Link } from 'react-router-dom';


function LandingPage() {
  return (
    <div> 
      {/* Hero */}
      <div>
        <div className='absolute text-[#fff] z-20 ml-10 mt-[250px] bg-[#00000084] p-12'>
          <h1 className='text-5xl'>Get ready for a <span className='text-[#FF4C0A]'>Event</span></h1>
          <p className='my-1 text-lg'>We bring dedicated design teams to entrepreneurs seeking talents to grow their brands.</p>
          
          <Link to='/services'><button className="mt-8 rounded-full custom-btn btn-1">Get Started</button></Link>
        </div>
        <Carousel/>    
      </div>  

      {/* Section 2 */}
      <div className='text-[#fff] my-16'>
        <p className="w-3/12 mx-auto mb-8 text-lg text-center">We bring dedicated design teams to entrepreneurs seeking talents to grow their brands.</p>
        
        <div className="flex w-11/12 mx-auto">
          <SuccessCard url={man} title='Customers' count='100+' key='0'/>
          <SuccessCard url={man} title='Customers' count='100+' key='0'/>
          <SuccessCard url={man} title='Customers' count='100+' key='0'/>
          <SuccessCard url={man} title='Customers' count='100+' key='0'/>
        </div>
      </div>

      {/* Section 3 */}
      <div className='text-center'>
        <h2 className='text-2xl'>We bring dedicated</h2>

        <div className="my-14 parallax"></div>

        <p className='w-8/12 mx-auto text-base text-center'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam deserunt maxime, voluptatibus dignissimos minima laudantium blanditiis? Fugit, deleniti. Iusto in, odio non neque error fugit dolore! Quam eligendi exercitationem impedit?</p>
      </div>
    </div>
  )
}

export default LandingPage