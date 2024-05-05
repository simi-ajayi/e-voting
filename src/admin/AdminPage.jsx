import { useState } from 'react';
import AdminForm from './AdminForm';
import backgroundImage from '../assets/thumb.jpg';
import { useNavigate } from 'react-router-dom';

const AdminPage = () => {
  const navigate = useNavigate();
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [deleteConfirmationModal, setDeleteConfirmationModal] = useState(null);

  const handleCreateEvent = (eventData) => {
    const newEvent = {
      ...eventData,
      id: Date.now(),
    };
    setEvents([...events, newEvent]);
  };

  const handleUpdateEvent = (updatedEventData) => {
    const updatedEvents = events.map((event) =>
      event.id === selectedEvent.id ? { ...event, ...updatedEventData } : event
    );
    setEvents(updatedEvents);
    setSelectedEvent(null);
  };

  const handleDeleteConfirmation = (eventId) => {
    setDeleteConfirmationModal(eventId);
  };

  const handleDeleteCancel = () => {
    setDeleteConfirmationModal(null);
  };

  const handleDeleteEvent = () => {
    const updatedEvents = events.filter((event) => event.id !== deleteConfirmationModal);
    setEvents(updatedEvents);
    setDeleteConfirmationModal(null);
  };

  const handleSignOut = () => {
    // Perform signout actions here, such as clearing user data or logging out
    // For now, let's assume signing out just redirects to the homepage
    window.location.href = '/';
  };

  const handleViewEvent = (eventId) => {
    navigate(`/home/${eventId}`);
  };

  return (
    <div className='font-[inter] relative min-h-screen' style={{backgroundImage: `url(${backgroundImage})`, backgroundSize: 'contain', backgroundPosition:'center'}}>
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
                {events && events.length > 0 ? (
                  events.map((event) => (
                    <li key={event.id} className="bg-white shadow-3xl md:w-[400px] w-full rounded-[35px] opacity-90 p-5 mb-4">
                      <div className="flex justify-between items-center">
                        <div>
                          <h3 className="text-lg font-semibold">{event.name}</h3>
                          <p className="text-gray-600">{event.description}</p>
                          <button
                    onClick={() => handleViewEvent(event.id)}
                    className="text-blue-500 hover:underline mt-4 block text-center"
                  >
                    View Event
                  </button>
                        </div>
                        <div>
                          <button
                            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg mr-2"
                            onClick={() => setSelectedEvent(event)}
                          >
                            Edit
                          </button>
                          <button
                            className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-lg"
                            onClick={() => handleDeleteConfirmation(event.id)}
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                    </li>
                  ))
                ) : (
                  <p className="text-white">No events found.</p>
                )}
              </ul>
            </div>
          </div>
          <div className="mt-8 text-center">
            <button onClick={handleSignOut} className="bg-gray-500 hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded-lg">
              SIGN OUT
            </button>
          </div>
        </div>
      </div>
      {deleteConfirmationModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 shadow-lg">
            <p className="mb-4">Are you sure you want to delete this event?</p>
            <div className="flex justify-end">
              <button
                className="bg-gray-500 hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded-lg mr-2"
                onClick={handleDeleteCancel}
              >
                Cancel
              </button>
              <button
                className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-lg"
                onClick={handleDeleteEvent}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminPage;