import AddEventForm from "components/User Events/AddEventForm";
import EventList from "components/User Events/EventList";
import React from "react";
import { useParams } from "react-router-dom";

function MyEvents() {
  let { userId } = useParams();
  console.log(userId);

  return (
    <div className="flex justify-around w-full mx-auto">
      <div className="top-0 items-center w-8/12 px-8 pt-24 mx-auto">
        <EventList userid={userId} />
      </div>

      <div className="top-0 items-center w-4/12 px-8 mx-auto">
        <AddEventForm userid={userId} />
      </div>
    </div>
  );
}

export default MyEvents;
