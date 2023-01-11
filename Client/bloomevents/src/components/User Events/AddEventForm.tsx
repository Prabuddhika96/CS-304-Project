import { useEffect, useState } from 'react';
import image from 'img/logo.png';
import { TextField } from '@mui/material';

import Event from 'types/Event';
import dayjs, { Dayjs } from 'dayjs';
import DatePicker from './DatePicker';

import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import SuccessSnakBar from 'components/Snak Bars/SuccessSnakBar';

function AddEventForm() {
  
    const [eventname, seteventname] = useState<string | ''>('');
    const [date, setdate] = useState<Dayjs>(dayjs('2014-08-18T21:11:54'));

    // choose event
    const [successAddEvent,setSuccessAddEvent]=useState<boolean>(false);
    const [emptyField,setEmptyFeild]=useState<boolean>(false);

    const [values, setValues] = useState<Event>({
        event_id : 0,
        event_date : dayjs('2014-08-18T21:11:54'),
        event_name : '',
        user_id : 0,
    })
  
    useEffect(() => {
        setValues({
            event_id : 0,
            event_date : date,
            event_name : eventname,
            user_id : 0,
        });
        //console.log(values);
    }, [eventname, date])

    const [msg,setmsg]=useState<string>();

    const handleClck=(e:any)=>{
        e.preventDefault();
        console.log(values);
        console.log(dayjs(Date.now()));

        if(values.event_name===''){
          setEmptyFeild(true);
          setSuccessAddEvent(false);
          setmsg('Name is required !');
        }
        else if(values.event_date.isBefore(Date.now())){
          setEmptyFeild(true);
          setSuccessAddEvent(false);
          setmsg('Event date is not valid !');
        }
        else{
            setEmptyFeild(false);
            setSuccessAddEvent(true);
        }  
    }
  
  
  
    return (
      <div className='items-center w-full pt-24 mb-20 '>
        <div className='items-center w-6/12 mx-auto my-3'>
          <img src={image} alt="" className='w-full'/>
        </div>
  
        <div className='w-full '>
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
                      <DatePicker func={setdate} val={values.event_date} />
                    </div>
                  </div>
  
                </div>
  
                <div className="px-4 py-3 text-right bg-gray-50 sm:px-6">
                  <button
                    type="submit"
                    className="login-form-btn"
                    onClick={handleClck}
                  >
                    <span className='mr-2 text-white'><AddCircleOutlineIcon/></span> Add Event
                  </button>
                </div>
                
              </div>
            </form>
          </div>
        </div>

        <div className='absolute bottom-0 left-0'>
            {successAddEvent && <SuccessSnakBar func={setSuccessAddEvent} type="success" val={successAddEvent} msg={"Successfully Added !"}/> }
            {emptyField && <SuccessSnakBar func={setEmptyFeild} type="error" val={emptyField} msg={msg}/> }
        </div>
      </div>
    )
  }

export default AddEventForm