import { ToggleButtonGroup, ToggleButton, Box, Tab, Tabs } from "@mui/material";
import "styles/myEventsRadioBtns.css";
import MyEventCard from "components/Cards/MyEventCard";
import { RouteName } from "constant/routeName";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import EventServices from "Services/Event/EventServices";
import EventListSkeleton from "skeleton/My Event/EventListSkeleton";

function EventList(userid: any) {
  const navigate = useNavigate();
  const [user, setuser] = React.useState<any>("");

  useEffect(() => {
    setTimeout(() => {
      let logged = localStorage.getItem("loggedUser");
      if (logged) {
        setuser(JSON.parse(logged));
      } else {
        setuser(null);
        navigate(RouteName.Login);
      }
    }, 1000);
  }, [localStorage.getItem("loggedUser")]);

  const [events, setEvents] = React.useState<Array<Event>>();
  const [filteredEvents, setFilteredEvents] = React.useState<Array<Event>>(); // for filter purpose

  React.useEffect(() => {
    EventServices.getEventsByUserId(userid.userid).then((res: any) => {
      if (res.data.status == 1) {
        setEvents(res.data.data);
        setFilteredEvents(res.data.data);
        console.log(res.data.data);
        return;
      } else {
        //toast.error(res.data.message);
      }
    });
  }, []);

  // handle list after deleting event
  const [deleteId, setDeleteId] = React.useState<any>();

  useEffect(() => {
    const filteredData = filteredEvents?.filter(
      (emp: any) => emp.eventId !== deleteId
    );
    setFilteredEvents(filteredData);
  }, [deleteId]);

  // rdio btn function
  const [filterEvents, setFilterEvents] = React.useState<any>(true);
  const handleFilterEvents = (e: any) => {
    setFilterEvents(e.target.value);
  };

  useEffect(() => {
    if (filterEvents == "true") {
      const filteredData = events?.filter((emp: any) => emp.placed == true);
      setFilteredEvents(filteredData);
    } else if (filterEvents == "false") {
      const filteredData = events?.filter((emp: any) => emp.placed == false);
      setFilteredEvents(filteredData);
    } else {
      setFilteredEvents(events);
    }
  }, [filterEvents]);

  return (
    <div>
      {/* radio btns */}
      <div className="align-container">
        <input
          type="radio"
          id="align-left"
          name="alignment"
          value=""
          defaultChecked
          onChange={handleFilterEvents}
        />
        <label htmlFor="align-left">All</label>

        <input
          type="radio"
          id="align-center"
          name="alignment"
          value="true"
          onChange={handleFilterEvents}
        />
        <label htmlFor="align-center">Placed</label>

        <input
          type="radio"
          id="align-right"
          name="alignment"
          value="false"
          onChange={handleFilterEvents}
        />
        <label htmlFor="align-right">Not Placed</label>
      </div>

      <div>
        {filteredEvents && user ? (
          <>
            <p className="mt-5 text-center">
              {filteredEvents.length == 0 && "No Events"}
            </p>
            {filteredEvents.map((c: any, i: number) => (
              <div>
                <MyEventCard
                  eventname={c.eventName}
                  date={c.eventDate}
                  time={c.eventTime}
                  key={i}
                  id={c.eventId}
                  func={setDeleteId}
                  placed={c.placed}
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
    </div>
  );
}

export default EventList;
