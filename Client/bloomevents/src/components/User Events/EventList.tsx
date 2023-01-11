import React from 'react'
import {Events} from 'docs/Event';
import MyEventCard from 'components/Cards/MyEventCard';

function EventList() {
    console.log(Events);
  return (
    <div>
        <MyEventCard/>
    </div>
  )
}

export default EventList