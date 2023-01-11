import AddEventForm from "components/User Events/AddEventForm";
import EventList from "components/User Events/EventList";

 
function MyEvents() {
  
  return (
    <div className='flex flex-wrap justify-around w-11/12'>
      <div className="w-8/12">
        <EventList/>
      </div>

      <div className={`fixed top-0 w-4/12 right-20 `}>
        <AddEventForm/>
      </div>
    </div>
  )
}

export default MyEvents