import AddEventForm from "components/User Events/AddEventForm";
import EventList from "components/User Events/EventList";
import { RouteName } from "constant/routeName";
import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function MyEvents() {
  let { userId } = useParams();
  console.log(userId);

  const navigate = useNavigate();
  const [user, setuser] = React.useState<any>("");

  useEffect(() => {
    setTimeout(() => {
      let logged = localStorage.getItem("loggedUser");
      if (logged) {
        setuser(JSON.parse(logged));
        if (JSON.parse(logged).userId != userId) {
          localStorage.removeItem("loggedUser");
          navigate(RouteName.Home);
        }
      } else {
        setuser(null);
        navigate(RouteName.Login);
      }
    }, 1000);
  }, [localStorage.getItem("loggedUser")]);

  const [reRender, setReRender] = useState<any>("");

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
