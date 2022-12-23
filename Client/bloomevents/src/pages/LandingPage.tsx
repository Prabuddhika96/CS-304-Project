import Carousel from 'components/Carousel';
import 'styles/btns.css'


function LandingPage() {
  return (
    <div> 
      {/* Hero */}
      <div>
        <div className='absolute text-[#fff] z-20 ml-10 mt-[250px] bg-[#00000084] p-12'>
          <h1 className='text-5xl'>Get ready for a <span className='text-[#FF4C0A]'>Event</span></h1>
          <p className='my-1 text-lg'>We bring dedicated design teams to entrepreneurs seeking talents to grow their brands.</p>
          <button className="mt-8 rounded-full custom-btn btn-1">Get Started</button>
        </div>
        <Carousel/>    
      </div>  

      {/* Section 2 */}
      
    </div>
  )
}

export default LandingPage