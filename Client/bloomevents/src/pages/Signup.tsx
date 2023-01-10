import { useEffect, useState } from 'react';
import image from 'img/logo.png';
import { Link } from 'react-router-dom';
import { TextField } from '@mui/material';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';

import { districts } from 'docs/districts';
import NewUser from 'types/NewUser';
import SignupDropDown from 'components/Drop Downs/SignupDropdown';

function Signup() {
  const [showPw, setShowPw]=useState<boolean>(false);
  const showPassword=()=>{
    if(showPw){
      setShowPw(false);
    }
    else{
      setShowPw(true);
    }
  }

  const [firstName, setfirstName] = useState<string | ''>('');
  const [lastName, setlastName] = useState<string | ''>('');
  const [district, setDistrict] = useState<string | ''>('');
  const [mobile, setmobile] = useState<string | ''>('');
  const [email, setemail] = useState<string | ''>('');
  const [password, setpassword] = useState<string | ''>('');

  const [values, setValues] = useState<NewUser>({
    firstName: '',
    lastName : '',
    district : '',
    mobile : '',
    email : '',
    password : '',
  })

  useEffect(() => {
    setValues({
      firstName: firstName,
      lastName : lastName ,
      district : district ,
      mobile : mobile ,
      email : email ,
      password : password ,
    });
    // console.log(values);
  }, [firstName, lastName, district, mobile,email,password])

  useEffect(()=>{
    console.log("District from signup page - "+district);
  },[district])


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

                <h1 className='mb-3 text-3xl text-left'>Create <span className='text-[#ffa537]'>Account</span></h1>

                {/* first name and last name */}
                <div className='form-input-main-div'>
                  <div className="form-input-sub-div">
                    <TextField id="outlined" label="First Name" className='form-textfield-double' onChange={(e)=>{setfirstName(e.target.value)}} variant="outlined" />
                  </div>
                  
                  <div className="form-input-sub-div">
                    <TextField id="outlined" label="Last Name" className='form-textfield-double' onChange={(e)=>{setlastName(e.target.value)}} variant="outlined" />
                  </div>
                </div>

                {/* district and mobile */}
                <div className='form-input-main-div'>
                  <div className="form-input-sub-div">
                    <SignupDropDown array={districts} title="District" func={setDistrict} val={values.district}/>
                  </div>
                  
                  <div className="form-input-sub-div">
                    <TextField id="outlined" label="Mobile" className='form-textfield-double' onChange={(e)=>{setmobile(e.target.value)}} variant="outlined" />
                  </div>
                </div>
                
                {/* email */}
                <div className="col-span-6 my-3 buttonIn sm:col-span-4">
                  <TextField id="outlined" label="Email address" className='w-full' onChange={(e)=>{setemail(e.target.value)}} variant="outlined" />
                </div>

                {/* password */}
                <div className="flex w-full col-span-6 mt-5 buttonIn sm:col-span-4">
                  <TextField id="outlined" type={showPw ? "text" : "password"} label="Password" className='w-full rounded-[5px] outline-none p-0 ' onChange={(e)=>{setpassword(e.target.value)}} variant="outlined" />
                  <h1 id="clear" className='showPw' onClick={showPassword}>
                    {showPw ? <AiOutlineEyeInvisible/> : <AiOutlineEye/>}
                  </h1>
                </div>
              </div>

              

              <div className="px-4 py-3 text-right bg-gray-50 sm:px-6">
              <p className='text-left'>Already Have An Account? <Link to='/login' className='text-[#e17c01]'>Log In</Link></p>
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

export default Signup