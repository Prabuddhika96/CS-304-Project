import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { Link } from "react-router-dom";
import { RouteName } from "constant/routeName";
import PackageServices from "Services/Packages/PackageService";
import { toast } from "react-toastify";
import ProviderService from "Services/Provider/ProviderServices";
import AddToEventService from "Services/AddToEvent/AddToEventService";

function EventDetailCard({ packageId, placed, func, addToEventId }: any) {
  //console.log(placed);
  const handleDeleteEvent = () => {
    AddToEventService.deletePackage(addToEventId).then((res: any) => {
      if (res.data.data == 1) {
        toast.success("Successfully Deleted");
      } else {
        toast.error(res.data.message);
      }
    });
    func(addToEventId);
    alert(`${addToEventId} deleted.`);
  };

  const [packge, setPackge] = React.useState<any>();

  React.useEffect(() => {
    PackageServices.getPackageByPackageId(packageId).then((res: any) => {
      if (res.data.status == 1) {
        setPackge(res.data.data);
        //console.log(res.data.data);
        return;
      } else {
        toast.error(res.data.message);
      }
    });
  }, []);

  const [provider, setProvider] = React.useState<any>();
  React.useEffect(() => {
    if (packge) {
      ProviderService.getProvider(packge.packageId).then((res: any) => {
        if (res.data.status == 1) {
          setProvider(res.data.data);
          //console.log(res.data.data);
          return;
        } else {
          toast.error(res.data.message);
        }
      });
    }
  }, [packge]);

  return (
    <div>
      {packge && provider && (
        <>
          <Link
            to={{
              pathname: `${RouteName.ProviderDetails.replace(
                ":providerId",
                packge.providerId.toString()
              )}`,
            }}
            className="w-10/12">
            <div className="card w-96 glass">
              <figure>
                <img src="https://placeimg.com/400/225/arch" alt="car!" />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-[#ffa537]">
                  {provider.businessName}
                </h2>
                <p className="text-[#000]">{packge.packageName}</p>
              </div>
            </div>
          </Link>

          {placed == false && (
            <div className="justify-end mt-3 card-actions">
              <button
                type="button"
                onClick={handleDeleteEvent}
                className="text-red-600 border-red-600 hover:bg-red-600 my-event-card-btn">
                <span className="mr-1">
                  <DeleteIcon />
                </span>
                Remove Package
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default EventDetailCard;
