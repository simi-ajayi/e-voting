import { createContext, useState } from 'react';
import PropTypes from 'prop-types'; // Import the prop-types library

export const EventDetailsContext = createContext();

export const EventDetailsProvider = ({ children }) => {
  const [eventDetails, setEventDetails] = useState(null);

  return (
    <EventDetailsContext.Provider value={{ eventDetails, setEventDetails }}>
      {children}
    </EventDetailsContext.Provider>
  );
};

// Define the PropTypes for the EventDetailsProvider component
EventDetailsProvider.propTypes = {
  children: PropTypes.node.isRequired, // Specify that the children prop is required and can be any renderable React node
};