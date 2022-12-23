import React from 'react'

function SuccessCard({url,title,count}:any) {
  return (
    <div className="shadow-xl card mx-2 w-3/12 bg-base-100 text-center image-full hover:scale-[1.02]">
        <figure><img src={url} alt="Shoes" /></figure>
        <div className="card-body">
            <h2 className="text-center">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            {/* <div className="justify-end card-actions">
            <button className="btn btn-primary">Buy Now</button>
            </div> */}
        </div>
    </div>
  )
}

export default SuccessCard