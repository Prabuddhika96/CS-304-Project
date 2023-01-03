import CalenderElement from 'components/CalenderElement';
import SwiperElemet from 'components/SwiperElemet';
import { useParams } from 'react-router-dom';

function ProviderDetails() {
  let { providerId } = useParams();

  const des='Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore perferendis corrupti sapiente maiores. Amet reprehenderit natus deserunt labore iste laborum, quam numquam possimus, obcaecati voluptatibus ut dolore tempore est ducimus.';

  const provider ={
    provider_id : {providerId},
    providerName : `Provider Name ${providerId}`, 
    district : 'District',
    category : 'Category', 
    packageCount : '3', 
    description : {des},
    ratings : '2.5'
  };
  
  return (
    <div className='flex justify-around w-full pt-28'>
      <div className='w-8/12 px-16'>
        <div>
          <div className='mb-5'>
            <h1 className='text-4xl text-[#c26d06]'>{provider.providerName}</h1>
            <h1 className='text-lg'>{provider.category}</h1>
          </div>

          <SwiperElemet/>
        </div>
      </div>

      <div className='w-4/12 px-8 mt-28'>
        <CalenderElement/>
      </div>


    </div>
  );
}

export default ProviderDetails