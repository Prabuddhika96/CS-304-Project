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

function AddEventForm(userid: any) {
  const [eventname, seteventname] = useState<string | "">("");
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
    eventName: "",
    userId: userid.userid,
    placed: false,
    placedDate: "",
    placedTime: "",
  });

  useEffect(() => {
    setValues({
      eventId: 0,
      eventDate: dayjs(date).format("DD-MMM-YYYY").toString(),
      eventName: eventname,
      eventTime: dayjs(time).format("hh:mm A").toString(),
      userId: userid.userid,
      placed: false,
      placedDate: "",
      placedTime: "",
    });
    // console.log(date);
  }, [eventname, date]);

  const [msg, setmsg] = useState<string>();

  const handleClck = async (e: any) => {
    e.preventDefault();

    setTimeout(() => {
      setValues({
        ...values,
        userId: userid.userid,
      });
    }, 1000);

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
      console.log(values);

      setTimeout(async () => {
        const result = await EventServices.addEvent(values);
        console.log(result);
        if (result) {
          setSuccessAddEvent(true);
          window.location.reload();
        } else {
          setSuccessAddEvent(false);
        }
      }, 1000);
    }
  };

  return (
    <div className="items-center w-full pt-32 mb-20 ">
      {/* <div className="items-center w-6/12 mx-auto my-3">
        <img src={image} alt="" className="w-full" />
      </div> */}

      <div className="w-full ">
        <div className="mt-10 sm:mt-0">
          <form action="#" method="POST">
            <div className="overflow-hidden drop-shadow-2xl sm:rounded-md">
              <div className="px-4 py-5 bg-white sm:p-6">
                <div className="flex justify-around">
                  <div className="w-3/12 my-3">
                    <img src={image} alt="" className="w-full" />
                  </div>

                  <h1 className="w-9/12 my-auto text-3xl text-left">
                    Add <span className="text-[#ffa537]">Event</span>
                  </h1>
                </div>

                {/* Event name */}
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
                {user && (
                  <button
                    type="submit"
                    className="login-form-btn"
                    onClick={handleClck}>
                    <span className="mr-2 text-white">
                      <AddCircleOutlineIcon />
                    </span>{" "}
                    Add Event
                  </button>
                )}
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
