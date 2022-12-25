import { useParams } from 'react-router-dom';

function ProviderDetails() {
  let { providerId } = useParams();
  
  return (
    <div className='pt-24'>
      <h1 className='text-blue-800'>{providerId} vsgg</h1>
    </div>
  )
}

export default ProviderDetails