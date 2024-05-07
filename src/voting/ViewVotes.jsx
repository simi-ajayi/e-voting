import { useParams, useLocation, useNavigate } from 'react-router-dom';
import SignOutButton from "../components/SignOutButton";
import backgroundImage from '../assets/thumb.jpg';
import { AiOutlineArrowLeft } from 'react-icons/ai';

const ViewVotesPage = () => {
  const { eventId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const event = location.state?.event;

  const dummyVotes = [
    {
      eventId: '1',
      title: 'Model of the year',
      votes: [
        { voterName: 'John Doe', contestant: 'Contestant 1', votes: 5 },
        { voterName: 'Jane Smith', contestant: 'Contestant 2', votes: 3 },
        { voterName: 'Mike Johnson', contestant: 'Contestant 1', votes: 2 },
      ],
    },
    {
      eventId: '2',
      title: 'Dancer of the year',
      votes: [
        { voterName: 'Sarah Davis', contestant: 'Contestant 3', votes: 7 },
        { voterName: 'Tom Wilson', contestant: 'Contestant 4', votes: 4 },
      ],
    },
  ];

  return (
    <div className='font-[inter] relative min-h-screen' style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'contain', backgroundPosition: 'center' }}>
      <div className="bg-gray-900 bg-opacity-50 py-20 px-4 md:px-0">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <button
              className="flex items-center text-white hover:text-gray-300 text-sm"
              onClick={() => navigate(-1)}
            >
              <AiOutlineArrowLeft className="mr-2 text-lg" />
              Back
            </button>
            {/* <SignOutButton /> */}
          </div>
          <h1 className="text-2xl md:text-3xl font-bold text-center mb-6 text-white">View Votes</h1>
          <div className="flex justify-center">
            <div className="w-full max-w-3xl mx-auto relative bg-white shadow-3xl rounded-[35px] opacity-90 p-5 md:p-7">
              <div>
                {dummyVotes.map((category) => (
                  <div key={category.eventId} className="mb-6">
                    <h2 className="text-lg md:text-xl font-semibold mb-3 md:mb-4">{category.title}</h2>
                    <div className="flex">
                      <div className="w-1/2">
                        <ul>
                          {category.votes.map((vote, index) => (
                            <li key={index} className="bg-white shadow-md rounded-lg p-3 md:p-4 mb-3 md:mb-4">
                              <p className="text-gray-700 font-light text-sm md:text-base">Voter: {vote.voterName}</p>
                              <p className="text-gray-700 font-light text-sm md:text-base">Contestant: {vote.contestant}</p>
                              <p className="text-gray-700 font-light text-sm md:text-base">Votes: {vote.votes}</p>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="w-1/2 relative pl-3 md:pl-4">
                        <div className='pl-8 font-semibold text-sm md:text-base'>TOTAL</div>
                        {category.votes.reduce((acc, vote) => {
                          const existingContestant = acc.find((c) => c.contestant === vote.contestant);
                          if (existingContestant) {
                            existingContestant.votes += vote.votes;
                          } else {
                            acc.push({ contestant: vote.contestant, votes: vote.votes });
                          }
                          return acc;
                        }, []).map((contestantVotes) => (
                          <div key={contestantVotes.contestant} className="bg-white shadow-md rounded-lg p-3 md:p-4 mb-3 md:mb-4">
                            <p className="text-gray-700 font-light text-sm md:text-base">
                              {contestantVotes.contestant}: {contestantVotes.votes} vote(s)
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewVotesPage;
