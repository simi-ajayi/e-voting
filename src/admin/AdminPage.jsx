import { useState} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import AdminForm from './AdminForm';
import backgroundImage from '../assets/thumb.jpg';
import Event from './Events';

const AdminPage = () => {
  const navigate = useNavigate();
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [deleteConfirmationModal, setDeleteConfirmationModal] = useState(null);
  const [expandedEventId, setExpandedEventId] = useState(null);

  const handleCreateEvent = async (eventData) => {
    try {
      const response = await axios.post('https://events.thecribbers.ng/api/users/create-event', {
        title: eventData.title,
        description: eventData.description,
        startDate: eventData.startDate,
        endDate: eventData.endDate,
        organizer: eventData.organizers,
        eventType: eventData.eventType
      });
  
      if (response.status === 200 || response.status === 201) {
        const newEvent = response.data.data;
       ((prevEvents) => [...prevEvents, newEvent]);
        return newEvent.id; 
      } else {
        console.error('Failed to create event:', response.data);
        return null;
      }
    } catch (error) {
      console.error('Error creating event:', error);
      return null;
    }
  };
  
  // const handleUpdateEvent = (updatedEventData) => {
  //   setEvents((prevEvents) => 
  //     prevEvents.map((event) =>
  //       event.id === selectedEvent.id ? { ...event, ...updatedEventData } : event
  //     )
  //   );
  //   setSelectedEvent(null);
  // };

  const handleDeleteConfirmation = (eventId) => {
    setDeleteConfirmationModal(eventId);
  };

  const handleDeleteCancel = () => {
    setDeleteConfirmationModal(null);
  };

  // const handleDeleteEvent = () => {
  //   setEvents((prevEvents) => prevEvents.filter((event) => event.id !== deleteConfirmationModal));
  //   setDeleteConfirmationModal(null);
  // };

  const handleSignOut = () => {
    const confirmed = window.confirm('Are you sure you want to sign out?');
    if (confirmed) {
      window.location.href = '/';
    }
  };

  const handleViewEvent = (eventId) => {
    navigate(`/home/${eventId}`);
  };

  const handleToggleExpand = (eventId) => {
    setExpandedEventId((prevExpandedEventId) => 
      prevExpandedEventId === eventId ? null : eventId
    );
  };

  return (
    <Event>
      {({ events }) => (
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
                        <li key={event.event_id} className="bg-white shadow-3xl md:w-[400px] w-full rounded-[35px] opacity-90 p-5 mb-4">
                          <div className="flex justify-between items-center">
                            <div>
                              <h3 className="text-lg font-semibold">{event.title}</h3>
                              <p className="text-gray-600">{event.description}</p>
                              <p className="text-gray-600">Start Date: {event.start_date}</p>
                              <p className="text-gray-600">End Date: {event.end_date}</p>
                              <button
                                onClick={() => handleViewEvent(event.event_id)}
                                className="text-blue-500 hover:underline mt-4 block text-center"
                              >
                                View Event
                              </button>
                              <button
                                onClick={() => handleToggleExpand(event.event_id)}
                                className="text-blue-500 hover:underline mt-2 block text-center"
                              >
                                {expandedEventId === event.event_id ? 'Collapse Votes' : 'View Votes'}
                              </button>
                              {expandedEventId === event.event_id && (
                                <div className="mt-4">
                                  <h4 className="text-lg font-semibold">Votes:</h4>
                                  {event.votes && event.votes.length > 0 ? (
                                    <ul>
                                      {event.votes.map((vote, index) => (
                                        <li key={index}>
                                          <p>Voter: {vote.voterName}</p>
                                          <p>Contestant: {vote.contestant}</p>
                                          <p>Votes: {vote.votes}</p>
                                        </li>
                                      ))}
                                    </ul>
                                  ) : (
                                    <p>No votes yet.</p>
                                  )}
                                </div>
                              )}
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
                                Close Event
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
                <p className="mb-4">Are you sure you want to close this event?</p>
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
                    Close
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </Event>
  );
};

export default AdminPage;