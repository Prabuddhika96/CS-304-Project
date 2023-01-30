import { RouteName } from "constant/routeName";
import React from "react";
import NavElement from "../NavElement/NavElement";

function ProviderMode() {
  return (
    <div>
      <ul className={`pt-4 ml-10 text-center flex text-base`}>
        <NavElement linkAddress={RouteName.Home} name={"My Services"} />
        <NavElement linkAddress={RouteName.Services} name={"Add New Service"} />
        <NavElement linkAddress={RouteName.Aboutus} name={"Reviews"} />
      </ul>
    </div>
  );
}

export default ProviderMode;
