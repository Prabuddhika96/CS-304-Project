import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

function BookNowDropdown({val,array, func, title}:any) {
  return (
    <FormControl variant="standard" fullWidth sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-standard-label">{title}</InputLabel>
        <Select
        labelId="demo-simple-select-standard-label"
        id="demo-simple-select-standard"
        value={val}
        onChange={(e) => func(e.target.value)}
        label={title}
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