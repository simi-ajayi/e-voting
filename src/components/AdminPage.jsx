import { useState } from 'react';
import { Link } from 'react-router-dom';
import AdminForm from './AdminForm';
import axios from 'axios';
import backgroundImage from '../assets/thumb.jpg';

const AdminPage = ({ events, setEvents }) => {
    const [selectedEvent, setSelectedEvent] = useState(null);
    

    const handleCreateEvent = async (eventData) => {
        try {
          // Make a POST request to your backend API to create a new event
          const response = await axios.post('/api/events', eventData);
          const newEvent = response.data; // Assuming the backend API returns the newly created event
      
          // Update the events array using the setEvents function from the parent component
          setEvents([...events, newEvent]);
        } catch (error) {
          console.error('Error creating event:', error);
          alert('Failed to create event. Please try again.');
        }
      };

  const handleUpdateEvent = async (updatedEventData) => {
    try {
      setEvents(events.map((event) =>
        event.id === updatedEventData.id ? updatedEventData : event
      ));
      setSelectedEvent(null);
    } catch (error) {
      console.error('Error updating event:', error);
      alert('Failed to update event. Please try again.');
    }
  };


  const handleDeleteEvent = async (eventId) => {
    try {
      // Make a DELETE request to your backend API to delete the event
      await axios.delete(`/api/events/${eventId}`);
      // Remove the deleted event from the events state
      setEvents(events.filter((event) => event.id !== eventId));
    } catch (error) {
      console.error('Error deleting event:', error);
      alert('Failed to delete event. Please try again.');
    }
  };

  return (
    <div className='font-[inter] relative min-h-screen'
              
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'contain',
       
      }}
            >
      <div className="bg-gray-900 bg-opacity-50 py-28 px-4 md:px-0">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 text-white">Admin Page</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="md:col-span-2">
              {selectedEvent ? (
                <AdminForm event={selectedEvent} onSubmit={handleUpdateEvent} />
              ) : (
                <AdminForm onSubmit={handleCreateEvent} />
              )}
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-4 text-white">Events</h2>
              <ul>
                {events.length > 0 ? (
                  events.map((event) => (
                    <li key={event.id} className="bg-white shadow-3xl w-full rounded-[35px] opacity-90 p-4 mb-4">
                      <div className="flex justify-between items-center">
                        <div>
                          <h3 className="text-lg font-semibold">{event.name}</h3>
                          {/* <p className="text-gray-700">{event.description}</p> */}
                        </div>
                        <div>
                          {/* <button
                            className="bg-gray-500 hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded-lg mr-2"
                            onClick={() => setSelectedEvent(event)}
                          >
                            Edit
                          </button> */}
                          <button
                            className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-lg"
                            onClick={() => handleDeleteEvent(event.id)}
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                    </li>
                  ))
                ) : (
                  <p className="text-gray-500">No events found.</p>
                )}
              </ul>
            </div>
          </div>
          <div className="mt-8 text-center">
            <Link to="/" className="bg-gray-500 hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded-lg">
             SIGN OUT
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;