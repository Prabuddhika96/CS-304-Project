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
  }
  
  return (
    <div className=''>
      {/* <h1 className='text-blue-800'>{provider.providerName}</h1> */}

     
    </div>
  )
}

export default ProviderDetails