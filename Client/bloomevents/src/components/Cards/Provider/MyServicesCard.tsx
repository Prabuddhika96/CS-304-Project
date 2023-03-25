import Ratings from "components/Ratings/Ratings";
import { RouteName } from "constant/routeName";
import image1 from "img/new/image8.jpg";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import FileUpload from "Services/FileUpload/FileUpload";

function MyServicesCard({ provider }: any) {
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
  return (
    <Link
      to={{
        pathname: `${RouteName.ServiceDetails.replace(
          ":providerId",
          provider.providerId.toString()
        )}`,
      }}
      className="">
      <div className="max-w-sm overflow-hidden bg-[#f1f1f1] shadow-lg transition duration-500 ease-in-out transform rounded hover:shadow-2xl hover:scale-[1.01]">
        <img
          src={picture}
          alt={provider.businessName}
          className="object-cover w-full h-48 duration-300 ease-in-out hover:scale-105"
        />
        <div className="px-6 py-4">
          <div className="mb-2 text-2xl font-bold text-[#ffa63a]">
            {provider.businessName}
          </div>
          <div className="mb-2 text-lg">{provider.categoryName}</div>
          <Ratings rating={provider.rating} />
        </div>
      </div>
    </Link>
  );
}

export default MyServicesCard;
