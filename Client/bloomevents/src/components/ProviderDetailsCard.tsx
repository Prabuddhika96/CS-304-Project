import { DialogContentText } from '@mui/material'
import React from 'react'
import { AiOutlineStar, AiOutlinePhone, AiOutlineInstagram, AiOutlineFacebook } from 'react-icons/ai'
import { BiCategory, BiWorld } from 'react-icons/bi'
import { BsBriefcase } from 'react-icons/bs'
import { FiPackage } from 'react-icons/fi'
import { GoLocation } from 'react-icons/go'

function ProviderDetailsCard({providerDetails}:any) {
  return (
    <DialogContentText id="alert-dialog-description">
        <div className='text-xl'>
            <h3 className='pro-dialog-h3'><BsBriefcase className='service-card-icon !text-[#c26d06]'/><span className='pro-dialog-span'>Provider Name : </span> {providerDetails.providerName}</h3>
            <h3 className='pro-dialog-h3'><GoLocation className='service-card-icon !text-[#c26d06]'/><span className='pro-dialog-span'>District : </span> {providerDetails.district}</h3>
            <h3 className='pro-dialog-h3'><BiCategory className='service-card-icon !text-[#c26d06]'/><span className='pro-dialog-span'>Category : </span> {providerDetails.category}</h3>
            <h3 className='pro-dialog-h3'><FiPackage className='service-card-icon !text-[#c26d06]'/><span className='pro-dialog-span'>No of Packages : </span> {providerDetails.packageCount}</h3>
            <h3 className='pro-dialog-h3'><AiOutlineStar className='service-card-icon !text-[#c26d06]'/><span className='pro-dialog-span'>Ratings : </span> {providerDetails.ratings}</h3>
            <h3 className='pro-dialog-h3'><AiOutlinePhone className='service-card-icon !text-[#c26d06]'/><span className='pro-dialog-span'>Mobile : </span> {providerDetails.mobile}</h3>
        </div>

        <div className='flex justify-around w-6/12 mx-auto my-3 text-lg'>
            <a href={providerDetails.insta} target="_blank" className='provider-detail-dialog-box-icon'><AiOutlineInstagram/></a>
            <a href={providerDetails.fb} target="_blank" className='provider-detail-dialog-box-icon'><AiOutlineFacebook/></a>
            <a href={providerDetails.web} target="_blank" className='provider-detail-dialog-box-icon'><BiWorld/></a>
        </div>
    </DialogContentText>
  )
}

export default ProviderDetailsCard