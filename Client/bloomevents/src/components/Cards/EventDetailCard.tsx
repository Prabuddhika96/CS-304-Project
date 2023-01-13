import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { Button } from "@mui/material";

function EventDetailCard({ providername, packagename }: any) {
  const handleDeleteEvent = () => {
    alert(`${providername} - ${packagename} deleted.`);
  };
  return (
    <div>
      <div className="card w-96 glass">
        <figure>
          <img src="https://placeimg.com/400/225/arch" alt="car!" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-[#ffa537]">{providername}</h2>
          <p className="text-[#000]">{packagename}</p>
          <div className="justify-end mt-3 card-actions">
            <Button
              variant="outlined"
              color="error"
              onClick={handleDeleteEvent}>
              <DeleteIcon /> Delete
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventDetailCard;
