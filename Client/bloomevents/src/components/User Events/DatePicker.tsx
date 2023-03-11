import dayjs, { Dayjs } from "dayjs";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import React from "react";
import { DesktopTimePicker } from "@mui/x-date-pickers/DesktopTimePicker";
import {
  MobileDatePicker,
  MobileTimePicker,
  StaticTimePicker,
} from "@mui/x-date-pickers";

function DatePicker({ datefunc, dateval, timefunc, timeval }: any) {
  // const [value, setValue] = React.useState<Dayjs | null>(
  //   dayjs("2014-08-18T21:11:54")
  // );

  const handleChange = (newValue: Dayjs | null) => {
    // alert(dayjs(newValue));
    datefunc(newValue);
    timefunc(newValue);
    console.log(dayjs(newValue).format("hh:mm A"));
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} color="warning">
      <Stack spacing={3}>
        <MobileDatePicker
          label="Event Date"
          value={dateval}
          onChange={handleChange}
        />

        <MobileTimePicker
          label="Time"
          value={timeval}
          onChange={handleChange}
        />
      </Stack>
    </LocalizationProvider>
  );
}

export default DatePicker;
