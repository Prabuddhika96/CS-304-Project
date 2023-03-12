import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import { useEffect, useState } from "react";

function ControlledRatings() {
  const [value, setValue] = useState<number | null>(2);

  useEffect(() => {
    console.log(value);
  }, [value]);

  return (
    <Stack spacing={1}>
      <Rating
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />
    </Stack>
  );
}

export default ControlledRatings;
