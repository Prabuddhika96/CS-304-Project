import MyEventCard from "components/Cards/MyEventCard";
import { Events } from "docs/Event";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import EventServices from "Services/Event/EventServices";

function EventList(userid: any) {
  // console.log(userid.userid);

  const [user, setuser] = React.useState<any>();

  useEffect(() => {
    setTimeout(() => {
      let logged = localStorage.getItem("loggedUser");
      if (logged) {
        setuser(JSON.parse(logged));
      } else {
        setuser(null);
      }
    }, 1000);
  }, [localStorage.getItem("loggedUser")]);

  const [events, setEvents] = React.useState<Array<Event>>();

  React.useEffect(() => {
    EventServices.getEventsByUserId(userid.userid).then((res: any) => {
      if (res.data.status == 1) {
        setEvents(res.data.data);
        // console.log(res.data.data);
        return;
      } else {
        //toast.error(res.data.message);
      }
    });
  }, []);
  // console.log(events);

  return (
    <div>
      {/* {Events &&
        user &&
        Events.map((c: any, i: number) => (
          <div>
            <MyEventCard
              eventname={c.name}
              date={c.date}
              time={c.time}
              key={i}
              id={c.id}
            />
          </div>
        ))} */}

      {events &&
        user &&
        events.map((c: any, i: number) => (
          <div>
            <MyEventCard
              eventname={c.eventName}
              date={c.eventDate}
              time={c.eventTime}
              key={i}
              id={c.eventId}
            />
          </div>
        ))}
    </div>
  );
}

export default EventList;
function useState<T>(): [any, any] {
  throw new Error("Function not implemented.");
}
