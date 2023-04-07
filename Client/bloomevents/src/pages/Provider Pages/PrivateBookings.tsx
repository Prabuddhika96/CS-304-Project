import {
  Paper,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TablePagination,
} from "@mui/material";
import PrivateBookingService from "Services/Private Bookings/PrivateBookingService";
import AddPrivateBooking from "components/Provider/Private Bookings/AddPrivateBooking";
import PrivateBookingDetails from "components/Provider/Private Bookings/PrivateBookingDetails";
import React, { useEffect, useState } from "react";
import { PrivateBooking } from "types/PrivateBooking";

interface Column {
  id: "ID" | "EventName" | "EventDate" | "EventTime";
  label: string;
  minWidth?: number;
  align?: "center";
  format?: (value: number) => string;
}

const columns: readonly Column[] = [
  { id: "ID", label: "ID", minWidth: 80 },
  { id: "EventName", label: "Event Name", minWidth: 100 },
  {
    id: "EventDate",
    label: "Event Date",
    minWidth: 100,
    align: "center",
    format: (value: number) => value.toLocaleString("en-US"),
  },
  {
    id: "EventTime",
    label: "Event Time",
    minWidth: 100,
    align: "center",
    format: (value: number) => value.toLocaleString("en-US"),
  },
];

function PrivateBookings({ providerId }: any) {
  const [bookings, setBookings] = useState<Array<PrivateBooking>>();

  useEffect(() => {
    PrivateBookingService.getPrivateBookingsByProviderId(providerId).then(
      (res: any) => {
        if (res.data.status === 1) {
          setBookings(res.data.data);
          console.log(res.data.data);
          return;
        } else {
          //toast.error(res.data.message);
        }
      }
    );
  }, [providerId]);

  // table
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <div>
      {bookings ? (
        <>
          <Paper sx={{ width: "100%", overflow: "hidden" }}>
            <TableContainer sx={{ maxHeight: 440 }}>
              <Table stickyHeader aria-label="sticky table">
                <TableHead sx={{ backgroundColor: "red" }}>
                  <AddPrivateBooking providerId={providerId} />

                  <TableRow>
                    {columns.map((column) => (
                      <TableCell
                        key={column.id}
                        align={column.align}
                        style={{ minWidth: column.minWidth }}>
                        {column.label}
                      </TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {bookings
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((booking) => {
                      return (
                        <>
                          <PrivateBookingDetails
                            booking={booking}
                            columns={columns}
                            providerId={providerId}
                          />
                        </>
                      );
                    })}
                </TableBody>
              </Table>
            </TableContainer>
            <TablePagination
              rowsPerPageOptions={[10, 25, 100]}
              component="div"
              count={columns.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </Paper>
        </>
      ) : (
        <>
          <h1>No Bookings</h1>
        </>
      )}
    </div>
  );
}

export default PrivateBookings;
