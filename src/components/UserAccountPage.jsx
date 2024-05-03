import { Link } from 'react-router-dom';
import SignOutButton from './SignOutButton';

const EVotingPage = () => {
  const events = [
    { name: "AUSA DINNER NIGHT", description: "Join us for the annual AUSA dinner night, filled with delicious food and entertainment.", link: "/ausa" },
    { name: "AUSA SUMMER PICNIC", description: "Celebrate the summer season with our community picnic. Enjoy games, food, and fun under the sun!", link: "/account" },
    { name: "AUSA HALLOWEEN COSTUME PARTY", description: "Get ready for a spooky evening of costumes, treats, and scares at our Halloween costume party!", link: "/account" },
    { name: "AUSA CHRISTMAS CHARITY DRIVE", description: "Spread joy and cheer this holiday season by participating in our Christmas charity drive. Help those in need!", link: "/account" },
    { name: "AUSA NEW YEAR'S EVE GALA", description: "Ring in the New Year with elegance and excitement at our New Year's Eve gala event. Dance the night away!", link: "/account" }
  ];

  return (
    <div>
      <SignOutButton/>
      <div className="relative bg-gradient-to-b from-pink-500 to-purple-600 py-16 px-4 md:px-0">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 text-white">
            Welcome to the Voting Page
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
         {events.map((event, index) => (
         <div key={index} className="bg-white shadow-md rounded-lg p-6 flex flex-col justify-between">
         <h2 className="text-xl font-semibold mb-4">{event.name}</h2>
      <p className="text-gray-700 mb-4">{event.description}</p>
           <Link 
              to={event.link} 
              className={`bg-pink-500 hover:bg-pink-600 text-white font-semibold py-2 px-4 rounded-lg inline-block text-center ${
              index === 0 ? 'animate-bounce' : ''
                }`}
               >
               {index === 0 ? "Voting is Live!" : "Vote"}
           </Link>
               </div>
               ))}
          </div>

        </div>
      </div>
    </div>
  );
};

export default EVotingPage;
