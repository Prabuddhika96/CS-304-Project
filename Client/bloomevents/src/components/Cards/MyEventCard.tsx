import { AiOutlineCalendar, AiOutlineClockCircle } from "react-icons/ai";
import CheckIcon from "@mui/icons-material/Check";
import DeleteIcon from "@mui/icons-material/Delete";
import { RouteName } from "constant/routeName";
import { Link } from "react-router-dom";
import React from "react";
import AddToEventService from "Services/AddToEvent/AddToEventService";
import { FiPackage } from "react-icons/fi";
import { MdOutlineDone } from "react-icons/md";

import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import EventServices from "Services/Event/EventServices";
import { toast } from "react-toastify";

function MyEventCard({ eventname, date, time, id, func }: any) {
  const handleDeleteEvent = () => {
    console.log(`Event ${id}  deleted.`);
  };

  const [openDelete, setOpenDelete] = React.useState(false);

  const handleClickOpenDelete = () => {
    setOpenDelete(true);
  };

  const handleClickCloseDelete = () => {
    setOpenDelete(false);
  };

  const [packageCount, setPackageCount] = React.useState<number>(0);

  React.useEffect(() => {
    AddToEventService.getpackagecountbyeventid(id).then((res: any) => {
      if (res.data.status == 1) {
        setPackageCount(res.data.data);
        return;
      }
    });
  }, []);

  //delete function
  const deleteEvent = () => {
    EventServices.deleteEvent(id).then((res: any) => {
      if (res.data.status == 1) {
        func(id);
        toast.success("Successfully Deleted", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        handleClickCloseDelete();
      } else {
        toast.error(res.data.message);
      }
    });
  };
  return (
    <div>
      <div className="w-full">
        <div className=" w-full p-6 my-2 bg-[#fff8ef] rounded-lg shadow-lg flex justify-around">
          <div className="w-8/12">
            <Link
              to={{
                pathname: `${RouteName.EventDetails.replace(
                  ":id",
                  id.toString()
                )}`,
              }}>
              <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 ">
                {eventname}
              </h5>

              <div className="flex justify-between w-11/12">
                <p className="flex items-center mb-2 text-base text-neutral-600 ">
                  <AiOutlineCalendar className="mr-1 text-[#ffa537]" />
                  Date : {date}
                </p>

                <p className="flex items-center mb-2 text-base text-neutral-600 ">
                  <AiOutlineClockCircle className="mr-1 text-[#ffa537]" />
                  Time : {time}
                </p>

                <p className="flex items-center mb-2 text-base text-neutral-600 ">
                  <FiPackage className="mr-1 text-[#ffa537]" />
                  Packages : {packageCount}
                </p>
              </div>
            </Link>
          </div>

          <div className="flex items-center justify-around w-4/12 mt-2">
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
                <p>Are you sure you want to delete {eventname} ?</p>
              </DialogTitle>

              <DialogActions>
                <Button onClick={handleClickCloseDelete} color="error">
                  Disagree
                </Button>
                <Button onClick={deleteEvent} autoFocus>
                  Agree
                </Button>
              </DialogActions>
            </Dialog>

            <button
              type="button"
              onClick={handleDeleteEvent}
              className="text-green-600 border-green-600 hover:bg-green-600 my-event-card-btn">
              <span className="mr-1">
                <CheckIcon />
              </span>
              Place Event
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyEventCard;
