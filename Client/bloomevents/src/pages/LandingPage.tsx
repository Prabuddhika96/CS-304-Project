import Carousel from 'components/Carousel';
import SuccessCard from 'components/SuccessCard';
import 'styles/btns.css';
// import man from 'img/man.jpg';
import { Link } from 'react-router-dom';
// import { GrUserWorker } from 'react-icons/gr';
import { AiOutlineCamera, AiOutlineCalendar } from 'react-icons/ai';
import { FiUsers, FiPackage } from 'react-icons/fi';
// import logo from 'img/logo.png';

// import dance from 'img/dance.jpg';
// import man from 'img/man.jpg';
// import landing from 'img/landing.jpg';


function LandingPage() {
  const cardDetails=[
    {
      id:0,
      url:FiUsers,
      title:'Customers',
      count:'100+'
    },
    {
      id:1,
      url:AiOutlineCamera,
      title:'Service Providers',
      count:'100+'
    },
    {
      id:2,
      url:FiPackage,
      title:'Packages',
      count:'100+'
    },
    {
      id:3,
      url:AiOutlineCalendar,
      title:'Events',
      count:'100+'
    }
  ];

  // const imageArray=[{dance},{man},{landing}];

  
  return (
    <div> 
      {/* Hero */}
      <div>
        <div className='absolute left-16 flex text-[#fff] w-7/12 z-20 ml-10 mt-[200px]  p-12'>
          <div>
            <h1 className='text-5xl'>Get ready for a <span className='text-[#ffc277]'>Event</span></h1>
            <p className='mt-5 text-base text-left'>We bring dedicated design teams to entrepreneurs seeking talents to grow their brands.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt ratione, doloribus voluptatibus quo, quibusdam officiis numquam ut ipsa voluptatum vero repellat accusamus<br/> tenetur eum sed, aliquid quae?</p>
            
            <Link to='/services'><button className="mt-8 rounded-full custom-btn btn-1">Get Started</button></Link>
          </div>

          <div className='w-full m-auto'>
            {/* <Link to='/'><img src={logo} alt="" className=''/></Link> */}
          </div>
          
        </div>
        <Carousel />    
      </div>  

      {/* Section 2 */}
      <div className='text-[#000] my-24'>
        <p className="w-4/12 mx-auto mb-24 text-xl text-center">We bring dedicated design teams to entrepreneurs seeking talents to grow their brands.</p>
        
        <div className="flex justify-around w-9/12 mx-auto">          
          {cardDetails.map((c)=>
            <SuccessCard 
              key={c.id} 
              url={<c.url className='mx-auto' />} 
              title={c.title} 
              count={c.count} 
            />
          )}
        </div>
      </div>

      {/* Section 3 */}
      <div className='text-center'>
        <h2 className='text-4xl uppercase'>We bring dedicated</h2>

        <div className="my-14 parallax"></div>

        <p className='w-8/12 mx-auto text-lg text-center'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam deserunt maxime, voluptatibus dignissimos minima laudantium blanditiis? Fugit, deleniti. Iusto in, odio non neque error fugit dolore! Quam eligendi exercitationem impedit?</p>
      </div>
    </div>
  )
}

export default LandingPage