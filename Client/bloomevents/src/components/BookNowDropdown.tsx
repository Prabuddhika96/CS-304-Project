import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { ButtonProps } from 'types/ButtonProps';

function BookNowDropdown({val,array, func}:any) {
  return (
    <FormControl variant="standard" fullWidth sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-standard-label">Event</InputLabel>
        <Select
        labelId="demo-simple-select-standard-label"
        id="demo-simple-select-standard"
        value={val}
        onChange={(e) => func(e.target.value)}
        label="Event"
        >
        <MenuItem value="" disabled>
            <em>None</em>
        </MenuItem>

        {array.map((e:any,i:number)=>(
            <MenuItem value={e.id.toString()} key={i+1}>{e.name}</MenuItem>
        ))}

        {/* <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem> */}
        </Select>
    </FormControl>
  )
}

export default BookNowDropdown