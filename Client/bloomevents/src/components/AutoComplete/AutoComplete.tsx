import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { useState } from "react";
import { toast } from "react-toastify";
import CategoryService from "Services/Category/CategoryService";
import { Category } from "types/Category";

interface Option {
  value: string;
  label: string;
}

function AutoComplete({ array, label, selectedOption }: any) {
  const selectOption = (e: React.ChangeEvent<{}>, option: Option | null) => {
    selectedOption(option);
  };

  return (
    <Autocomplete
      className="bg-[#ffe6b7cc]"
      disablePortal
      onChange={selectOption}
      id="combo-box-demo"
      options={array}
      getOptionLabel={(option: Option) => option.label}
      sx={{ width: "100%" }}
      renderInput={(params) => <TextField {...params} label={label} />}
    />
  );
}

export default AutoComplete;
