import { Box, Grid, Paper, styled } from "@mui/material";
import EventDetailCard from "components/Cards/EventDetailCard";
import { Events } from "docs/Event";
import { packages } from "docs/packages";
import { AiOutlineCalendar, AiOutlineClockCircle } from "react-icons/ai";
import { useParams } from "react-router-dom";

function EventDetails() {
  let { id } = useParams();
  const index = Number(id);

  const Event = Events[index - 1];
  return (
    <div className="w-full ">
      {/* title and date */}
      <div>
        <div className="w-6/12 ml-8">
          <h2 className="card-title text-[#ffa537] text-3xl mb-3">
            {Event.name}
          </h2>
          <div className="text-[#000] flex justify-between text-lg w-10/12">
            <p className="flex items-center">
              <AiOutlineCalendar className="mr-1 text-[#ffa537]" />
              Date : {Event.date}
            </p>
            <p className="flex items-center">
              <AiOutlineClockCircle className="mr-1 text-[#ffa537]" />
              Time : {Event.time}
            </p>
          </div>
        </div>
      </div>

      {/* packages that add to event */}
    </div>
  );
}

export default EventDetails;
