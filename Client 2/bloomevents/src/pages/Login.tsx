import { useEffect, useState } from "react";
import image from "img/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { TextField } from "@mui/material";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { RouteName } from "constant/routeName";
import LoginDetails from "types/LoginDetails";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import AuthService from "Services/Authencation/AuthService";

function Login(): JSX.Element {
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
  const handleClickShowPw = () => {
    if (showPw) {
      setShowPw(false);
    } else {
      setShowPw(true);
    }
  };

  //login details
  const [email, setemail] = useState<string | "">("");
  const [password, setpassword] = useState<string | "">("");

  const [values, setValues] = useState<LoginDetails>({
    email: "",
    password: "",
  });

  useEffect(() => {
    setValues({
      email: email,
      password: password,
    });
  }, [email, password]);

  //handle form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data: any) => {
    //e.preventDefault();
    //console.log(data);

    setTimeout(async () => {
      const result = await AuthService.loginRequest(data);
      console.log(result);
      console.log(result.data.status);
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
        let providermode = localStorage.getItem("ProviderMode");
        if (providermode) {
          if (JSON.parse(providermode)) {
            navigate(RouteName.MyServices);
          } else {
            navigate(RouteName.Services);
          }
        } else {
          navigate(RouteName.Services);
        }

        toast.success("Login Successfull");
        return;
      } else {
        toast.error(result.data.message);
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
                  Log <span className="text-[#ffa537]">In</span>
                </h1>

                {/* email */}
                <div className="col-span-6 my-3 buttonIn sm:col-span-4">
                  <TextField
                    id="outlined"
                    type={"text"}
                    label="Email address"
                    className="w-full"
                    {...register("email", {
                      required: true,
                      pattern:
                        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                    })}
                    onChange={(e) => {
                      setemail(e.target.value);
                    }}
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
                      onChange={(e) => {
                        setpassword(e.target.value);
                      }}
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
                  className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-[#ffa537] border border-transparent rounded-md shadow-sm hover:bg-[#d48019] focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
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
