import { Button } from '@mui/material';
import CalenderElement from 'components/CalenderElement';
import PackageTabs from 'components/PackageTabs';
import SwiperElemet from 'components/SwiperElemet';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import {packages} from 'docs/packages';

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';

import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

import logo from 'img/logo.png';

import { AiOutlineClose, AiOutlineFacebook, AiOutlineInstagram, AiOutlinePhone, AiOutlineStar } from 'react-icons/ai';
import { BsBriefcase } from 'react-icons/bs';
import { FiPackage } from 'react-icons/fi';
import { GoLocation } from 'react-icons/go';
import { BiCategory, BiWorld } from 'react-icons/bi';
import { RouteName } from 'constant/routeName';
import { events } from 'docs/events';
import BookRequest from 'types/BookRequest';
import BookNowDropdown from 'components/BookNowDropdown';

function ProviderDetails() {
  let { providerId } = useParams();

  const user=true;

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
    mobile : '0719246621',
    fb : 'www.facebook.com',
    insta : 'www.instagram.com',
    web : 'www.google.com',
  };

  // more Info
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  //book Now
  const navigate = useNavigate(); 
  const [openbook, setOpenbook] = useState(false);

  const handleClickOpenBook = () => {
    if(user){
      setOpenbook(true);
    }
    else{
      navigate(RouteName.Login);
    }
  };

  const handleCloseBook = () => {
    setOpenbook(false);
    console.log(values);
  };

  // choose event
  const [eventId, setEventId] = useState<any | 0>(0);
  const [packageId, setPackageId] = useState<number | 0>(0);
  const [userId, setUserId] = useState<number | 0>(0);
  const [paymentId, setPaymentId] = useState<number | 0>(0);
  const [timestamp, setTimestamp] = useState<string | null>(null);
  
  const [values, setValues] = useState<BookRequest>({
    eventId: 0,
    packageId : 0,
    userId : 0,
    paymentId : 0,
    timestamp : ''
  })

  useEffect(() => {
    setValues({
      eventId: eventId,
      packageId : packageId,
      userId : userId,
      paymentId : paymentId,
      timestamp : timestamp ? timestamp : ''
    });
}, [eventId, packageId, userId, paymentId])

const onChange = (e: any) => {
  setValues((preState) => ({
      ...preState,
      [e.target.name]: e.target.value
  }))
}

  // const handleChangeEvent = (event: SelectChangeEvent) => {
  //   console.log(values);
  // };


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
                      <a href={provider.insta} target="_blank" className='provider-detail-dialog-box-icon'><AiOutlineInstagram/></a>
                      <a href={provider.fb} target="_blank" className='provider-detail-dialog-box-icon'><AiOutlineFacebook/></a>
                      <a href={provider.web} target="_blank" className='provider-detail-dialog-box-icon'><BiWorld/></a>
                    </div>
                </DialogContentText>
              </DialogContent>
            </Dialog>
          </div>
        </div> 
      </div>

      <div className='flex justify-around w-full'>
        <div className='w-8/12 px-16 mt-16'>
          <PackageTabs packages={packages}/>
        </div>

        <div className='flex items-center justify-start w-4/12 px-16 mt-16'>
          <Button variant="outlined" onClick={handleClickOpenBook}>
            Book Now
          </Button>

          <Dialog open={openbook} onClose={handleCloseBook}>
            <DialogActions>
              <h1 onClick={handleCloseBook}><AiOutlineClose className='p-1 text-2xl text-red-700 hover:bg-red-300'/></h1>
            </DialogActions>

            <DialogTitle>Make your day with {provider.providerName}</DialogTitle>
            <DialogContent>
              {/* <DialogContentText>
                To subscribe to this website, please enter your email address here. We
                will send updates occasionally.
              </DialogContentText> */}
              {/* <TextField autoFocus margin="dense" id="name" label="Email Address" type="email" fullWidth variant="standard"/> */}
              <div className='w-[11/12]'>
                {/* <FormControl variant="standard" fullWidth sx={{ m: 1, minWidth: 120 }}>
                  <InputLabel id="demo-simple-select-standard-label">Event</InputLabel>
                  <Select
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    value={eventId}
                    onChange={(e) => setEventId(e.target.value)}
                    label="Event"
                  >
                    <MenuItem value="" disabled>
                      <em>None</em>
                    </MenuItem>

                    {events.map((e:any,i:number)=>(
                      <MenuItem value={e.id.toString()} key={i+1}>{e.name}</MenuItem>
                    ))}

                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl> */}

                <BookNowDropdown array={events} func={setEventId} val={values.eventId}/>
              </div>
            </DialogContent>
            <DialogActions>
              {/* <Button onClick={handleCloseBook}>Cancel</Button> */}
              <Button onClick={handleCloseBook} variant="contained" color="success">Book Now</Button>
            </DialogActions>
          </Dialog>
        </div>
      </div>
      
      
    </div>
  );
}

export default ProviderDetails