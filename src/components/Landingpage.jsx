import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import backgroundImage from '../assets/voteee.png';
import axios from 'axios';

const LandingPage = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetchEvents();
  }, []);

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

  return (
    <div className='font-[inter]'>
      <div
        className="relative min-h-screen"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="bg-opacity-50 pt-24  px-4 md:px-0">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 text-white">
              CRIBBERS AWARD VOTING SYSTEM
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {events.map((event) => (
                <div
                  key={event.id}
                  className="bg-white shadow-3xl border border-gray-500 rounded-[35px] opacity-90 p-7 flex flex-col justify-between"
                >
                  <div>
                    <h2 className="text-xl font-semibold mb-4">{event.title}</h2>
                    <p className="text-gray-700 mb-4">{event.description}</p>
                  </div>
                  <Link
                    to={`/votecategory?eventId=${event.event_id}&title=${encodeURIComponent(event.title)}&nominees=${encodeURIComponent(JSON.stringify(event.nominees))}`}
                    className={`bg-gray-500 hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded-lg inline-block text-center animate-bounc
                    }`}
                  >
                    Voting is live!
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

export default LandingPage;