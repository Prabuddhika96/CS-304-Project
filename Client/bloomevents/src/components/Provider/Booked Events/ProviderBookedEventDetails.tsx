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
import BookingService from "Services/Booking/BookingService";
import { Booking } from "types/Booking";

interface Data {
  ID: string;
  EventName: string;
  EventDate: string;
  EventTime: string;
  ClientName: string;
  BookedDate: string;
  BookedTime: string;
  Package: string;
  PaymentId: string;
}

function createData(
  ID: string,
  EventName: string,
  EventDate: string,
  EventTime: string,
  ClientName: string,
  BookedDate: string,
  BookedTime: string,
  Package: string,
  PaymentId: string
): Data {
  return {
    ID,
    EventName,
    EventDate,
    EventTime,
    ClientName,
    BookedDate,
    BookedTime,
    Package,
    PaymentId,
  };
}

function ProviderBookedEventDetails({ addToEvent, columns }: any) {
  const [event, setEvent] = useState<Event>();
  const [user, setUser] = useState<User1>();
  const [packge, setPackge] = useState<Package>();
  const [booking, setBooking] = useState<Booking>();

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

  useEffect(() => {
    BookingService.getBookingDetailsByEventId(addToEvent.eventId).then(
      (res: any) => {
        if (res.data.status === 1) {
          setBooking(res.data.data);
        } else {
          //toast.error(res.data.message);
        }
      }
    );
  }, [addToEvent]);

  let row: any = null;
  if (event && packge && user && booking) {
    row = createData(
      addToEvent.addToEventId,
      event.eventName,
      event.eventDate,
      event.eventTime,
      user.firstName,
      booking.bookingDate,
      booking.bookingTime,
      packge.packageName,
      ""
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

export default ProviderBookedEventDetails;
