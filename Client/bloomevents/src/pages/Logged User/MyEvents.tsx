import AddEventForm from "components/User Events/AddEventForm";
import EventList from "components/User Events/EventList";

function MyEvents() {
  return (
    <div className="flex justify-around w-full mx-auto">
      <div className="top-0 items-center w-8/12 px-8 pt-24 mx-auto">
        <EventList />
      </div>

      <div className="top-0 items-center w-4/12 px-8 mx-auto">
        <AddEventForm />
      </div>
    </div>
  );
}

export default MyEvents;
