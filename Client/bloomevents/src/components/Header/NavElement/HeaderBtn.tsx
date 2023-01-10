import React from 'react'

function HeaderBtn({name}:any) {
  return (
    <li className='inline py-1 px-5 font-medium rounded-full text-[#ffc277] border-2 border-[#ffc277] border-solid text-base hover:bg-[#ffc277] hover:text-black hover:duration-200 mx-2'>{name}</li>
  )
}

export default HeaderBtn