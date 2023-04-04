import EventDetailCard from "components/Cards/EventDetailCard";
import { RouteName } from "constant/routeName";
import {
  AiOutlineCalendar,
  AiOutlineClockCircle,
  AiOutlineDollarCircle,
} from "react-icons/ai";
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
import AddToEventService from "Services/AddToEvent/AddToEventService";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import dayjs from "dayjs";
import DialogBox from "components/Dialog Boxes/DialogBox";
import PackageServices from "Services/Packages/PackageService";

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
  }, []);

  // get event details
  const [event, setEvent] = React.useState<Event>();
  React.useEffect(() => {
    EventServices.getEventById(index).then((res: any) => {
      if (res.data.status === 1) {
        setEvent(res.data.data);
        return;
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
      if (res.data.status === 1) {
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
    const placedDate = dayjs();
    const placedEvent = {
      eventId: Number(index),
      placedDate: placedDate.format("DD-MMM-YYYY").toString(),
      placedTime: placedDate.format("hh:mm A").toString(),
    };
    EventServices.placeEvent(placedEvent).then((res: any) => {
      if (res.data.status === 1) {
        toast.success("Successfully Placed");
        handleClickClosePlace();
        window.location.reload();
      } else {
        toast.error(res.data.message);
      }
    });
  };

  // get packages
  const [packages, setPackages] = React.useState<Array<Event>>();
  React.useEffect(() => {
    AddToEventService.getPackagesByEventId(index).then((res: any) => {
      if (res.data.status === 1) {
        setPackages(res.data.data);
        return;
      } else {
        toast.error(res.data.message);
      }
    });
  }, []);

  // get total price
  const [totalPrice, setTotalPrice] = React.useState(5);
  React.useEffect(() => {
    PackageServices.getTotalPriceByEventId(index).then((res: any) => {
      if (res.data.status === 1) {
        setTotalPrice(res.data.data);
        return;
      }
    });
  }, []);

  // get approved package count
  const [approvedCount, setApprovedCount] = React.useState<number>();
  React.useEffect(() => {
    AddToEventService.getApprovedPackageCountByEventId(eventId).then(
      (res: any) => {
        if (res.data.status === 1) {
          setApprovedCount(res.data.data);
          return;
        }
      }
    );
  }, []);

  // handle list after deleting package
  const [deleteId, setDeleteId] = React.useState<any>();

  useEffect(() => {
    const filteredData = packages?.filter(
      (emp: any) => emp.addToEventId !== deleteId
    );
    setPackages(filteredData);
  }, [deleteId]);

  return (
    <div className="w-full pt-24">
      <div className="flex w-full px-5">
        {/* title and date */}
        {/* event details */}
        {event ? (
          <div className="w-8/12 mb-5">
            <div className="w-full ml-8">
              <h2 className="card-title text-[#ffa537] text-3xl mb-3">
                {event.eventName}
              </h2>
              <div className="text-[#000] flex justify-between text-lg w-full pr-6">
                <p className="flex items-center">
                  <AiOutlineCalendar className="mr-1 text-[#ffa537]" />
                  Event Date : {event.eventDate}
                </p>
                <p className="flex items-center">
                  <AiOutlineClockCircle className="mr-1 text-[#ffa537]" />
                  Event Time : {event.eventTime}
                </p>

                <p className="flex items-center">
                  {event.placed ? (
                    <DoneAllIcon className="mr-1 text-[#ffa537]" />
                  ) : (
                    <RemoveDoneIcon className="mr-1 text-[#ffa537]" />
                  )}
                  Status : {event.placed ? "Placed" : "Not Placed"}
                </p>

                <p className="flex items-center">
                  <AiOutlineDollarCircle className="mr-1 text-[#ffa537]" />
                  Total Price : Rs {totalPrice}
                </p>
              </div>
            </div>
          </div>
        ) : (
          <></>
        )}

        {/* btns */}
        <div className="flex items-center justify-around w-4/12">
          {event && !event.placed ? (
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
              <DialogBox
                open={openDelete}
                close={handleClickCloseDelete}
                actionFunc={deleteEvent}
                actionBtnName={"Delete"}
                title={`Are you sure you want to delete ${event.eventName} ?`}
                color={"red-600"}
              />
            </>
          ) : (
            <>
              <div className="block">
                <p className="flex items-center">
                  <AiOutlineCalendar className="mr-1 text-[#ffa537]" />
                  Placed Date : {event?.placedDate}
                </p>
                <p className="flex items-center">
                  <AiOutlineClockCircle className="mr-1 text-[#ffa537]" />
                  Placed Time : {event?.placedTime}
                </p>
              </div>
            </>
          )}

          {/* place event */}
          {event?.placed ? (
            <>
              {packages?.length !== approvedCount ? (
                <button
                  type="button"
                  disabled
                  className={
                    "border-green-600 bg-green-600 my-event-card-btn !text-white"
                  }>
                  <span className="mr-1">
                    <DoneAllIcon />
                  </span>
                  Placed
                </button>
              ) : (
                <>
                  {packages?.length !== 0 ? (
                    <button
                      type="button"
                      className={
                        "border-[#426eff] hover:bg-[#164dff] bg-[#426eff] my-event-card-btn !text-white"
                      }>
                      Make Payment
                    </button>
                  ) : (
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
                    </>
                  )}
                </>
              )}
            </>
          ) : (
            <>
              {dayjs(
                `${event?.eventDate} ${event?.eventTime}`,
                "DD-MMM-YYYY hh:mm A"
              ).isBefore(dayjs()) ? (
                <></>
              ) : (
                <>
                  <button
                    type="button"
                    onClick={handleClickOpenPlace}
                    className={
                      "text-green-600 border-green-600 hover:bg-green-600 my-event-card-btn"
                    }>
                    <span className="mr-1">
                      <CheckIcon />
                    </span>
                    Place Event
                  </button>
                </>
              )}
            </>
          )}

          {/* place event dialog */}
          <DialogBox
            open={openPlace}
            close={handleClickClosePlace}
            actionFunc={placeEvent}
            actionBtnName={"Place Event"}
            title={`Are you sure you want to place ${event?.eventName} ?`}
            color={"green-600"}
          />

          {/* add packages btn */}
          {!event?.placed && (
            <Link to={RouteName.Services}>
              <button
                type="button"
                onClick={handleClickOpenDelete}
                className="text-purple-600 border-purple-600 hover:bg-purple-600 my-event-card-btn">
                <span className="mr-1">
                  <AddCircleOutlineIcon />
                </span>
                Add Packages
              </button>
            </Link>
          )}
        </div>
      </div>

      {packages?.length == 0 ? (
        <p className="my-5 text-center">No Packages</p>
      ) : (
        <></>
      )}

      {/* packages that add to event */}
      <div className="grid w-11/12 grid-cols-4 gap-5 mx-auto">
        {packages ? (
          <>
            {packages.map((p: any, i: number) => (
              <EventDetailCard
                addToEventId={p.addToEventId}
                packageId={p.packagesPackageId}
                placed={p.placed}
                func={setDeleteId}
                key={i}
                approved={p.approved}
              />
            ))}
          </>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

export default EventDetails;
