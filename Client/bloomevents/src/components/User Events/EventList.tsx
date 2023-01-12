import React from "react";
import { Events } from "docs/Event";
import MyEventCard from "components/Cards/MyEventCard";
import { Link } from "react-router-dom";
import { RouteName } from "constant/routeName";

function EventList() {
  return (
    <div>
      {Events.map((c: any, i: number) => (
        <div>
          <MyEventCard
            eventname={c.name}
            date={c.date}
            time={c.time}
            key={i}
            id={c.id}
          />
        </div>
      ))}
    </div>
  );
}

export default EventList;
