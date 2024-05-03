import { useState,  useMemo } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import Bg from '../assets/bg.jpeg'
import Navbar from "./Navbar";
import SignOutButton from "./SignOutButton";
import { AiOutlineArrowLeft } from 'react-icons/ai';

const VoteCategory = () => {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const title = searchParams.get("title");
    const nomineeData = searchParams.get("nominees");

    const nominees = useMemo(() => {
        return nomineeData ? JSON.parse(decodeURIComponent(nomineeData)) : [];
    }, [nomineeData]);

    const [selectedVotes, setSelectedVotes] = useState(1);
    const [selectedContestant, setSelectedContestant] = useState(null);

    const handleVoteChange = (e) => {
        setSelectedVotes(parseInt(e.target.value));
    };

    const handleContestantChange = (e) => {
        setSelectedContestant(e.target.value);
    };

    const calculatePrice = () => {
        const pricePerVote = 50;
        return selectedVotes * pricePerVote;
    };

    const getContestantImage = () => {
        const contestant = nominees.find((nominee) => nominee.name === selectedContestant);
        return contestant ? contestant.imageUrl : "https://static.vecteezy.com/system/resources/previews/036/280/650/non_2x/default-avatar-profile-icon-social-media-user-image-gray-avatar-icon-blank-profile-silhouette-illustration-vector.jpg";
    };

    return (
        <div>
            <SignOutButton/>
        <Navbar/>
            <div className="w-full h-auto relative bg-white md:h-[1154px]  font-[Poppins] ">
         <div className="top-[-449px]">
         <img
                className="w-full object-cover h-[69px] md:left-0 top-[-449px]"
                src={Bg}
                alt="Background Image"
            />
         </div>
            <div className="p-4">
            <div className="flex justify-center">
  <div className="w-full max-w-md mx-auto relative">
                             <button
                                className="absolute left-0 top-0 z-10 flex "
                                onClick={() => navigate(-1)}
                            >
                                <AiOutlineArrowLeft className="text-gray-600 mr-1" size={20} />Back
                            </button>
    <div>
      <div className="text-black text-2xl font-semibold font-[Poppins] tracking-wide pt-8 md:pt-0 md:left-[32px] md:top-[120px] md:absolute">
        {title || "Default Title"}
      </div>
      <div className="text-black text-xs font-normal font-Poppins tracking-wide mt-4 md:mt-0 md:left-[32px] md:top-[156px] md:absolute">
        Vote for your favourite contestant
      </div>
      <label
        htmlFor="contestant"
        className="text-black text-sm font-light font-Poppins tracking-wide mt-4 md:mt-0 md:left-[48px] md:top-[221px] md:absolute"
      >
        {/* Select Contestant */}
      </label>
      <div className="relative md:left-[48px] md:top-[245px] md:absolute">
        <select
          id="contestant"
          className="w-full h-[40px] rounded-[10px] border border-black bg-white pl-12 pr-4 md:w-[355px]"
          onChange={handleContestantChange}
          value={selectedContestant}
          defaultValue=""
        >
          <option value="" disabled>
            Select Contestant
          </option>
          {nominees.map((nominee, index) => (
            <option key={index} value={nominee.name}>
              {nominee.name}
            </option>
          ))}
        </select>
        <div className="absolute left-[12px] top-[50%] transform -translate-y-1/2 pointer-events-none">
          {/* {selectedContestant && (
            <img
              src={getContestantImage()}
              alt={selectedContestant}
              className="w-8 h-8 rounded-full mr-5"
            />
          )} */}
        </div>
      </div>
      <img
        className="md:w-[200px] md:h-[200px] w-[253px] h-[253px] mx-auto mt-4 rounded-md md:left-[108px] md:top-[289px] md:absolute"
        src={getContestantImage()}
        alt="Profile Picture"
      />
      <div className="text-black text-sm font-light font-Poppins tracking-wide mt-4 md:mt-0 md:left-[48px] md:top-[501px] md:absolute">
        Number of Votes
      </div>
      <div className="relative md:left-[48px] md:top-[525px] md:absolute">
        <select
          id="votes"
          className="w-full h-[40px] rounded-[10px] border border-black bg-white pl-12 pr-4 md:w-[355px]"
          onChange={handleVoteChange}
          value={selectedVotes}
          defaultValue=""
        >
          <option value="" disabled hidden>
            Number of Votes
          </option>
          {[...Array(1000).keys()].map((vote) => (
            <option key={vote + 1} value={vote + 1}>
              {vote + 1}
            </option>
          ))}
        </select>
      </div>
      <div className="flex-row flex w-full">
      <div className="text-black text-sm font-light font-Poppins tracking-wide mt-4 md:mt-0 md:left-[57px] md:top-[576px] md:absolute">
        Price
      </div>
      <div className="text-black text-sm font-light font-Poppins tracking-wide mt-4 md:mt-0 md:left-[359px] md:pl-0 pl-[250px] md:top-[576px] md:absolute">
        ₦{calculatePrice()}
      </div>
      </div>
    
      <div className="w-[186px] h-[38px] mx-auto mt-4 bg-yellow-600 rounded-[10px] shadow border border-none md:left-[122px] md:top-[593px] md:absolute">
      <button className="text-center text-white text-sm font-semibold font-Poppins tracking-wide pt-2 mx-auto w-full ">
          Make Payment
        </button>
      </div>
    
    
    </div>
  </div>
</div>
            </div>
        </div>
        </div>
    );
};

export default VoteCategory;
