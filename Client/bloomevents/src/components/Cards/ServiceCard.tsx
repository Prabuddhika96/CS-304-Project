import { BiCategory } from "react-icons/bi";
import { GoLocation } from "react-icons/go";
import { FiPackage } from "react-icons/fi";
import React, { useState } from "react";
import { toast } from "react-toastify";
import PackageServices from "Services/Packages/PackageService";
import { AiOutlineStar } from "react-icons/ai";
import image from "img/new/image8.jpg";
// import image from 'img/dj.jpg';

function ServiceCard({ provider }: any) {
  // console.log(provider);
  const [packageCount, setPackageCount] = useState<any>(0);

  React.useEffect(() => {
    PackageServices.getPackageCountByProviderId(provider.providerId).then(
      (res: any) => {
        if (res.data.status == 1) {
          setPackageCount(res.data.data.toString());
          console.log(provider.providerId + " - " + res.data.data);
          return;
        } else {
          setPackageCount(0);
          toast.error(res.data.message);
        }
      }
    );
  }, []);

  return (
    // <div>
    //   <p>{provider.businessName}</p>
    //   <p>{provider.district}</p>
    //   <p>{provider.categoryName}</p>
    //   <p>{provider.providerId}</p>
    //   <p>{provider.description}</p>
    //   <p>{provider.rating}</p>
    //   <p></p>
    // </div>

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
        <h2 className="mb-2 text-xl text-[#c26d06]">{provider.businessName}</h2>

        {packageCount && (
          <div className="flex justify-start mb-1">
            <h3 className="flex items-center mr-6 text-[#464646]">
              <GoLocation className="service-card-icon" /> {provider.district}
            </h3>

            <h3 className="flex items-center mr-6 text-[#464646]">
              <BiCategory className="service-card-icon" />{" "}
              {provider.categoryName}
            </h3>

            <h3 className="flex items-center mr-6 text-[#464646]">
              <FiPackage className="service-card-icon" /> {packageCount}{" "}
              Packages
            </h3>

            <h3 className="flex items-center mr-6 text-[#464646]">
              <AiOutlineStar className="service-card-icon" /> {provider.rating}{" "}
            </h3>
          </div>
        )}

        <div className="mt-5 text-[#000]">
          <p>{provider.description}</p>
        </div>
      </div>
    </div>
  );
}

export default ServiceCard;
