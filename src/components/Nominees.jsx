
import CategorySection from './CategorySection'; // Adjust the path accordingly
import olaoluwaImage from '../assets/bg.jpeg';
import styceImage from '../assets/p3.png';
import mayorImage from '../assets/p4.png';

const Nominees = () => {
  // Define your nominee data for each category
  const studentModelNominees = [
    { name: 'Olaoluwa', field: 'Law', imageUrl: olaoluwaImage },
    { name: 'Styce', field: 'Engineering', imageUrl: styceImage },
    { name: 'Dayo', field: 'Computer Science', imageUrl: mayorImage },
    { name: 'Olaoluwa', field: 'Law', imageUrl: olaoluwaImage },
    { name: 'Styce', field: 'Engineering', imageUrl: styceImage },
    { name: 'Dayo', field: 'Computer Science', imageUrl: mayorImage },
    // Add more nominees for Student Model of the year as needed
  ];

  const developer = [
    { name: 'Olaoluwa', field: 'Law', imageUrl: olaoluwaImage },
    { name: 'Styce', field: 'Engineering', imageUrl: styceImage },
    { name: 'Mayor', field: 'Computer Science', imageUrl: mayorImage },
    { name: 'Olaoluwa', field: 'Law', imageUrl: olaoluwaImage },
    { name: 'Styce', field: 'Engineering', imageUrl: styceImage },
    { name: 'Dayo', field: 'Computer Science', imageUrl: mayorImage },
    { name: 'Olaoluwa', field: 'Law', imageUrl: olaoluwaImage },
    { name: 'Styce', field: 'Engineering', imageUrl: styceImage },
    { name: 'Dayo', field: 'Computer Science', imageUrl: mayorImage },
  ];

  const tailor = [
    { name: 'Olaoluwa', field: 'Law', imageUrl: olaoluwaImage },
    { name: 'Styce', field: 'Engineering', imageUrl: styceImage },
    { name: 'Mayor', field: 'Computer Science', imageUrl: mayorImage },
  ];

  return (
   <div>
     <div className="container mx-auto px-4 pt-[200px] md:pt-[400px]">
      <div className='md:mx-[33.3%]'>
        <div className="text-black text-xl font-semibold tracking-wide mb-2">Meet Our Nominees</div>
        <div className="text-black text-sm font-normal tracking-wide">Get to know our Prominent Nominees</div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-6 mt-8 md:mx-[33.3%] mx-auto">
        <CategorySection title="Student Model of the year" topPosition={808} nominees={studentModelNominees} />
        <CategorySection title="Developer of the year" topPosition={808} nominees={developer} />
        <CategorySection title="Fashion Designer of the year" topPosition={808} nominees={tailor} />
      </div>
    </div>
   </div>
  );
};

export default Nominees;
