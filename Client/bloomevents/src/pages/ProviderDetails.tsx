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
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import React from 'react';

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

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
            <div className='mb-5'>
              <h1 className='text-4xl text-[#c26d06]'>{provider.providerName}</h1>
              <h1 className='text-lg'>{provider.category}</h1>
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
            <Button variant="outlined" onClick={handleClickOpen}>
              Slide in alert dialog
            </Button>

            <Dialog
              open={open}
              TransitionComponent={Transition}
              keepMounted
              onClose={handleClose}
              aria-describedby="alert-dialog-slide-description"
            >
              <DialogTitle>{"Use Google's location service?"}</DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-slide-description">
                  Let Google help apps determine location. This means sending anonymous
                  location data to Google, even when no apps are running.
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose}>Disagree</Button>
                <Button onClick={handleClose}>Agree</Button>
              </DialogActions>
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