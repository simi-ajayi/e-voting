// Event.js
import  { useState } from 'react';

const Event = ({ children }) => { // Receive children as props
  const [events, setEvents] = useState([
    {
      id: 1,
      name: 'AUSA DINNER NIGHT',
      description: 'Join us for the annual AUSA dinner night, filled with delicious food and entertainment.',
      link: '/home',
    },
    {
      id: 2,
      name: 'AUSA SUMMER PICNIC',
      description: 'Celebrate the summer season with our community picnic. Enjoy games, food, and fun under the sun!',
      link: '/account',
    },
    // ... add more events here
  ]);

  // Render children with events and setEvents as props
  return children({ events, setEvents });
};

export default Event;
