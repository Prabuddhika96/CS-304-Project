import { useEffect, useState } from "react";
import image from "img/logo.png";
import { TextField } from "@mui/material";

import dayjs, { Dayjs } from "dayjs";
import DatePicker from "./DatePicker";

import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import SuccessSnakBar from "components/Snak Bars/SuccessSnakBar";
import { Event } from "types/Event";
import { useNavigate } from "react-router-dom";
import { RouteName } from "constant/routeName";
import EventServices from "Services/Event/EventServices";

function AddEventForm() {
  const [eventname, seteventname] = useState<string | "">("New Event");
  const [date, setdate] = useState<Dayjs>(dayjs());
  const [time, settime] = useState<Dayjs>(dayjs());

  const [user, setuser] = useState<any>();

  const navigate = useNavigate();

  useEffect(() => {
    let logged = localStorage.getItem("loggedUser");
    if (logged) {
      setuser(JSON.parse(logged));
    } else {
      setuser(null);
      navigate(RouteName.Login);
    }
  }, [localStorage.getItem("loggedUser")]);

  // choose event
  const [successAddEvent, setSuccessAddEvent] = useState<boolean>(false);
  const [emptyField, setEmptyFeild] = useState<boolean>(false);

  const [values, setValues] = useState<Event>({
    eventId: 0,
    eventDate: "",
    eventTime: "",
    eventName: "New Event",
    userId: 0,
    isPlaced: true,
    placedDate: "",
    placedTime: "",
  });

  useEffect(() => {
    setValues({
      eventId: 0,
      eventDate: dayjs(date).format("DD-MMM-YYYY"),
      eventName: eventname,
      eventTime: dayjs(time).format("hh:mm A"),
      userId: 0,
      isPlaced: true,
      placedDate: "",
      placedTime: "",
    });
    //console.log(values);
  }, [eventname, date]);

  const [msg, setmsg] = useState<string>();

  const handleClck = async (e: any) => {
    e.preventDefault();

    setTimeout(() => {
      setValues({
        ...values,
        userId: user.userId,
      });
    }, 1000);

    console.log(values);

    if (values.eventName === "") {
      setEmptyFeild(true);
      setSuccessAddEvent(false);
      setmsg("Name is required !");
    } else if (time.isBefore(dayjs())) {
      setEmptyFeild(true);
      setSuccessAddEvent(false);
      setmsg("Event Time is not valid !");
    } else {
      setEmptyFeild(false);

      // setTimeout(async () => {
      //   const result = await EventServices.addEvent(values);
      //   console.log(result);
      //   if (result) {
      //     setSuccessAddEvent(true);
      //   } else {
      //     setSuccessAddEvent(false);
      //   }
      // }, 1000);
    }
  };

  return (
    <div className="items-center w-full pt-24 mb-20 ">
      <div className="items-center w-6/12 mx-auto my-3">
        <img src={image} alt="" className="w-full" />
      </div>

      <div className="w-full ">
        <div className="mt-10 sm:mt-0">
          <form action="#" method="POST">
            <div className="overflow-hidden drop-shadow-2xl sm:rounded-md">
              <div className="px-4 py-5 bg-white sm:p-6">
                <h1 className="mb-3 text-3xl text-left">
                  Add <span className="text-[#ffa537]">Event</span>
                </h1>

                {/* first name and last name */}
                <div className="justify-between w-full ">
                  <div className="w-full col-span-5 my-3 buttonIn sm:col-span-4">
                    <TextField
                      color="warning"
                      id="outlined"
                      label="Event Name"
                      className="form-textfield-double"
                      value={values.eventName}
                      onChange={(e) => {
                        seteventname(e.target.value);
                      }}
                      variant="outlined"
                    />
                  </div>

                  <div className="w-full col-span-5 my-3 buttonIn sm:col-span-4">
                    <DatePicker
                      datefunc={setdate}
                      dateval={date}
                      timefunc={settime}
                      timeval={time}
                    />
                  </div>
                </div>
              </div>

              <div className="px-4 py-3 text-right bg-gray-50 sm:px-6">
                <button
                  type="submit"
                  className="login-form-btn"
                  onClick={handleClck}>
                  <span className="mr-2 text-white">
                    <AddCircleOutlineIcon />
                  </span>{" "}
                  Add Event
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>

      <div className="absolute bottom-0 left-0">
        {successAddEvent && (
          <SuccessSnakBar
            func={setSuccessAddEvent}
            type="success"
            val={successAddEvent}
            msg={"Successfully Added !"}
          />
        )}
        {emptyField && (
          <SuccessSnakBar
            func={setEmptyFeild}
            type="error"
            val={emptyField}
            msg={msg}
          />
        )}
      </div>
    </div>
  );
}

export default AddEventForm;
