import logo from "img/logo.png";
import { FaQuoteRight } from "react-icons/fa";

function PackageDetailCard({ pckage }: any) {
  return (
    <div>
      <article className="grid items-center gap-24 grid-cols-4 my-2 review hover:shadow-[0_0_50px_rgba(0, 0, 0, 0.4)] hover:scale-[1.01]">
        <div className="img-container">
          <img src={logo} alt={pckage.providerId} className="person-img" />
          <span className="quote-icon">
            <FaQuoteRight />
          </span>
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
