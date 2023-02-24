import { AiOutlineCalendar, AiOutlineClockCircle } from "react-icons/ai";

import DeleteIcon from "@mui/icons-material/Delete";
import { RouteName } from "constant/routeName";
import { Link } from "react-router-dom";

function MyEventCard({ eventname, date, time, id }: any) {
  const handleDeleteEvent = () => {
    console.log(`Event ${id}  deleted.`);
  };
  return (
    <div className="shadow-xl card card-side bg-[#fff] my-3 flex justify-around cursor-pointer">
      <Link
        to={{
          pathname: `${RouteName.EventDetails.replace(":id", id.toString())}`,
        }}
        className="w-10/12">
        <div className="w-full card-body hover:bg-[#f5f5f5]">
          <h2 className="card-title text-[#ffa537]">{eventname}</h2>
          <div className="text-[#000] flex">
            <p className="flex items-center">
              <AiOutlineCalendar className="mr-1 text-[#ffa537]" />
              Date : {date}
            </p>
            <p className="flex items-center">
              <AiOutlineClockCircle className="mr-1 text-[#ffa537]" />
              Time : {time}
            </p>
          </div>
        </div>
      </Link>

      <div className="items-center w-2/12 card-actions">
        <h1
          className="p-2 mx-auto text-red-600 rounded-full z-2 hover:bg-red-200"
          onClick={handleDeleteEvent}>
          <DeleteIcon />
        </h1>
      </div>
    </div>
  );
}

export default MyEventCard;
