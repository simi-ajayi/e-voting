import PropTypes from 'prop-types';
import useAdminForm from '../hooks/useAdminForm';

const AdminForm = ({ event, onSubmit }) => {
  const {
    eventData,
    handleChange,
    handleAddCategory,
    handleAddNominee,
    handleCategoryNameChange,
    handleNomineeChange,
    handleImageUpload,
    resetForm,
  } = useAdminForm(event);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(eventData);
    resetForm();
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white shadow-3xl rounded-[35px] opacity-90 p-7 flex flex-col justify-between">
      <div>
        <h2 className="text-xl font-semibold mb-4">
          {event ? 'Update Event' : 'Create Event'}
        </h2>
        <div>
          <label htmlFor="eventType" className="text-gray-700">Event Type:</label>
          <select
            id="eventType"
            name="eventType"
            value={eventData.eventType}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md py-2 px-3 mt-1 mb-4"
          >
            <option value="voting">Voting Event</option>
            <option value="ticketing" disabled>Ticketing Event</option>
          </select>
        </div>
        <div>
          <label htmlFor="name" className="text-gray-700">Event Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={eventData.name}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md py-2 px-3 mt-1 mb-4"
          />
        </div>
        <div>
          <label htmlFor="description" className="text-gray-700">Event Description:</label>
          <textarea
            id="description"
            name="description"
            value={eventData.description}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md py-2 px-3 mt-1 mb-4"
          />
        </div>
        {event && eventData.eventType === 'voting' && (
          <button type="button" onClick={handleAddCategory} className="bg-gray-500 hover:bg-gray-600 text-white font-semibold py-2 my-2 px-4 rounded-lg mt-4">
            Add Voting Category
          </button>
        )}
        {eventData.categories.map((category, categoryIndex) => (
          <div key={categoryIndex} className="mt-4 border-t border-gray-300 pt-4">
            <input
              type="text"
              value={category.name}
              onChange={(e) => handleCategoryNameChange(e, categoryIndex)}
              className="w-full border border-gray-300 rounded-md py-2 px-3 mb-4"
              placeholder="Category Name"
            />
            <button
              type="button"
              onClick={() => handleAddNominee(categoryIndex)}
              className="bg-gray-500 hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded-lg mb-2"
            >
              Add Nominee
            </button>
            {category.nominees.map((nominee, nomineeIndex) => (
              <div key={nomineeIndex} className="flex items-center mt-2">
                <input
                  type="text"
                  name="name"
                  value={nominee.name}
                  onChange={(e) => handleNomineeChange(e, categoryIndex, nomineeIndex)}
                  className="flex-1 border border-gray-300 rounded-md py-2 px-3 mr-2"
                  placeholder="Nominee Name"
                />
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleImageUpload(e, categoryIndex, nomineeIndex)}
                  className="border border-gray-300 rounded-md py-2 px-3 mr-2"
                />
                <img src={nominee.imageUrl} alt="Nominee" className="h-10 w-10 rounded-full object-cover" />
              </div>
            ))}
          </div>
        ))}
      </div>
      <button type="submit" className="bg-gray-500 hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded-lg">
        {event ? 'Update Event' : 'Create Event'}
      </button>
    </form>
  );
};

AdminForm.propTypes = {
  event: PropTypes.shape({
    name: PropTypes.string,
    description: PropTypes.string,
    eventType: PropTypes.oneOf(['voting', 'ticketing']),
    categories: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string,
      nominees: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string,
        imageUrl: PropTypes.string,
      })),
    })),
  }),
  onSubmit: PropTypes.func.isRequired,
};

export default AdminForm;
