import { useEffect, useState } from 'react';
import image from 'img/logo.png';
import { TextField } from '@mui/material';

import Event from 'types/Event';

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
  
    const [eventname, seteventname] = useState<string | ''>('');
    const [date, setdate] = useState<string | ''>('');

    const [values, setValues] = useState<Event>({
        event_id : 0,
        event_date : '',
        event_name : '',
        user_id : 0,
    })
  
    useEffect(() => {
    setValues({
        event_id : 0,
        event_date : '',
        event_name : '',
        user_id : 0,
    });
    // console.log(values);
    }, [eventname, date])



    const handleClck=(e:any)=>{
    e.preventDefault();

    console.log(values);
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