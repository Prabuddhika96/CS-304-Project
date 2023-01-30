import { Box, Grid, Paper, styled } from "@mui/material";
import EventDetailCard from "components/Cards/EventDetailCard";
import { RouteName } from "constant/routeName";
import { Events } from "docs/Event";
import { packages } from "docs/packages";
import { AiOutlineCalendar, AiOutlineClockCircle } from "react-icons/ai";
import { MdDoneOutline } from "react-icons/md";
import { Link, useParams } from "react-router-dom";

import Button from "@mui/material/Button";

function EventDetails() {
  let { id } = useParams();
  const index = Number(id);

  const Event = Events[index - 1];
  return (
    <div className="w-full pt-24">
      <div className="flex w-full">
        {/* title and date */}
        <div className="w-8/12 mb-5">
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

        {/* place btn */}
        <div className="w-4/12">
          <Button variant="contained" color="success">
            <MdDoneOutline /> Place Event
          </Button>
        </div>
      </div>

      {/* packages that add to event */}
      <div className="grid w-11/12 grid-cols-3 gap-5 mx-auto">
        {packages.map((p: any, i: number) => (
          <Link
            to={{
              pathname: `${RouteName.ProviderDetails.replace(
                ":providerId",
                p.id.toString()
              )}`,
            }}
            className="w-10/12">
            <EventDetailCard
              providername={`Provider ${p.id}`}
              packagename={p.name}
              key={i}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default EventDetails;
