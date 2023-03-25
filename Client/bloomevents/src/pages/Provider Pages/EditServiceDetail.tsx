import { TextField } from "@mui/material";
import SignupDropDown from "components/Drop Downs/SignupDropdown";
import { RouteName } from "constant/routeName";
import { districts } from "docs/districts";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import ProviderService from "Services/Provider/ProviderServices";
import image1 from "img/new/image8.jpg";
import FileUpload from "Services/FileUpload/FileUpload";
import { toast } from "react-toastify";

function EditServiceDetail() {
  let { providerId } = useParams();
  const navigate = useNavigate();
  const [user, setuser] = React.useState<any>();

  useEffect(() => {
    setTimeout(() => {
      let logged = localStorage.getItem("loggedUser");
      if (logged) {
        setuser(JSON.parse(logged));
      } else {
        setuser(null);
        navigate(RouteName.Login);
      }
    }, 1000);
  }, [localStorage.getItem("loggedUser")]);

  const [provider, setProvider] = useState<any>();
  React.useEffect(() => {
    ProviderService.getProvider(providerId).then((res: any) => {
      if (res.data.status == 1) {
        setProvider(res.data.data);
      } else {
        setProvider(null);
      }
    });
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("loggedUser");
    localStorage.removeItem("ProviderMode");
    navigate(RouteName.Home);
  };

  if (user && provider) {
    if (user?.userId != provider?.userId) {
      handleLogout();
    }
  }

  // get service provider logo
  const [picture, setPicture] = useState("");
  useEffect(() => {
    FileUpload.getProfilePicture(1).then((res: any) => {
      // console.log(res);
      if (res.status == 200) {
        setPicture(
          `${process.env.REACT_APP_BACKEND_SERVER}/upload/ProviderLogos/${provider?.providerId}`
        );
        return;
      } else {
        // setPropic(res.status);
      }
    });
  }, [provider]);

  function handleFileUpload(event: any) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPicture(reader.result as string);
    };
  }

  // handle form
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
    const updatedService: any = {
      providerId: provider.providerId,
      district: data.district,
      businessName: data.businessName,
      description: data.description,
      mobile: data.mobile,
      web: data.web,
      facebook: data.facebook,
      instagram: data.instagram,
    };
    console.log(updatedService);
    const result = await ProviderService.updateProvider(updatedService);
    console.log(result);
    if (result.data.status == 1) {
      toast.success("Service Details Updated");
      window.location.reload();
    } else {
      console.log("failed");
    }
  };

  const handleServiceLogo = () => {
    // e.preventDefault();
    const file = FileUpload.convertBase64ToFile(picture, "aa.png");
    // console.log(file);
    let formData = new FormData();
    formData.append("file", file);

    FileUpload.uploadServiceLogo(provider?.providerId, formData);
    window.location.reload();
  };
  return (
    <div className="px-5 pt-28">
      {provider ? (
        <form action="#" method="POST" onSubmit={handleSubmit(onSubmit)}>
          <div className="overflow-hidden drop-shadow-2xl sm:rounded-md">
            <div className="px-4 py-5 bg-white sm:p-6">
              <h1 className="mb-3 text-3xl text-center">
                Update <span className="text-[#ffa537]">Service</span>{" "}
                Information
              </h1>

              {/* service logo */}
              <div className="flex justify-center mx-auto my-3 mb-5">
                <input
                  type="file"
                  name=""
                  id=""
                  style={{
                    backgroundImage: `url(${picture})`,
                    backgroundSize: `cover`,
                  }}
                  onChange={handleFileUpload}
                  className="logo-file-upload"
                />

                {/* {picture && <img src={picture} alt="Profile Preview" />} */}
              </div>

              {/* business name */}
              <div className="block form-input-main-div">
                <TextField
                  color="warning"
                  id="outlined"
                  label="Business Name"
                  defaultValue={provider.businessName}
                  className="form-textfield-double"
                  {...register("businessName", {
                    required: true,
                  })}
                  variant="outlined"
                />
                {errors.businessName && (
                  <p className="text-xs text-red-600">
                    Business name is required
                  </p>
                )}
              </div>

              {/* district and mobile */}
              <div className="form-input-main-div">
                <div className="form-input-sub-div">
                  <SignupDropDown
                    array={districts}
                    title="District"
                    func={setDistrict}
                    func1={register}
                    userDistrict={provider.district}
                  />
                  {errors.district && (
                    <p className="text-xs text-red-600">District is required</p>
                  )}
                </div>

                <div className="form-input-sub-div">
                  <TextField
                    id="outlined"
                    label="Mobile"
                    color="warning"
                    className="form-textfield-double"
                    {...register("mobile", {
                      required: true,
                      maxLength: 10,
                      minLength: 10,
                      pattern: /^[0-9]+$/,
                    })}
                    variant="outlined"
                    defaultValue={`${provider.mobile}`}
                  />
                  {errors.mobile && (
                    <p className="text-xs text-red-600">
                      Mobile Number is required
                    </p>
                  )}
                </div>
              </div>

              {/* description */}
              <div className="block form-input-main-div">
                <TextField
                  color="warning"
                  id="outlined"
                  label="Description"
                  multiline
                  rows={6}
                  defaultValue={provider.description}
                  className="form-textfield-double"
                  {...register("description", {
                    required: true,
                    maxLength: 300,
                  })}
                  variant="outlined"
                />
                {errors.description && (
                  <p className="text-xs text-red-600">
                    Description is required
                  </p>
                )}
              </div>

              {/* web */}
              <div className="my-3 form-input-main-div">
                <TextField
                  color="warning"
                  id="outlined"
                  label="Website"
                  defaultValue={provider.web}
                  className="form-textfield-double"
                  {...register("web", {})}
                  variant="outlined"
                />
                {errors.web && (
                  <p className="text-xs text-red-600">Website is required</p>
                )}
              </div>

              {/* facebook */}
              <div className="my-3 form-input-main-div">
                <TextField
                  color="warning"
                  id="outlined"
                  label="Facebook"
                  defaultValue={provider.facebook}
                  className="form-textfield-double"
                  {...register("facebook", {})}
                  variant="outlined"
                />
                {errors.facebook && (
                  <p className="text-xs text-red-600">Facebook is required</p>
                )}
              </div>

              {/* instagram */}
              <div className="my-3 form-input-main-div">
                <TextField
                  color="warning"
                  id="outlined"
                  label="Instagram"
                  defaultValue={provider.instagram}
                  className="form-textfield-double"
                  {...register("instagram", {})}
                  variant="outlined"
                />
                {errors.instagram && (
                  <p className="text-xs text-red-600">Instagram is required</p>
                )}
              </div>
            </div>

            <div className="px-4 py-3 text-right bg-gray-50 sm:px-6">
              <button
                type="submit"
                // onClick={handleServiceLogo}
                className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-[#ffa537] border border-transparent rounded-md shadow-sm hover:bg-[#d48019] focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                Save Changes
              </button>
            </div>
          </div>
        </form>
      ) : (
        <></>
      )}
    </div>
  );
}

export default EditServiceDetail;
