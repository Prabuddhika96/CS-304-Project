import { useState } from "react";
import { FaQuoteRight } from "react-icons/fa";
import FileUpload from "Services/FileUpload/FileUpload";
import "styles/review.css";

const Review = ({ review }: any) => {
  console.log(review);
  const [propic, setPropic] = useState<any>("");
  FileUpload.getProfilePicture(1).then((res: any) => {
    // console.log(res);
    if (res.status == 200) {
      setPropic(
        `${process.env.REACT_APP_BACKEND_SERVER}/upload/profilePic/${
          review ? review.id : "4"
        }`
      );
      return;
    } else {
      // setPropic(res.status);
    }
  });
  return (
    <div>
      <article className="grid items-center grid-cols-3 my-2 review">
        <div className="items-center img-container">
          <img src={propic} alt={review.name} className="person-img" />
          <span className="quote-icon">
            <FaQuoteRight />
          </span>
        </div>

        <div className="col-span-2 text-left">
          <h4 className="text-lg uppercase author">{review.name}</h4>
          <p className="job">{review.job}</p>
          <p className="info">{review.text}</p>
        </div>
      </article>
    </div>
  );
};

export default Review;
