import { BiCategory } from "react-icons/bi";
import { GoLocation } from "react-icons/go";
import { FiPackage } from "react-icons/fi";
import React, { useState } from "react";
import { toast } from "react-toastify";
import PackageServices from "Services/Packages/PackageService";
import { AiOutlineStar } from "react-icons/ai";

// import image from 'img/dj.jpg';

function ServiceCard({
  image,
  providerName,
  district,
  category,
  providerId,
  description,
  ratings,
}: any) {
  const [packageCount, setPackageCount] = useState<any>();

  React.useEffect(() => {
    PackageServices.getPackageCountByProviderId(providerId).then((res: any) => {
      if (res.data.status == 1) {
        setPackageCount(res.data.data);
        console.log(res.data.data);
        return;
      } else {
        toast.error(res.data.message);
      }
    });
  }, []);

  return (
    <div className="w-11/12 service-card">
      <div
        id="back-img"
        style={{
          background: `url(${image}) center no-repeat`,
          backgroundSize: "cover",
          // position: 'absolute',
          zIndex: -10,
          // height: '500px',
          // top: '32px',
          overflow: "hidden",
          width: "25%",
        }}></div>

      <div className="w-9/12 px-6 pt-2 text-left">
        <h2 className="mb-2 text-xl text-[#c26d06]">{providerName}</h2>

        {packageCount && (
          <div className="flex justify-start mb-1">
            <h3 className="flex items-center mr-6 text-[#464646]">
              <GoLocation className="service-card-icon" /> {district}
            </h3>
            <h3 className="flex items-center mr-6 text-[#464646]">
              <BiCategory className="service-card-icon" /> {category}
            </h3>

            <h3 className="flex items-center mr-6 text-[#464646]">
              <FiPackage className="service-card-icon" /> {packageCount}{" "}
              Packages
            </h3>

            <h3 className="flex items-center mr-6 text-[#464646]">
              <AiOutlineStar className="service-card-icon" /> {ratings}{" "}
            </h3>
          </div>
        )}

        <div className="mt-5 text-[#000]">
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}

export default ServiceCard;
