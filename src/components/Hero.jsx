import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Bg1 from '../assets/bg.jpeg';
import Bg2 from '../assets/bg.jpeg'; // Add additional background images
import Bg3 from '../assets/bg.jpeg'; // Add additional background images
import Navbar from './Navbar';

const Hero = () => {
  return (

    <div>
      <Navbar />
      <div className="md:w-[1349px] w-full h-auto relative bg-white">
      <div className="md:w-[781.36px] w-full h-[500px] left-[-99.04px] top-[202.83px] absolute rotate-[100.11deg] bg-yellow-500 rounded-full" />
      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        showArrows={false}
        showIndicators={false}
        interval={5000}
        transitionTime={500}
        
      >
        <div>
          <img src={Bg1} alt="Background 1" className="w-full h-auto md:h-[700px] md:w-full left-0 top-0  object-fill" />
        </div>
        <div>
          <img src={Bg2} alt="Background 2" className="w-full h-auto md:h-[700px] md:w-full left-0 top-0  object-fill" />
        </div>
        <div>
          <img src={Bg3} alt="Background 3" className="w-full h-auto md:h-[700px] md:w-full left-0 top-0  object-fill" />
        </div>
        {/* Add more background images as needed */}
      </Carousel>
      <div className="w-full h-[197px] left-0 top-[272px] absolute opacity-50 bg-gradient-to-t from-stone-900 via-pink-950 to-zinc-800" />
      <div className="w-[348px] md:w-[430px] left-[22px] md:left-0 top-[332px] md:top-[362px] absolute text-white text-[20px] md:text-[25px] font-semibold font-['Poppins'] px-4">
        ACHIEVERS UNIVERSITY STUDENT ASSOCIATION (AUSA), AWARD NIGHT VOTING SYSTEM
      </div>
      <div className="w-full flex justify-center items-center mx-auto">
        <div className="w-[350px] md:w-96 h-[109px] left-auto md:left-[22px] top-[499px] absolute bg-stone-950 rounded-[10px] shadow px-4">
          <div className="left-[55px] md:left-[55px] top-[15px] absolute text-white text-xl font-semibold font-['Poppins'] tracking-wide">
            Cast your vote
          </div>
          <div className="md:ml-[300px] ml-[270px] mt-9">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="text-white font-bold w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
              />
            </svg>
          </div>
          <div className="left-[129px] md:left-[129px] top-[69px] absolute text-white text-[15px] font-normal font-['Poppins']">
            Voting is live
          </div>
          <div className="w-[57px] h-6 left-[55px] md:left-[55px] top-[71px] absolute bg-red-600 rounded-md" />
          <div className="left-[74px] md:left-[74px] top-[71px] absolute text-white text-sm font-semibold font-['Poppins']">
            LIVE
          </div>
          <div className="w-1.5 h-1.5 left-[65px] md:left-[65px] top-[77px] absolute bg-white rounded-full" />
        </div>
      </div>
    </div>
    </div>
  );
};

export default Hero;