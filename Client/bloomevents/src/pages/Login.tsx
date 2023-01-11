import React, { useEffect, useState } from "react";
import image from "img/logo.png";
import { Link } from "react-router-dom";
import { TextField } from "@mui/material";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import User from "types/User";
import { RouteName } from "constant/routeName";

function Login() {
  // show password
  const [showPw, setShowPw] = useState<boolean>(false);
  const handleClickShowPw = () => {
    if (showPw) {
      setShowPw(false);
    } else {
      setShowPw(true);
    }
  };

  //login details
  const [userid, seruserid] = useState<number | 0>(0);
  const [email, setemail] = useState<string | "">("");
  const [password, setpassword] = useState<string | "">("");

  const [values, setValues] = useState<User>({
    userId: 0,
    first_name: "Parbuddhika",
    last_name: "Mayurapaksha",
    isAdmin: false,
    email: "",
    password: "",
  });

  useEffect(() => {
    setValues({
      userId: 0,
      first_name: "Parbuddhika",
      last_name: "Mayurapaksha",
      isAdmin: false,
      email: email,
      password: password,
    });
    // console.log(values);
  }, [email, password]);

  const handleClck = (e: any) => {
    e.preventDefault();

    console.log(values);
  };

  return (
    <div className="flex items-center w-11/12 pt-24 mb-20">
      <div className="w-6/12">
        <img src={image} alt="" className="w-full" />
      </div>

      <div className="w-6/12 ">
        <div className="mt-10 sm:mt-0">
          <form action="#" method="POST">
            <div className="overflow-hidden drop-shadow-2xl sm:rounded-md">
              <div className="px-4 py-5 bg-white sm:p-6">
                <h1 className="mb-3 text-3xl text-left">
                  Log <span className="text-[#ffa537]">In</span>
                </h1>

                {/* email */}
                <div className="col-span-6 my-3 buttonIn sm:col-span-4">
                  <TextField
                    id="outlined"
                    label="Email address"
                    className="w-full"
                    onChange={(e) => {
                      setemail(e.target.value);
                    }}
                    variant="outlined"
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
                  />
                  <h1 id="clear" className="showPw" onClick={handleClickShowPw}>
                    {showPw ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                  </h1>
                </div>
              </div>

              <div className="px-4 py-3 text-right bg-gray-50 sm:px-6">
                <p className="text-left">
                  Didn't Have An Account?{" "}
                  <Link to={RouteName.Register} className="text-[#e17c01]">
                    Register Now
                  </Link>
                </p>
                <button
                  type="submit"
                  className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-[#ffa537] border border-transparent rounded-md shadow-sm hover:bg-[#d48019] focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  onClick={handleClck}>
                  Login
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
