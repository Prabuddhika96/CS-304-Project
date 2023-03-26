import { RouteName } from "constant/routeName";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ProviderService from "Services/Provider/ProviderServices";
import BasicServiceDetails from "./EditService/BasicServiceDetails";
import ChangePackageDetails from "./EditService/ChangePackageDetails";

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
    if (user?.userId != provider.userId) {
      handleLogout();
    }
  }

  return (
    <div className="px-5 pt-28">
      <div className="w-full p-3 my-3 text-center bg-white">
        <h1 className="text-4xl font-bold">
          Business <span className="text-[#ffa537]">Infromation</span>
        </h1>
      </div>
      <BasicServiceDetails providerId={providerId} provider={provider} />

      <div className="z-10 w-full p-3  my-3 !mt-8 text-center bg-white">
        <h1 className="text-4xl font-bold">
          Package <span className="text-[#ffa537]">Infromation</span>
        </h1>
      </div>
      <div className="p-2 my-3 mt-8 bg-white rounded-md">
        <ChangePackageDetails providerId={providerId} />
      </div>
    </div>
  );
}

export default EditServiceDetail;
