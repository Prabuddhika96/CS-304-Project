import { useState, useEffect } from "react";
import FileUpload from "Services/FileUpload/FileUpload";

function PackageDetailCard({ pckage }: any) {
  const [picture, setPicture] = useState("");
  useEffect(() => {
    FileUpload.getProfilePicture(1).then((res: any) => {
      // console.log(res);
      if (res.status == 200) {
        setPicture(
          `${process.env.REACT_APP_BACKEND_SERVER}/upload/ProviderLogos/${pckage?.providerId}`
        );
        return;
      } else {
        // setPropic(res.status);
      }
    });
  }, [pckage]);
  return (
    <div>
      <article className="grid items-center gap-24 grid-cols-4 my-2 review hover:shadow-[0_0_50px_rgba(0, 0, 0, 0.4)] hover:scale-[1.01]">
        <div className="img-container">
          <img src={picture} alt={pckage.providerId} className="person-img" />
          {/* <span className="quote-icon">
            <FaQuoteRight />
          </span> */}
        </div>

        <div className="col-span-3 text-left">
          <div className="">
            <h4 className="text-3xl author">{pckage.packageName}</h4>
            <p className="text-xl job">{`Rs. ${pckage.price}`}</p>
          </div>
          <p className="info">{pckage.description}</p>
        </div>
      </article>
    </div>
  );
}

export default PackageDetailCard;
