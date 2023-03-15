import Ratings from "components/Ratings/Ratings";
import image1 from "img/new/image8.jpg";

function MyServicesCard({ provider }: any) {
  return (
    <div className="max-w-sm overflow-hidden bg-[#f1f1f1] shadow-lg transition duration-500 ease-in-out transform rounded hover:shadow-2xl hover:scale-[1.01]">
      <img
        src={image1}
        alt={provider.businessName}
        className="object-cover w-full h-48 duration-300 ease-in-out hover:scale-105"
      />
      <div className="px-6 py-4">
        <div className="mb-2 text-2xl font-bold text-[#ffa63a]">
          {provider.businessName}
        </div>
        <div className="mb-2 text-lg font-bold">{provider.categoryName}</div>
        <Ratings rating={provider.rating} />
      </div>
    </div>
  );
}

export default MyServicesCard;
