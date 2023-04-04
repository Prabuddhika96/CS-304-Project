import { Button, TableCell, TableRow } from "@mui/material";
import EventServices from "Services/Event/EventServices";
import PackageServices from "Services/Packages/PackageService";
import UserServices from "Services/User/UserServices";
import React, { useEffect, useState } from "react";
import { Event } from "types/Event";
import { Package } from "types/Packages";
import { User1 } from "types/User";
import { MdOutlineClose, MdOutlineDone } from "react-icons/md";
import CircularProgressItem from "components/CircularProgress/CircularProgressItem";
import AddToEventService from "Services/AddToEvent/AddToEventService";
import { toast } from "react-toastify";

interface Data {
  ID: string;
  EventName: string;
  EventDate: string;
  EventTime: string;
  ClientName: string;
  PlacedDate: string;
  PlacedTime: string;
  Package: string;
  Action: string;
}

function createData(
  ID: string,
  EventName: string,
  EventDate: string,
  EventTime: string,
  ClientName: string,
  PlacedDate: string,
  PlacedTime: string,
  Package: string,
  Action: string
): Data {
  return {
    ID,
    EventName,
    EventDate,
    EventTime,
    ClientName,
    PlacedDate,
    PlacedTime,
    Package,
    Action,
  };
}

function ProviderPlacedEventDetail({ addToEvent, columns, setActionId }: any) {
  // console.log(columns);
  // console.log(addToEvent);
  const [event, setEvent] = useState<Event>();
  const [user, setUser] = useState<User1>();
  const [packge, setPackge] = useState<Package>();

  useEffect(() => {
    EventServices.getEventById(addToEvent.eventId).then((res: any) => {
      if (res.data.status === 1) {
        setEvent(res.data.data);
      } else {
        //toast.error(res.data.message);
      }
    });
  }, [addToEvent]);

  useEffect(() => {
    UserServices.getUserByUserId(event?.userId).then((res: any) => {
      if (res.data.status === 1) {
        setUser(res.data.data);
      } else {
        //toast.error(res.data.message);
      }
    });
  }, [event]);

  useEffect(() => {
    PackageServices.getPackageByPackageId(addToEvent.packagesPackageId).then(
      (res: any) => {
        if (res.data.status === 1) {
          setPackge(res.data.data);
        } else {
          //toast.error(res.data.message);
        }
      }
    );
  }, [addToEvent]);

  let row: any = null;
  if (event && packge && user) {
    row = createData(
      addToEvent.addToEventId,
      event.eventName,
      event.eventDate,
      event.eventTime,
      user.firstName,
      event.placedDate,
      event.placedTime,
      packge.packageName,
      ""
    );
  }

  // backdrops
  const [backdropApprove, setBackdropApprove] = useState<boolean>(false);
  const [backdropDelete, setBackdropDelete] = useState<boolean>(false);

  // approve function
  const handleApprove = (e: any) => {
    setBackdropApprove(true);
    setTimeout(() => {
      AddToEventService.approvePackage(addToEvent.addToEventId).then(
        (res: any) => {
          if (res.data.status === 1) {
            setActionId(addToEvent.addToEventId);
            setBackdropApprove(false);
          } else {
            toast.error(res.data.message);
          }
        }
      );
    }, 1500);
  };

  // delete function
  const handleDelete = (e: any) => {
    setBackdropDelete(true);
    setTimeout(() => {
      AddToEventService.deletePackage(addToEvent.addToEventId).then(
        (res: any) => {
          if (res.data.status === 1) {
            setActionId(addToEvent.addToEventId);
            setBackdropDelete(false);
          } else {
            toast.error(res.data.message);
          }
        }
      );
    }, 1500);
  };

  return (
    <>
      {row && (
        <>
          <TableRow
            hover
            role="checkbox"
            tabIndex={-1}
            key={addToEvent.addToEventId}>
            {columns.map((column: any) => {
              const value = row[column.id];
              return (
                <TableCell key={column.id} align={column.align}>
                  {column.id === "Action" ? (
                    <>
                      <div className="flex justify-between">
                        <Button
                          variant="contained"
                          color="success"
                          disabled={backdropDelete}
                          onClick={handleApprove}>
                          {backdropApprove ? (
                            <CircularProgressItem />
                          ) : (
                            <MdOutlineDone />
                          )}
                        </Button>
                        <Button
                          variant="contained"
                          color="error"
                          disabled={backdropApprove}
                          onClick={handleDelete}>
                          {backdropDelete ? (
                            <CircularProgressItem />
                          ) : (
                            <MdOutlineClose />
                          )}
                        </Button>
                      </div>
                    </>
                  ) : (
                    <>
                      {column.format && typeof value === "number"
                        ? column.format(value)
                        : value}
                    </>
                  )}
                </TableCell>
              );
            })}
          </TableRow>
        </>
      )}
    </>
  );
}

export default ProviderPlacedEventDetail;
