import { useEffect, useState } from "react";
import image from "img/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { TextField } from "@mui/material";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

import { districts } from "docs/districts";
import NewUser from "types/NewUser";
import SignupDropDown from "components/Drop Downs/SignupDropdown";
import { RouteName } from "constant/routeName";
import { Role } from "Enums/Role";
import axios from "axios";
import { useForm } from "react-hook-form";
import AuthService from "Services/Authencation/AuthService";
import { RequestStatus } from "constant/RequestStatus";
import { toast } from "react-toastify";

function Signup() {
  //navigate
  const navigate = useNavigate();

  //if already has logged user
  const logged = localStorage.getItem("loggedUser");
  useEffect(() => {
    if (logged) {
      navigate(RouteName.Services);
    }
  }, []);

  // show password
  const [showPw, setShowPw] = useState<boolean>(false);
  const showPassword = () => {
    if (showPw) {
      setShowPw(false);
    } else {
      setShowPw(true);
    }
  };

  const [district, setDistrict] = useState<string | "">("");

  //handle form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data: any) => {
    console.log(data);

    setTimeout(async () => {
      const result = await AuthService.Register(data);
      console.log(result);
      if (result.data.status == 1) {
        //redirect to login page
        localStorage.setItem(
          "loggedUser",
          JSON.stringify({
            userId: result.data.data.user.userId,
            firstName: result.data.data.user.firstName,
            lastName: result.data.data.user.lastName,
            mobile: result.data.data.user.mobile,
            district: result.data.data.user.district,
            lastLogin: result.data.data.user.lastLogin,
            role: result.data.data.user.role,
          })
        );
        navigate(RouteName.Services);
        toast.success("Registration Successfull");
        return;
      } else {
        toast.error("Registration Failed");
      }
    }, 1000);
  };

  return (
    <div className="flex items-center w-11/12 pt-24 mb-20">
      <div className="w-6/12">
        <img src={image} alt="" className="w-full" />
      </div>

      <div className="w-6/12 ">
        <div className="mt-10 sm:mt-0">
          <form action="#" method="POST" onSubmit={handleSubmit(onSubmit)}>
            <div className="overflow-hidden drop-shadow-2xl sm:rounded-md">
              <div className="px-4 py-5 bg-white sm:p-6">
                <h1 className="mb-3 text-3xl text-left">
                  Create <span className="text-[#ffa537]">Account</span>
                </h1>

                {/* first name and last name */}
                <div className="form-input-main-div">
                  <div className="form-input-sub-div">
                    <TextField
                      id="outlined"
                      label="First Name"
                      className="form-textfield-double"
                      {...register("firstName", {
                        required: true,
                      })}
                      variant="outlined"
                    />
                    {errors.firstName && (
                      <p className="text-xs text-red-600">
                        Last name is required
                      </p>
                    )}
                  </div>

                  <div className="form-input-sub-div">
                    <TextField
                      id="outlined"
                      label="Last Name"
                      className="form-textfield-double"
                      {...register("lastName", {
                        required: true,
                      })}
                      variant="outlined"
                    />
                    {errors.lastName && (
                      <p className="text-xs text-red-600">
                        Last name is required
                      </p>
                    )}
                  </div>
                </div>

                {/* district and mobile */}
                <div className="form-input-main-div">
                  <div className="form-input-sub-div">
                    <SignupDropDown
                      array={districts}
                      title="District"
                      func={setDistrict}
                      func1={register}
                    />
                    {errors.district && (
                      <p className="text-xs text-red-600">
                        District is required
                      </p>
                    )}
                  </div>

                  <div className="form-input-sub-div">
                    <TextField
                      id="outlined"
                      label="Mobile"
                      className="form-textfield-double"
                      {...register("mobile", {
                        required: true,
                        maxLength: 10,
                        minLength: 10,
                        pattern: /^[0-9]+$/,
                      })}
                      variant="outlined"
                    />
                    {errors.mobile && (
                      <p className="text-xs text-red-600">
                        Mobile Number is required
                      </p>
                    )}
                  </div>
                </div>

                {/* email */}
                <div className="col-span-6 my-3 buttonIn sm:col-span-4">
                  <TextField
                    id="outlined"
                    label="Email address"
                    className="w-full"
                    {...register("email", {
                      required: true,
                      pattern:
                        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                    })}
                    variant="outlined"
                  />
                  {errors.email && (
                    <p className="text-xs text-red-600">
                      Please check the Email
                    </p>
                  )}
                </div>

                {/* password */}
                <div className="flex w-full col-span-6 mt-5 buttonIn sm:col-span-4">
                  <div className="w-full">
                    <TextField
                      id="outlined"
                      type={showPw ? "text" : "password"}
                      label="Password"
                      className="w-full rounded-[5px] outline-none p-0 "
                      {...register("password", {
                        required: true,
                        minLength: 8,
                        pattern:
                          /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
                      })}
                      variant="outlined"
                    />
                    {errors.password && (
                      <p className="text-xs text-red-600">
                        Password must contain atleast 8 characters and one
                        uppercase and lowercase letter, one number and one
                        symbol{" "}
                      </p>
                    )}
                  </div>
                  <h1 id="clear" className="showPw" onClick={showPassword}>
                    {showPw ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                  </h1>
                </div>
              </div>

              <div className="px-4 py-3 text-right bg-gray-50 sm:px-6">
                <p className="text-left">
                  Already Have An Account?{" "}
                  <Link to={RouteName.Login} className="text-[#e17c01]">
                    Log In
                  </Link>
                </p>
                <button
                  type="submit"
                  className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-[#ffa537] border border-transparent rounded-md shadow-sm hover:bg-[#d48019] focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                  Register
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
