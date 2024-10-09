import { useState, useEffect } from 'react';
import axios from 'axios';

const Event = ({ children }) => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get('https://events.thecribbers.ng/api/users/events');
        if (response.data.status && response.data.statusCode === 200) {
          setEvents(response.data.data);
        } else {
          console.error('Failed to fetch events:', response.data.message);
        }
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };

    fetchEvents();
  }, []);

  return children({ events, setEvents });
};

export default Event;