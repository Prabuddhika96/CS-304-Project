import { Button } from '@mui/material';
import CalenderElement from 'components/CalenderElement';
import PackageTabs from 'components/PackageTabs';
import SwiperElemet from 'components/SwiperElemet';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import logo from 'img/logo.png';

import { AiOutlineClose, AiOutlineFacebook, AiOutlineInstagram, AiOutlinePhone, AiOutlineStar } from 'react-icons/ai';
import { BsBriefcase } from 'react-icons/bs';
import { FiPackage } from 'react-icons/fi';
import { GoLocation } from 'react-icons/go';
import { BiCategory } from 'react-icons/bi';

function ProviderDetails() {
  let { providerId } = useParams();

  const des='Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore perferendis corrupti sapiente maiores. Amet reprehenderit natus deserunt labore iste laborum, quam numquam possimus, obcaecati voluptatibus ut dolore tempore est ducimus.';

  const provider ={
    url : {logo},
    provider_id : {providerId},
    providerName : `Provider Name ${providerId}`, 
    district : 'District',
    category : 'Category', 
    packageCount : '3', 
    description : {des},
    ratings : '2.5',
    mobile : '0719246621'
  };

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  return (
    <div>
      <div className='flex justify-around w-full min-h-[450px] pt-28'>
        <div className='w-8/12 px-16'>
          <div>
            <div className='flex mb-5'>
              <div className=''>
                <img src={logo} alt="" className='w-28'/>
              </div>
              <div>
                <h1 className='text-4xl text-[#c26d06]'>{provider.providerName}</h1>
                <h1 className='text-lg'>{provider.category}</h1>
              </div>
              
            </div>

            <SwiperElemet/>
          </div>
        </div>

        <div className='w-4/12 px-8 mt-[80px]'>
          <h1 className='text-lg'>Avalble Slots</h1>
          <div className='bottom-0'>
            <CalenderElement/>
          </div>

          <div>
            <div className='w-full mt-5'>
              <Button variant="contained" color="success" className='' onClick={handleClickOpen}>
                More Infomation
              </Button>
            </div>

            <Dialog
              open={open}
              onClose={handleClose}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
              <DialogActions>
                <h1 onClick={handleClose}><AiOutlineClose className='p-1 text-2xl text-red-700 hover:bg-red-300'/></h1>
              </DialogActions>
              
              <DialogTitle id="alert-dialog-title">
                <div className="flex items-center">
                  <img src={logo} alt="" className='w-20'/>
                  <h1 className='text-3xl'>{provider.providerName}</h1>
                </div>
              </DialogTitle>

              <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    <div className='text-xl'>
                      <h3 className='pro-dialog-h3'><BsBriefcase className='service-card-icon !text-[#c26d06]'/><span className='pro-dialog-span'>Provider Name : </span> {provider.providerName}</h3>
                      <h3 className='pro-dialog-h3'><GoLocation className='service-card-icon !text-[#c26d06]'/><span className='pro-dialog-span'>District : </span> {provider.district}</h3>
                      <h3 className='pro-dialog-h3'><BiCategory className='service-card-icon !text-[#c26d06]'/><span className='pro-dialog-span'>Category : </span> {provider.category}</h3>
                      <h3 className='pro-dialog-h3'><FiPackage className='service-card-icon !text-[#c26d06]'/><span className='pro-dialog-span'>No of Packages : </span> {provider.packageCount}</h3>
                      <h3 className='pro-dialog-h3'><AiOutlineStar className='service-card-icon !text-[#c26d06]'/><span className='pro-dialog-span'>Ratings : </span> {provider.ratings}</h3>
                      <h3 className='pro-dialog-h3'><AiOutlinePhone className='service-card-icon !text-[#c26d06]'/><span className='pro-dialog-span'>Mobile : </span> {provider.mobile}</h3>
                    </div>

                    <div className='flex justify-around w-6/12 mx-auto my-3 text-lg'>
                      <a href="" className='provider-detail-dialog-box-icon'><AiOutlineInstagram/></a>
                      <a href="" className='provider-detail-dialog-box-icon'><AiOutlineFacebook/></a>
                      <a href="" className='provider-detail-dialog-box-icon'><AiOutlineInstagram/></a>
                    </div>
                </DialogContentText>
              </DialogContent>
            </Dialog>
          </div>
        </div> 
      </div>

      <div className='w-8/12 px-16 mt-16'>
        <PackageTabs url={""}/>
      </div>
      
    </div>
  );
}

export default ProviderDetails