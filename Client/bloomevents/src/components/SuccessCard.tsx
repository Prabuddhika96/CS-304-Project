
function SuccessCard({url,title,count}:any) {
  return (
    <div className="mx-2 text-[#FF4C0A] text-center hover:scale-[1.02] hover:duration-200">
      <h1 className='success-card-image'>{url}</h1> 
      <h1 className='text-[#fff] mt-8 mb-5 text-2xl'>{title}</h1>      
      <h1 className='text-[#fff] mb-8 text-4xl'>{count}</h1>      
    </div>
  )
}

export default SuccessCard