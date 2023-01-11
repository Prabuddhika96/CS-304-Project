import React from "react";
import { Events } from "docs/Event";
import MyEventCard from "components/Cards/MyEventCard";

function EventList() {
  return (
    <div>
      {Events.map((c: any, i: number) => (
        <div>
          <MyEventCard eventname={c.name} date={c.date} time={c.time} key={i} />
        </div>
      ))}
    </div>
  );
}

export default EventList;
