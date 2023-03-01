import EventDetailCard from "components/Cards/EventDetailCard";
import { RouteName } from "constant/routeName";
import { Events } from "docs/Event";
import { packages } from "docs/packages";
import { AiOutlineCalendar, AiOutlineClockCircle } from "react-icons/ai";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import RemoveDoneIcon from "@mui/icons-material/RemoveDone";
import { Link, useNavigate, useParams } from "react-router-dom";
import CheckIcon from "@mui/icons-material/Check";
import DeleteIcon from "@mui/icons-material/Delete";
import { useEffect } from "react";
import React from "react";
import EventServices from "Services/Event/EventServices";
import { toast } from "react-toastify";
import { Event } from "types/Event";
import { Dialog, DialogTitle, DialogActions, Button } from "@mui/material";

function EventDetails() {
  let { eventId } = useParams();
  const index = Number(eventId);

  const navigate = useNavigate();
  const [user, setuser] = React.useState<any>();

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

  // get event details
  const [event, setEvent] = React.useState<Event>();
  React.useEffect(() => {
    EventServices.getEventById(index).then((res: any) => {
      if (res.data.status == 1) {
        setEvent(res.data.data);
        console.log(res.data.data);
        return;
      } else {
        toast.error(res.data.message);
      }
    });
  }, []);

  // handle dialog
  // handle delete event
  const [openDelete, setOpenDelete] = React.useState(false);

  const handleClickOpenDelete = () => {
    setOpenDelete(true);
  };

  const handleClickCloseDelete = () => {
    setOpenDelete(false);
  };

  // handle place event
  const [openPlace, setOpenPlace] = React.useState(false);

  const handleClickOpenPlace = () => {
    setOpenPlace(true);
  };

  const handleClickClosePlace = () => {
    setOpenPlace(false);
  };

  //delete function
  const deleteEvent = () => {
    EventServices.deleteEvent(index).then((res: any) => {
      if (res.data.status == 1) {
        toast.success("Successfully Deleted");
        handleClickCloseDelete();
        navigate(RouteName.MyEvents.replace(":userId", user.userId.toString()));
      } else {
        toast.error(res.data.message);
      }
    });
  };

  //place function
  const placeEvent = () => {
    EventServices.placeEvent(index).then((res: any) => {
      if (res.data.status == 1) {
        toast.success("Successfully Placed");
        handleClickClosePlace();
        window.location.reload();
      } else {
        toast.error(res.data.message);
      }
    });
  };

  const Event = Events[index % Events.length];
  return (
    <div className="w-full pt-24">
      <div className="flex items-center w-full px-5">
        {/* title and date */}
        {/* event details */}
        {event ? (
          <div className="w-9/12 mb-5">
            <div className="w-full ml-8">
              <h2 className="card-title text-[#ffa537] text-3xl mb-3">
                {event.eventName}
              </h2>
              <div className="text-[#000] flex justify-between text-lg w-10/12">
                <p className="flex items-center">
                  <AiOutlineCalendar className="mr-1 text-[#ffa537]" />
                  Date : {event.eventDate}
                </p>
                <p className="flex items-center">
                  <AiOutlineClockCircle className="mr-1 text-[#ffa537]" />
                  Time : {event.eventTime}
                </p>

                <p className="flex items-center">
                  {event.placed ? (
                    <DoneAllIcon className="mr-1 text-[#ffa537]" />
                  ) : (
                    <RemoveDoneIcon className="mr-1 text-[#ffa537]" />
                  )}
                  Status : {event.placed ? "Placed" : "Not Placed"}
                </p>
              </div>
            </div>
          </div>
        ) : (
          <></>
        )}

        {/* place btn */}
        <div className="flex justify-around w-3/12">
          {event && !event.placed && (
            <>
              <button
                type="button"
                onClick={handleClickOpenDelete}
                className="text-red-600 border-red-600 hover:bg-red-600 my-event-card-btn">
                <span className="mr-1">
                  <DeleteIcon />
                </span>
                Delete
              </button>

              {/* delete dialog */}
              <Dialog
                open={openDelete}
                onClose={handleClickCloseDelete}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description">
                <DialogTitle id="alert-dialog-title">
                  {/* {`Are you sure you want to delete ${eventname}?`} */}
                  Are you sure you want to delete {event.eventName} ?
                </DialogTitle>

                <DialogActions>
                  <Button onClick={handleClickCloseDelete}>Cancel</Button>
                  <button
                    className="text-red-600 border-red-600 hover:bg-red-600 my-event-card-btn"
                    onClick={deleteEvent}>
                    Delete
                  </button>
                </DialogActions>
              </Dialog>
            </>
          )}

          <button
            type="button"
            //disabled
            // onClick={handleDeleteEvent}
            onClick={
              event && (!event.placed ? handleClickOpenPlace : undefined)
            }
            className={
              event &&
              (event.placed
                ? "border-green-600 bg-green-600 my-event-card-btn !text-white"
                : "text-green-600 border-green-600 hover:bg-green-600 my-event-card-btn")
            }>
            <span className="mr-1">
              {event && (event.placed ? <DoneAllIcon /> : <CheckIcon />)}
            </span>
            {event && (event.placed ? "Placed" : "Place Event")}
          </button>

          {/* place event dialog */}
          <Dialog
            open={openPlace}
            onClose={handleClickClosePlace}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            className="p-5">
            <DialogTitle id="alert-dialog-title">
              {/* {`Are you sure you want to delete ${eventname}?`} */}
              Are you sure you want to place {event && event.eventName} ?
            </DialogTitle>

            <DialogActions>
              <Button onClick={handleClickClosePlace}>Cancel</Button>
              <button
                className="text-green-600 border-green-600 hover:bg-green-600 my-event-card-btn"
                onClick={placeEvent}>
                Place Event
              </button>
            </DialogActions>
          </Dialog>
        </div>
      </div>

      {/* packages that add to event */}
      <div className="grid w-11/12 grid-cols-3 gap-5 mx-auto">
        {packages.map((p: any, i: number) => (
          <Link
            to={{
              pathname: `${RouteName.ProviderDetails.replace(
                ":providerId",
                p.id.toString()
              )}`,
            }}
            className="w-10/12">
            <EventDetailCard
              providername={`Provider ${p.id}`}
              packagename={p.name}
              key={i}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default EventDetails;
