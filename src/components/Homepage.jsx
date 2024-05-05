
import PropTypes from 'prop-types';
import CategorySection from '../voting/CategorySection';
import SignOutButton from './SignOutButton';
import Hero from './Hero';

const Nominees = ({ eventData }) => {
  // Check if eventData or categories are not present
  if (!eventData || !eventData.categories || eventData.categories.length === 0) {
    return (
      <div>
        <SignOutButton />
        <Hero />
        <div>No event data found.</div>
      </div>
    );
  }

  return (
    <div>
      <SignOutButton />
      <Hero />
      <div className="container mx-auto px-4 pt-[200px] md:pt-[400px]">
        <div className="md:mx-[33.3%]">
          <div className="text-black text-xl font-semibold tracking-wide mb-2">Meet Our Nominees</div>
          <div className="text-black text-sm font-normal tracking-wide">Get to know our Prominent Nominees</div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-6 mt-8 md:mx-[33.3%] mx-auto">
          {eventData.categories.map((category, index) => (
            <CategorySection key={index} title={category.name} nominees={category.nominees} />
          ))}
        </div>
      </div>
    </div>
  );
};

Nominees.propTypes = {
  eventData: PropTypes.shape({
    categories: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        nominees: PropTypes.arrayOf(PropTypes.string).isRequired,
      })
    ).isRequired,
  }).isRequired,
};

export default Nominees;
