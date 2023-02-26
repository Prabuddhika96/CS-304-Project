import MyEventCard from "components/Cards/MyEventCard";
import React, { useEffect } from "react";
import EventServices from "Services/Event/EventServices";
import EventListSkeleton from "skeleton/My Event/EventListSkeleton";

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
        return;
      } else {
        //toast.error(res.data.message);
      }
    });
  }, []);

  // handle list after deleting event
  const [deleteId, setDeleteId] = React.useState<any>();

  useEffect(() => {
    const filteredData = events?.filter((emp: any) => emp.eventId !== deleteId);
    setEvents(filteredData);
  }, [deleteId]);

  return (
    <div>
      {events && user ? (
        <>
          {events.map((c: any, i: number) => (
            <div>
              <MyEventCard
                eventname={c.eventName}
                date={c.eventDate}
                time={c.eventTime}
                key={i}
                id={c.eventId}
                func={setDeleteId}
              />
            </div>
          ))}
        </>
      ) : (
        <>
          <EventListSkeleton />
        </>
      )}
    </div>
  );
}

export default EventList;
function useState<T>(): [any, any] {
  throw new Error("Function not implemented.");
}
