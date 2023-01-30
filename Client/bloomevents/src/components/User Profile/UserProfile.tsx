import { useEffect, useState } from "react";
import image from "img/man.jpg";
import { TextField } from "@mui/material";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

import { districts } from "docs/districts";
import NewUser from "types/NewUser";
import { LoggedUser } from "docs/User";
import SignupDropDown from "components/Drop Downs/SignupDropdown";
import { Role } from "Enums/Role";

function UserProfile() {
  const [showPw, setShowPw] = useState<boolean>(false);
  const showPassword = () => {
    if (showPw) {
      setShowPw(false);
    } else {
      setShowPw(true);
    }
  };

  const [firstName, setfirstName] = useState<string | "">(
    LoggedUser.first_name
  );
  const [lastName, setlastName] = useState<string | "">(LoggedUser.last_name);
  const [district, setDistrict] = useState<string | "">("");
  const [mobile, setmobile] = useState<string | "">("0719246621");
  const [email, setemail] = useState<string | "">(LoggedUser.email);
  const [password, setpassword] = useState<string | "">("");

  const [values, setValues] = useState<NewUser>({
    firstName: LoggedUser.first_name,
    lastName: LoggedUser.last_name,
    district: "",
    mobile: "0719246621",
    role: Role.USER,
    email: LoggedUser.email,
    password: LoggedUser.password,
  });

  useEffect(() => {
    setValues({
      firstName: firstName,
      lastName: lastName,
      district: district,
      mobile: mobile,
      role: Role.USER,
      email: email,
      password: password,
    });
    // console.log(values);
  }, [firstName, lastName, district, mobile, email, password]);

  useEffect(() => {
    console.log("District from signup page - " + district);
  }, [district]);

  const handleClck = (e: any) => {
    e.preventDefault();

    console.log(values);
  };

  return (
    <div className="flex w-11/12 pt-24 mb-20">
      <div className="w-6/12 mx-auto mt-7">
        <div className="w-full text-center">
          {/* <img
            src={image}
            alt=""
            className="flex mx-auto rounded-full p-1 border-[0.5px] border-[#fec850] w-[450px] h-[450px] hover:opacity-40 hover:bg-[#0000009f] hover:duration-300"
          />

          <span className="absolute top-[45%] left-[45%] text-[40px] ">
             <RiImageAddLine /> 
          </span> */}
          <input type="file" className="upadate-propic" />
        </div>
      </div>

      <div className="w-6/12 pt-10">
        <div className="mt-10 sm:mt-0">
          <form action="#" method="POST">
            <div className="overflow-hidden drop-shadow-2xl sm:rounded-md">
              <div className="px-4 py-5 bg-white sm:p-6">
                <h1 className="mb-3 text-3xl text-left">
                  Update <span className="text-[#ffa537]">Profile</span>
                </h1>

                {/* first name and last name */}
                <div className="form-input-main-div">
                  <div className="form-input-sub-div">
                    <TextField
                      id="outlined"
                      label="First Name"
                      className="form-textfield-double"
                      onChange={(e) => {
                        setfirstName(e.target.value);
                      }}
                      value={firstName}
                      variant="outlined"
                      color="warning"
                    />
                  </div>

                  <div className="form-input-sub-div">
                    <TextField
                      id="outlined"
                      label="Last Name"
                      className="form-textfield-double"
                      onChange={(e) => {
                        setlastName(e.target.value);
                      }}
                      value={lastName}
                      variant="outlined"
                      color="warning"
                    />
                  </div>
                </div>

                {/* district and mobile */}
                <div className="form-input-main-div">
                  <div className="form-input-sub-div">
                    <SignupDropDown
                      array={districts}
                      title="District"
                      func={setDistrict}
                      val={values.district}
                    />
                  </div>

                  <div className="form-input-sub-div">
                    <TextField
                      id="outlined"
                      label="Mobile"
                      className="form-textfield-double"
                      onChange={(e) => {
                        setmobile(e.target.value);
                      }}
                      value={mobile}
                      variant="outlined"
                      color="warning"
                    />
                  </div>
                </div>

                {/* email */}
                <div className="col-span-6 my-3 buttonIn sm:col-span-4">
                  <TextField
                    id="outlined"
                    label="Email address"
                    className="w-full"
                    onChange={(e) => {
                      setemail(e.target.value);
                    }}
                    value={email}
                    disabled
                    variant="outlined"
                    color="warning"
                  />
                </div>

                {/* password */}
                <div className="flex w-full col-span-6 mt-5 buttonIn sm:col-span-4">
                  <TextField
                    id="outlined"
                    type={showPw ? "text" : "password"}
                    label="Password"
                    className="w-full rounded-[5px] outline-none p-0 "
                    onChange={(e) => {
                      setpassword(e.target.value);
                    }}
                    variant="outlined"
                    color="warning"
                  />
                  <h1 id="clear" className="showPw" onClick={showPassword}>
                    {showPw ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                  </h1>
                </div>
              </div>

              <div className="px-4 py-3 text-right bg-gray-50 sm:px-6">
                <button
                  type="submit"
                  className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-[#ffa537] border border-transparent rounded-md shadow-sm hover:bg-[#d48019] focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  onClick={handleClck}>
                  Save Changes
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
