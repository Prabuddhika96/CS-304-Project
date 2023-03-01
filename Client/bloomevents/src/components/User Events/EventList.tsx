import { ToggleButtonGroup, ToggleButton, Box, Tab, Tabs } from "@mui/material";
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
  const [alignment, setAlignment] = React.useState<any>(true);
  //setFilteredEvents(events);

  const handleAlignment = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string | null
  ) => {
    setAlignment(newAlignment);
    console.log(newAlignment);

    if (newAlignment == "true") {
      //alert("true");
      const filteredData = events?.filter((emp: any) => emp.placed == true);
      setFilteredEvents(filteredData);
    } else if (newAlignment == "false") {
      //alert("false");
      const filteredData = events?.filter((emp: any) => emp.placed == false);
      setFilteredEvents(filteredData);
    } else {
      //alert("null");
      setFilteredEvents(events);
    }
  };

  return (
    <div>
      <div className="mb-8 text-center">
        <ToggleButtonGroup
          value={alignment}
          exclusive
          onChange={handleAlignment}
          aria-label="text alignment">
          <ToggleButton value="" aria-label="left aligned" defaultChecked>
            All Events
          </ToggleButton>
          <ToggleButton value={"true"} aria-label="centered">
            Placed Events
          </ToggleButton>
          <ToggleButton value={"false"} aria-label="right aligned">
            Not Placed Events
          </ToggleButton>
        </ToggleButtonGroup>
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
