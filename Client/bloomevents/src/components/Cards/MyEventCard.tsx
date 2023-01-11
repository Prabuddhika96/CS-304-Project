import dayjs from "dayjs";
import { AiOutlineCalendar, AiOutlineClockCircle } from "react-icons/ai";

import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import DeleteIcon from "@mui/icons-material/Delete";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
import DeleteTwoToneIcon from "@mui/icons-material/DeleteTwoTone";
import DeleteSharpIcon from "@mui/icons-material/DeleteSharp";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import DeleteForeverRoundedIcon from "@mui/icons-material/DeleteForeverRounded";
import DeleteForeverTwoToneIcon from "@mui/icons-material/DeleteForeverTwoTone";
import DeleteForeverSharpIcon from "@mui/icons-material/DeleteForeverSharp";
import ThreeDRotationIcon from "@mui/icons-material/ThreeDRotation";
import FourKIcon from "@mui/icons-material/FourK";
import ThreeSixtyIcon from "@mui/icons-material/ThreeSixty";

function MyEventCard({ eventname, date, time }: any) {
  return (
    <div className="shadow-xl card card-side bg-[#fff] my-3 flex justify-around cursor-pointer hover:bg-[#f5f5f5]">
      <div className="w-9/12 card-body">
        <h2 className="card-title text-[#ffa537]">{eventname}</h2>
        <div className="text-[#000] flex">
          <p className="flex items-center">
            <AiOutlineCalendar className="mr-1 text-[#ffa537]" />
            Date : {date}
          </p>
          <p className="flex items-center">
            <AiOutlineClockCircle className="mr-1 text-[#ffa537]" />
            Time : {time}
          </p>
        </div>
      </div>

      <div className="items-center w-3/12 card-actions">
        <h1 className="p-2 mx-auto text-red-600 rounded-full hover:bg-red-200">
          <DeleteIcon />
        </h1>
      </div>
    </div>
  );
}

export default MyEventCard;
