import React, { useState } from "react";
import { FaQuoteRight, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "styles/review.css";
import logo from "img/logo.png";

function PackageList({ packages }: any) {
  // console.log(packages);
  const [index, setIndex] = useState(0);
  const { packageId, packageName, price, description, providerId } =
    packages[index];

  // console.log(packageName);
  const checkNumber = (number: number) => {
    if (number > packages.length - 1) {
      return 0;
    }
    if (number < 0) {
      return packages.length - 1;
    }
    return number;
  };

  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };

  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };

  return (
    <div>
      <article className="review">
        <div className="img-container">
          <img src={logo} alt={providerId} className="person-img" />
          <span className="quote-icon">
            <FaQuoteRight />
          </span>
        </div>
        <h4 className="text-3xl author">{packageName}</h4>
        <p className="text-xl job">{`Rs. ${price}`}</p>
        <p className="info">{description}</p>
        <div className="button-container">
          <button className="prev-btn" onClick={prevPerson}>
            <FaChevronLeft />
          </button>
          <button className="next-btn" onClick={nextPerson}>
            <FaChevronRight />
          </button>
        </div>
      </article>
    </div>
  );
}

export default PackageList;
