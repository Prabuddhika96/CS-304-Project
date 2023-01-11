import * as React from "react";
import dayjs, { Dayjs } from "dayjs";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";

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
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Stack spacing={3}>
        <DesktopDatePicker
          label="Date desktop"
          inputFormat="DD-MM-YYYY"
          value={dateval}
          onChange={handleChange}
          renderInput={(params) => <TextField {...params} />}
        />

        <TimePicker
          label="Time"
          value={timeval}
          onChange={handleChange}
          renderInput={(params) => <TextField {...params} />}
        />
      </Stack>
    </LocalizationProvider>
  );
}

export default DatePicker;
