import { useEffect, useState } from 'react';
import image from 'img/logo.png';
import { Link } from 'react-router-dom';
import { TextField } from '@mui/material';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';

import { districts } from 'docs/districts';
import NewUser from 'types/NewUser';
import SignupDropDown from 'components/Drop Downs/SignupDropdown';
import { RouteName } from 'constant/routeName';

import * as React from 'react';
import dayjs, { Dayjs } from 'dayjs';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';

function AddEventForm() {
    const [showPw, setShowPw]=useState<boolean>(false);
    const showPassword=()=>{
      if(showPw){
        setShowPw(false);
      }
      else{
        setShowPw(true);
      }
    }
  
    const [eventname, seteventname] = useState<any | ''>('');
    const [date, setdate] = useState<any | ''>('');
  
    const [values, setValues] = useState<Event>({
        eventname : eventname,
        date: date
    })
  
    useEffect(() => {
      setValues({
        eventname: eventname,
        date : date ,
      });
      // console.log(values);
    }, [eventname, date])
  
    const handleClck=(e:any)=>{
      e.preventDefault();
  
      console.log(values);
    }
  
  
  
  
    return (
      <div className='flex items-center w-11/12 pt-24 mb-20'>
        <div className='w-6/12'>
          <img src={image} alt="" className='w-full'/>
        </div>
  
        <div className='w-6/12 '>
          <div className="mt-10 sm:mt-0">
            
            <form action="#" method="POST">
                
              <div className="overflow-hidden drop-shadow-2xl sm:rounded-md">
                <div className="px-4 py-5 bg-white sm:p-6">
  
                  <h1 className='mb-3 text-3xl text-left'>Add <span className='text-[#ffa537]'>Event</span></h1>
  
                  {/* first name and last name */}
                  <div className='justify-between w-full '>
                    <div className="w-full col-span-5 my-3 buttonIn sm:col-span-4">
                      <TextField id="outlined" label="Event Name" className='form-textfield-double' onChange={(e)=>{seteventname(e.target.value)}} variant="outlined" />
                    </div>
                    
                    <div className="w-full col-span-5 my-3 buttonIn sm:col-span-4">
                      <TextField id="outlined" label="Date" type={'date'} className='form-textfield-double' onChange={(e)=>{setdate(e.target.value)}} variant="outlined" />
                    </div>
                  </div>
  
                </div>
  
                <div className="px-4 py-3 text-right bg-gray-50 sm:px-6">
                  <button
                    type="submit"
                    className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-[#ffa537] border border-transparent rounded-md shadow-sm hover:bg-[#d48019] focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    onClick={handleClck}
                  >
                    Login
                  </button>
                </div>
                
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }

export default AddEventForm