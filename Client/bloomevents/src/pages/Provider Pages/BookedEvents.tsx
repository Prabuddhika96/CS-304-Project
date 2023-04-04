import AddToEventService from "Services/AddToEvent/AddToEventService";
import { useEffect, useState } from "react";
import { AddToEvent } from "types/AddToEvent";

import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import ProviderBookedEventDetails from "components/Provider/Booked Events/ProviderBookedEventDetails";

interface Column {
  id:
    | "ID"
    | "EventName"
    | "EventDate"
    | "EventTime"
    | "ClientName"
    | "BookedDate"
    | "BookedTime"
    | "Package"
    | "PaymentId";
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
  {
    id: "ClientName",
    label: "Client Name",
    minWidth: 100,
    align: "center",
    format: (value: number) => value.toFixed(2),
  },
  {
    id: "BookedDate",
    label: "Booked Date",
    minWidth: 100,
    align: "center",
    format: (value: number) => value.toFixed(2),
  },
  {
    id: "BookedTime",
    label: "Booked Time",
    minWidth: 100,
    align: "center",
    format: (value: number) => value.toFixed(2),
  },
  {
    id: "Package",
    label: "Package",
    minWidth: 100,
    align: "center",
    format: (value: number) => value.toFixed(2),
  },
  {
    id: "PaymentId",
    label: "Payment ID",
    minWidth: 100,
    align: "center",
    format: (value: number) => value.toFixed(2),
  },
];

function BookedEvents({ providerId }: any) {
  const [events, setEvents] = useState<Array<AddToEvent>>();

  useEffect(() => {
    AddToEventService.getBookedPackagesByProviderId(providerId).then(
      (res: any) => {
        if (res.data.status === 1) {
          setEvents(res.data.data);
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
      {events ? (
        <>
          <Paper sx={{ width: "100%", overflow: "hidden" }}>
            <TableContainer sx={{ maxHeight: 440 }}>
              <Table stickyHeader aria-label="sticky table">
                <TableHead sx={{ backgroundColor: "red" }}>
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
                  {events
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((event) => {
                      return (
                        <>
                          <ProviderBookedEventDetails
                            addToEvent={event}
                            columns={columns}
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
          <h1>No Events</h1>
        </>
      )}
    </div>
  );
}

export default BookedEvents;
