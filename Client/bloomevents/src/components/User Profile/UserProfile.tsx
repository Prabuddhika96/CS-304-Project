import { useEffect, useState } from "react";
import { TextField } from "@mui/material";

import { districts } from "docs/districts";
import SignupDropDown from "components/Drop Downs/SignupDropdown";
import { useNavigate } from "react-router-dom";
import { RouteName } from "constant/routeName";
import { useForm } from "react-hook-form";
import LoginDetailsServices from "Services/Login Details/LoginDetailsServices";
import UserServices from "Services/User/UserServices";
import { toast } from "react-toastify";

function UserProfile() {
  const [userEmail, setUserEmail] = useState<any>();

  // check logged user
  const navigate = useNavigate();
  const [user, setuser] = useState<any>();
  useEffect(() => {
    let logged = localStorage.getItem("loggedUser");
    if (logged) {
      setuser(JSON.parse(logged));
      setDistrict(JSON.parse(logged).district);
      if (logged) {
        LoginDetailsServices.getEmailByUserId(JSON.parse(logged).userId).then(
          (res: any) => {
            if (res.data.status == 1) {
              setUserEmail(res.data.data);
              return;
            }
          }
        );
      }
    } else {
      setuser(null);
      navigate(RouteName.Login);
    }
  }, [localStorage.getItem("loggedUser")]);
  // console.log(user);

  // set district
  const [district, setDistrict] = useState<any>();

  //handle form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data: any) => {
    // console.log(data);
    const updatedUser: any = {
      userId: user.userId,
      district: data.district,
      firstName: data.firstName,
      lastName: data.lastName,
      mobile: data.mobile,
    };
    console.log(updatedUser);
    const result = await UserServices.updateUser(updatedUser);
    if (result.data.status == 1) {
      const newUser = await UserServices.getUserByUserId(user.userId);
      if (newUser) {
        localStorage.setItem("loggedUser", JSON.stringify(newUser.data.data));
        toast.success("Profile Updated");
        window.location.reload();
      }
    } else {
      console.log("faild");
    }
  };

  return (
    <div className="flex w-11/12 pt-24 mb-20">
      {user && userEmail && (
        <>
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

          <div className="w-6/12 py-10">
            <div className="mt-10 sm:mt-0">
              <form action="#" method="POST" onSubmit={handleSubmit(onSubmit)}>
                <div className="overflow-hidden drop-shadow-2xl sm:rounded-md">
                  <div className="px-4 py-5 bg-white sm:p-6">
                    <h1 className="mb-3 text-3xl text-left">
                      Update <span className="text-[#ffa537]">Account</span>
                    </h1>

                    {/* first name and last name */}
                    <div className="form-input-main-div">
                      <div className="form-input-sub-div">
                        <TextField
                          id="outlined"
                          label="First Name"
                          defaultValue={user.firstName}
                          className="form-textfield-double"
                          {...register("firstName", {
                            required: true,
                          })}
                          variant="outlined"
                        />
                        {errors.firstName && (
                          <p className="text-xs text-red-600">
                            First name is required
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
                          defaultValue={user.lastName}
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
                          userDistrict={user.district}
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
                          defaultValue={`0${user.mobile}`}
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
                        variant="outlined"
                        disabled
                        defaultValue={userEmail}
                      />
                      {errors.email && (
                        <p className="text-xs text-red-600">
                          Please check the Email
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="px-4 py-3 text-right bg-gray-50 sm:px-6">
                    <button
                      type="submit"
                      className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-[#ffa537] border border-transparent rounded-md shadow-sm hover:bg-[#d48019] focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                      Save Changes
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default UserProfile;
