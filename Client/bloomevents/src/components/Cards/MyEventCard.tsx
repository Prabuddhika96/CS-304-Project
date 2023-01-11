import { AiOutlineCalendar, AiOutlineClockCircle } from "react-icons/ai";

import DeleteIcon from "@mui/icons-material/Delete";

function MyEventCard({ eventname, date, time }: any) {
  return (
    <div className="shadow-xl card card-side bg-[#fff] my-3 flex justify-around cursor-pointer hover:bg-[#f5f5f5]">
      <div className="w-10/12 card-body">
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

      <div className="items-center w-2/12 card-actions">
        <h1 className="p-2 mx-auto text-red-600 rounded-full hover:bg-red-200">
          <DeleteIcon />
        </h1>
      </div>
    </div>
  );
}

export default MyEventCard;
