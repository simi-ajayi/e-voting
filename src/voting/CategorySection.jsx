import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const NomineeEntry = ({ name, field, imageUrl }) => (
  <div className="flex flex-col items-center mb-4 md:mb-8">
    <div
      className="w-24 h-24 md:w-28 md:h-28 rounded-full border-2 border-none"
      style={{ backgroundImage: `url(${imageUrl})`, backgroundSize: "cover" }}
    />
    <div className="mt-2">
      <div className="text-black text-sm font-medium tracking-wide">{name}</div>
      <div className="text-black text-xs font-normal tracking-tight">{field}</div>
    </div>
  </div>
);

NomineeEntry.propTypes = {
  name: PropTypes.string.isRequired,
  field: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
};

const CategorySection = ({ title, topPosition, nominees }) => (
  <div className={`w-full max-w-[374px] h-auto pt-4 pb-8 md:pt-8 md:pb-12 ${topPosition ? `md:top-[${topPosition}px]` : ''}`}>
    <div className="text-black text-base font-semibold tracking-wide mb-4 md:mb-6">{title}</div>
    <div className="flex flex-row flex-wrap justify-between">
      {nominees.map((nominee, index) => (
        <NomineeEntry key={index} name={nominee.name} field={nominee.field} imageUrl={nominee.imageUrl} />
      ))}
    </div>
    <Link
      to={{
        pathname: "/votecategory",
        search: `?title=${encodeURIComponent(title)}&nominees=${encodeURIComponent(JSON.stringify(nominees))}`,
      }}
    >
      <button className="ml-40">
        <div className="w-[186px] h-[38px] bg-yellow-600 rounded-lg shadow border mx-auto mt-4 md:w-[220px] md:h-[44px] lg:w-[250px] lg:h-[50px]">
          <div className="text-center text-white text-sm font-semibold tracking-wide pt-2 md:text-base lg:text-lg">
            Vote this Category
          </div>
        </div>
      </button>
    </Link>
  </div>
);

CategorySection.propTypes = {
  title: PropTypes.string.isRequired,
  topPosition: PropTypes.number,
  nominees: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      field: PropTypes.string.isRequired,
      imageUrl: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default CategorySection;