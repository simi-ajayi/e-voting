// EVotingPage.js
import { Link } from 'react-router-dom';
// import SignOutButton from './SignOutButton';
import backgroundImage from '../assets/thumb.jpg';

const EVotingPage = ({ events, currentUser }) => {
  const filteredEvents = events.filter((event) => event.assignedUser === currentUser);

  return (
    <div className='font-[inter]'>
      {/* <SignOutButton /> */}
      <div
        className="relative min-h-screen"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'contain',
          backgroundPosition: '',
        }}
      >
        <div className="bg-gray-900 bg-opacity-50 py-48 px-4 md:px-0">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 text-white">
              Welcome to the Voting Page
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredEvents.map((event, index) => (
                <div
                  key={event.id}
                  className="bg-white shadow-3xl rounded-[35px] opacity-90 p-7 flex flex-col justify-between"
                >
                  <div>
                    <h2 className="text-xl font-semibold mb-4">{event.name}</h2>
                    <p className="text-gray-700 mb-4">{event.description}</p>
                  </div>
                  <Link
                    to={`/votecategory?eventId=${event.id}&title=${encodeURIComponent(event.name)}&nominees=${encodeURIComponent(JSON.stringify(event.nominees))}`}
                    className={`bg-gray-500 hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded-lg inline-block text-center ${
                      index === 0 ? 'animate-bounce' : ''
                    }`}
                  >
                    {index === 0 ? 'Voting is Live!' : 'Vote'}
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

export default EVotingPage;