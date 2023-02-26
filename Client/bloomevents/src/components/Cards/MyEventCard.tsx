import { AiOutlineCalendar, AiOutlineClockCircle } from "react-icons/ai";

import DeleteIcon from "@mui/icons-material/Delete";
import { RouteName } from "constant/routeName";
import { Link } from "react-router-dom";
import React from "react";
import AddToEventService from "Services/AddToEvent/AddToEventService";
import { FiPackage } from "react-icons/fi";

function MyEventCard({ eventname, date, time, id }: any) {
  const handleDeleteEvent = () => {
    console.log(`Event ${id}  deleted.`);
  };

  const [packageCount, setPackageCount] = React.useState<number>(0);

  React.useEffect(() => {
    AddToEventService.getpackagecountbyeventid(id).then((res: any) => {
      if (res.data.status == 1) {
        setPackageCount(res.data.data);
        return;
      }
    });
  }, []);

  return (
    <div>
      <Link
        to={{
          pathname: `${RouteName.EventDetails.replace(":id", id.toString())}`,
        }}>
        <div className="w-full">
          <div className="block w-full p-6 my-2 bg-[#fff8ef] rounded-lg shadow-lg">
            <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 ">
              {eventname}
            </h5>
            <p className="flex items-center mb-2 text-base text-neutral-600 ">
              <AiOutlineCalendar className="mr-1 text-[#ffa537]" />
              Date : {date}
            </p>

            <p className="flex items-center mb-2 text-base text-neutral-600 ">
              <AiOutlineClockCircle className="mr-1 text-[#ffa537]" />
              Time : {time}
            </p>

            <p className="flex items-center mb-2 text-base text-neutral-600 ">
              <FiPackage className="mr-1 text-[#ffa537]" />
              Packages : {packageCount}
            </p>

            <div className="flex justify-end w-full">
              <button
                type="button"
                onClick={handleDeleteEvent}
                className="inline-block rounded items-center bg-red-600 px-6 pt-2.5 pb-2 text-xs uppercase leading-normal tracking-wider font-medium text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]">
                <span className="mr-2">
                  <DeleteIcon />
                </span>
                Delete
              </button>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default MyEventCard;
