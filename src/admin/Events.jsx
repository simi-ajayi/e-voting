// Event.js
import  { useState } from 'react';

const Event = ({ children }) => { // Receive children as props
  const [events, setEvents] = useState([
    {
      
    },
    // ... add more events here
  ]);

  // Render children with events and setEvents as props
  return children({ events, setEvents });
};

export default Event;
