import React from "react";
import { Events } from "docs/Event";

function MyEventCard() {
  return (
    <div className="shadow-xl card card-side bg-base-100">
      <figure>
        <img src="https://placeimg.com/200/280/arch" alt="Movie" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">New movie is released!</h2>
        <p>Click the button to watch on Jetflix app.</p>
        <div className="justify-end card-actions">
          <button className="btn btn-primary">Watch</button>
        </div>
      </div>
    </div>
  );
}

export default MyEventCard;
