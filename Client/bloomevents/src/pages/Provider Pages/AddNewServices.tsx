import { InputLabel, MenuItem, Select, TextField } from "@mui/material";
import SignupDropDown from "components/Drop Downs/SignupDropdown";
import { RouteName } from "constant/routeName";
import { districts } from "docs/districts";
import React from "react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import CategoryService from "Services/Category/CategoryService";

function AddNewServices() {
  let { userId } = useParams();

  const navigate = useNavigate();
  const [user, setuser] = React.useState<any>("");

  useEffect(() => {
    setTimeout(() => {
      let logged = localStorage.getItem("loggedUser");
      if (logged) {
        setuser(JSON.parse(logged));
        if (JSON.parse(logged).userId != userId) {
          localStorage.removeItem("loggedUser");
          navigate(RouteName.Home);
        }
      } else {
        setuser(null);
        navigate(RouteName.Login);
      }
    }, 1000);
  }, [localStorage.getItem("loggedUser")]);

  // district
  const [district, setDistrict] = useState<string | "">("");

  //category
  const [categories, setCategories] = useState<any>();
  useEffect(() => {
    CategoryService.getAllCategories().then((res: any) => {
      if (res.data.status == 1) {
        setCategories(res.data.data);
        console.log(res.data.data);
        return;
      } else {
        setCategories(null);
      }
    });
  }, []);

  //handle form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data: any) => {
    console.log(data);
  };

  return (
    <div className="pt-28">
      <div className="flex items-center w-full px-4 mb-20">
        <div className="w-6/12">
          {/* <img src={preview} alt="" className="w-full" /> */}
        </div>

        <div className="w-6/12 mt-10 sm:mt-0">
          <form action="#" method="POST" onSubmit={handleSubmit(onSubmit)}>
            <div className="overflow-hidden drop-shadow-2xl sm:rounded-md">
              <div className="px-4 py-5 bg-white sm:p-6">
                <h1 className="mb-3 text-3xl text-left">
                  Add <span className="text-[#ffa537]">Service</span>
                </h1>

                {/* business name */}
                <div className="form-input-main-div">
                  <div className="form-input-main-div">
                    <div className="block w-full">
                      <TextField
                        id="outlined"
                        color="warning"
                        label="Business Name"
                        className="form-textfield-double"
                        {...register("businessName", {
                          required: true,
                        })}
                        variant="outlined"
                      />
                      {errors.businessName && (
                        <p className="text-xs text-red-600 ">
                          Business name is required
                        </p>
                      )}
                    </div>
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
                      color="warning"
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

                {categories && (
                  <>
                    {/* Category */}
                    <div className="form-input-main-div">
                      <div className="block w-full">
                        <SignupDropDown
                          array={categories}
                          title="Category"
                          func={setCategories}
                          func1={register}
                        />
                        {errors.district && (
                          <p className="text-xs text-red-600">
                            District is required
                          </p>
                        )}
                      </div>
                    </div>
                  </>
                )}
              </div>

              <div className="px-4 py-3 text-right bg-gray-50 sm:px-6">
                <button
                  type="submit"
                  // onClick={handlePropic}
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

export default AddNewServices;
