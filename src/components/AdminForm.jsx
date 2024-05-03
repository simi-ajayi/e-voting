import { useState } from 'react';
import PropTypes from 'prop-types';

const AdminForm = ({ event, onSubmit }) => {
  const [eventData, setEventData] = useState(event || {
    name: '',
    description: '',
  });

  const handleChange = (e) => {
    setEventData({ ...eventData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(eventData);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white shadow-3xl rounded-[35px] opacity-90 p-7 flex flex-col justify-between">
      <div>
        <h2 className="text-xl font-semibold mb-4">
          {event ? 'Update Event' : 'Create Event'}
        </h2>
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
  }),
  onSubmit: PropTypes.func.isRequired,
};

export default AdminForm;