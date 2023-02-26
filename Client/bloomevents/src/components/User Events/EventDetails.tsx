import EventDetailCard from "components/Cards/EventDetailCard";
import { RouteName } from "constant/routeName";
import { Events } from "docs/Event";
import { packages } from "docs/packages";
import { AiOutlineCalendar, AiOutlineClockCircle } from "react-icons/ai";
import { Link, useParams } from "react-router-dom";
import CheckIcon from "@mui/icons-material/Check";
import DeleteIcon from "@mui/icons-material/Delete";

function EventDetails() {
  let { id } = useParams();
  const index = Number(id);

  const Event = Events[index - 1];
  return (
    <div className="w-full pt-24">
      <div className="flex w-full">
        {/* title and date */}
        <div className="w-9/12 mb-5">
          <div className="w-6/12 ml-8">
            <h2 className="card-title text-[#ffa537] text-3xl mb-3">
              {Event.name}
            </h2>
            <div className="text-[#000] flex justify-between text-lg w-10/12">
              <p className="flex items-center">
                <AiOutlineCalendar className="mr-1 text-[#ffa537]" />
                Date : {Event.date}
              </p>
              <p className="flex items-center">
                <AiOutlineClockCircle className="mr-1 text-[#ffa537]" />
                Time : {Event.time}
              </p>
            </div>
          </div>
        </div>

        {/* place btn */}
        <div className="flex justify-around w-3/12">
          <button type="button" className="my-event-card-btn !bg-green-600">
            <span className="mr-1">
              <CheckIcon />
            </span>
            Place Event
          </button>

          <button type="button" className="my-event-card-btn !bg-red-600">
            <span className="mr-1">
              <DeleteIcon />
            </span>
            Delete
          </button>
        </div>
      </div>

      {/* packages that add to event */}
      <div className="grid w-11/12 grid-cols-3 gap-5 mx-auto">
        {packages.map((p: any, i: number) => (
          <Link
            to={{
              pathname: `${RouteName.ProviderDetails.replace(
                ":providerId",
                p.id.toString()
              )}`,
            }}
            className="w-10/12">
            <EventDetailCard
              providername={`Provider ${p.id}`}
              packagename={p.name}
              key={i}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default EventDetails;
