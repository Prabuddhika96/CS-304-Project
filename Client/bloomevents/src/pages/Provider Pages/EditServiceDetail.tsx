import { RouteName } from "constant/routeName";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ProviderService from "Services/Provider/ProviderServices";

function EditServiceDetail() {
  let { providerId } = useParams();
  const navigate = useNavigate();
  const [user, setuser] = React.useState<any>("");

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
        return;
      } else {
      }
    });
  }, []);

  return (
    <div className="pt-28">
      <h1>{providerId}</h1>
    </div>
  );
}

export default EditServiceDetail;
