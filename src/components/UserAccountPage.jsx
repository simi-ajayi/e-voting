import { Link, useSearchParams } from 'react-router-dom';
import { useState, useEffect, useCallback } from 'react';
import SignOutButton from './SignOutButton';
import backgroundImage from '../assets/thumb.jpg';
import axios from 'axios';

const UserAccountPage = () => {
  const [events, setEvents] = useState([]);
  const [searchParams] = useSearchParams();
  const adminuserId = localStorage.getItem('adminId');

  console.log('Admin User ID:', adminuserId)

  const fetchEvents = useCallback(async () => {
    try {
      const response = await axios.get(`https://events.thecribbers.ng/api/users/events/organizers/${adminuserId}`);
      if (response.data.status && response.data.statusCode === 200) {
        setEvents(response.data.data);
      } else {
        console.error('Failed to fetch events:', response.data.message);
      }
    } catch (error) {
      console.error('Error fetching events:', error);
    }
  }, [adminuserId]);

  useEffect(() => {
    fetchEvents();
  }, [fetchEvents]);

  console.log('Events:', events);

  return (
    <div className='font-[inter]'>
      <SignOutButton />
      <div
        className="relative min-h-screen"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'contain',
          backgroundPosition: '',
        }}
      >
        <div className="bg-gray-900 h-screen bg-opacity-50 py-48 px-4 md:px-0">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 text-white">
              Welcome to the Voting Page
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {events.map((event) => (
                <div key={event.id} className="bg-white shadow-3xl rounded-[35px] opacity-90 p-7 flex flex-col justify-between">
                  <div>
                    <h2 className="text-xl font-semibold mb-4">{event.title}</h2>
                    <p className="text-gray-700 mb-4">{event.description}</p>
                  </div>
                  <Link
                    to={`/votecategory?eventId=${event.event_id}&title=${encodeURIComponent(event.title)}`}
                    className="bg-gray-500 hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded-lg inline-block text-center"
                  >
                    Vote
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserAccountPage;