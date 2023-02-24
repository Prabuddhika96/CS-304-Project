import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { useState } from "react";
import { toast } from "react-toastify";
import CategoryService from "Services/Category/CategoryService";
import { Category } from "types/Category";

const top100Films = [
  { label: "The Shawshank Redemption", year: 1994 },
  { label: "The Godfather", year: 1972 },
  { label: "The Godfather: Part II", year: 1974 },
  { label: "The Dark Knight", year: 2008 },
  { label: "12 Angry Men", year: 1957 },
  { label: "Schindler's List", year: 1993 },
  { label: "Pulp Fiction", year: 1994 },
  {
    label: "The Lord of the Rings: The Return of the King",
    year: 2003,
  },
  { label: "The Good, the Bad and the Ugly", year: 1966 },
  { label: "Fight Club", year: 1999 },
  {
    label: "The Lord of the Rings: The Fellowship of the Ring",
    year: 2001,
  },
  {
    label: "Star Wars: Episode V - The Empire Strikes Back",
    year: 1980,
  },
  { label: "Forrest Gump", year: 1994 },
  { label: "Inception", year: 2010 },
  {
    label: "The Lord of the Rings: The Two Towers",
    year: 2002,
  },
  { label: "One Flew Over the Cuckoo's Nest", year: 1975 },
  { label: "Goodfellas", year: 1990 },
  { label: "The Matrix", year: 1999 },
  { label: "Seven Samurai", year: 1954 },
  {
    label: "Star Wars: Episode IV - A New Hope",
    year: 1977,
  },
  { label: "City of God", year: 2002 },
  { label: "Se7en", year: 1995 },
  { label: "The Silence of the Lambs", year: 1991 },
  { label: "It's a Wonderful Life", year: 1946 },
  { label: "Life Is Beautiful", year: 1997 },
  { label: "The Usual Suspects", year: 1995 },
  { label: "Léon: The Professional", year: 1994 },
  { label: "Spirited Away", year: 2001 },
  { label: "Saving Private Ryan", year: 1998 },
];

function AutoComplete(array: any) {
  const [categories, setCategories] = useState<Array<Category>>();

  React.useEffect(() => {
    CategoryService.getAllCategories().then((res: any) => {
      if (res.data.status == 1) {
        setCategories(res.data.data);
        console.log(res.data);
        return;
      } else {
        toast.error(res.data.message);
      }
    });
  }, []);

  console.log(categories);

  return (
    <Autocomplete
      className="bg-[#fff]"
      disablePortal
      id="combo-box-demo"
      options={top100Films}
      //getOptionLabel={(categoryName): any => categories.categoryName}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Categories" />}
      //options={[]}
    />
  );
}

export default AutoComplete;
