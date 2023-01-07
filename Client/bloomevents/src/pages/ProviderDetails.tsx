import { Button } from '@mui/material';
import CalenderElement from 'components/CalenderElement';
import PackageTabs from 'components/PackageTabs';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import {packages} from 'docs/packages';
import {reviews} from 'docs/reviews';

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

import logo from 'img/logo.png';

import { AiOutlineClose } from 'react-icons/ai';
import { RouteName } from 'constant/routeName';
import { events } from 'docs/events';
import BookRequest from 'types/BookRequest';
import BookNowDropdown from 'components/BookNowDropdown';
import ProviderDetailsCard from 'components/ProviderDetailsCard';
import SuccessSnakBar from 'components/SuccessSnakBar';
import Reviews from 'components/Reviews';
import Carousel from 'components/Carousel';

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
  };

  
  // choose event
  const [successAddEvent,setSuccessAddEvent]=useState<boolean>(false);
  const [emptyField,setEmptyFeild]=useState<boolean>(false);

  const [eventId, setEventId] = useState<any | 0>(0);
  const [packageId, setPackageId] = useState<any | 0>(0);
  const [userId, setUserId] = useState<any | 0>(0);
  const [timestamp, setTimestamp] = useState<any | null>(null);
  
  const [values, setValues] = useState<BookRequest>({
    eventId: 0,
    packageId : 0,
    userId : userId,
    timestamp : ''
  })

  useEffect(() => {
    setValues({
      eventId: eventId,
      packageId : packageId,
      userId : userId,
      timestamp : timestamp ? timestamp : ''
    });
    setSuccessAddEvent(successAddEvent);
  }, [eventId, packageId, userId, successAddEvent])

  const handleAddToEvent = (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    if(values.eventId===0 || values.packageId===0){
      setEmptyFeild(true);
    }
    else{
      setOpenbook(false);  
      setSuccessAddEvent(true);
    }    
  };



  
  return (
    <div>
      <div className='flex justify-around w-full pt-24'>
        <div className='w-8/12 px-16'>
            <div className='flex mb-5'>
              <div className=''>
                <img src={logo} alt="" className='w-28'/>
              </div>
              <div>
                <h1 className='text-4xl text-[#c26d06]'>{provider.providerName}</h1>
                <h1 className='text-lg'>{provider.category}</h1>
              </div>
              
            </div>

            {/* <SwiperElemet width={"850px"} height={"500px"} thumbnails={true} time={4000} b_radius={"10px"}/> */}
            <Carousel/>
        </div>

        <div className='w-4/12 px-8 mt-[80px]'>
          <h1 className='text-lg text-[#000] uppercase'>Avalble Slots</h1>
          <div className='bottom-0 mt-5'>
            <CalenderElement/>
          </div>

          <div>
            <div className='flex justify-around w-10/12 mt-5'>
              <Button variant="contained" color="success" className='!bg-[#bd6800] hover:!bg-[#965200]' onClick={handleClickOpen}>More Infomation</Button>
              <Button variant="contained" color="secondary" className='!bg-[#bd6800] hover:!bg-[#965200]' onClick={handleClickOpenBook}>Add to Event</Button>
            </div>

            {/* // more information */}
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
                <ProviderDetailsCard providerDetails={provider}/>
              </DialogContent>
            </Dialog>

            {/* //add to Event */}
            <div className='flex items-center justify-start w-4/12 px-16 mt-16'>
              <Dialog open={openbook} onClose={handleCloseBook}>
                <DialogActions>
                  <h1 onClick={handleCloseBook}><AiOutlineClose className='p-1 text-2xl text-red-700 hover:bg-red-300'/></h1>
                </DialogActions>

                <DialogTitle>Make your day with {provider.providerName}</DialogTitle>
                
                <DialogContent>
                  <div className='w-[11/12]'>           
                    <BookNowDropdown array={events} title="Event" func={setEventId} val={values.eventId}/>
                    <BookNowDropdown array={packages} title="Package" func={setPackageId} val={values.packageId}/>
                  </div>
                </DialogContent>

                <DialogActions>
                  <Button onClick={handleAddToEvent} variant="contained" className='!bg-[#bd6800] hover:!bg-[#965200]' >Add to Event</Button>
                </DialogActions>
                
              </Dialog>
            </div>

          </div>
        </div> 
      </div>

      {/* package Details */}
      <div className='flex justify-center w-full mt-5 '>
        <div className='w-8/12 px-8'>
          <PackageTabs packages={packages}/>
        </div>

        <div className='w-4/12 px-8'>
          <Reviews reviews={reviews}/>
        </div>
      </div>

      
      
      <div className='absolute bottom-0 left-0'>
        {successAddEvent && <SuccessSnakBar func={setSuccessAddEvent} type="success" val={successAddEvent} msg={"Successfully Added !"}/> }
        {emptyField && <SuccessSnakBar func={setEmptyFeild} type="error" val={emptyField} msg={"You can not have empty fields !"}/> }
      </div>

      
      
    </div>
  );
}

export default ProviderDetails