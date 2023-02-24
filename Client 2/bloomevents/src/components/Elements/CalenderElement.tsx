import { useState } from "react";
// import Calendar from 'react-calendar';

import "react-calendar/dist/Calendar.css";

function CalenderElement() {
  const [value, onChange] = useState(new Date());

  return (
    <div>
      {/* <Calendar onChange={onChange} className='!bg-[#ffe6c7] rounded-lg' value={value} /> */}
    </div>
  );
}

export default CalenderElement;
