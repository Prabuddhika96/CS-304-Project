import { Button, TableCell, TableRow } from "@mui/material";
import EventServices from "Services/Event/EventServices";
import PackageServices from "Services/Packages/PackageService";
import UserServices from "Services/User/UserServices";
import { useEffect, useState } from "react";
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
}

function createData(
  ID: string,
  EventName: string,
  EventDate: string,
  EventTime: string,
  ClientName: string,
  PlacedDate: string,
  PlacedTime: string,
  Package: string
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
  };
}

function ProviderApprovedEventDetail({ addToEvent, columns }: any) {
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
      packge.packageName
    );
  }

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
                  {column.format && typeof value === "number"
                    ? column.format(value)
                    : value}
                </TableCell>
              );
            })}
          </TableRow>
        </>
      )}
    </>
  );
}

export default ProviderApprovedEventDetail;
