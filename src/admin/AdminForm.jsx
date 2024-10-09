import PropTypes from 'prop-types';
import useAdminForm from '../hooks/useAdminForm';
import { useEffect, useState } from 'react';

const AdminForm = ({ event, onSubmit }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('https://events.thecribbers.ng/api/users/users');
        const data = await response.json();

        if (data && data.data && Array.isArray(data.data)) {
          setUsers(data.data);
        } else {
          console.error('API response does not contain an array of organizers:', data);
        }
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);
  
  const {
    eventData,
    handleChange,
    resetForm,
  } = useAdminForm(event);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
  
    console.log('Submitting form with eventData:', eventData);
  
    const submittedEventData = {
      description: eventData.description || '',
      endDate: eventData.endDate || '',
      eventType: eventData.eventType,
      startDate: eventData.startDate || '',
      title: eventData.title || '',
      organizers: eventData.organizers || [],
    };
  
    onSubmit(submittedEventData)
      .then((response) => {
        console.log('Event created successfully:', response);
      })
      .catch((error) => {
        console.error('Failed to create event:', error);
      })
      .finally(() => {
        setIsSubmitting(false);
        resetForm();
      });
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
            id="title"
            name="title"
            value={eventData?.title || ''}
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
        <div>
          <label htmlFor="startDate" className="text-gray-700">Start Date:</label>
          <input
            type="text"
            id="startDate"
            name="startDate"
            value={eventData.startDate}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md py-2 px-3 mt-1 mb-4"
            placeholder="Enter start date (e.g., 2024-02-01)"
          />
        </div>
        <div>
          <label htmlFor="endDate" className="text-gray-700">End Date:</label>
          <input
            type="text"
            id="endDate"
            name="endDate"
            value={eventData.endDate}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md py-2 px-3 mt-1 mb-4"
            placeholder="Enter end date (e.g., 2024-02-02)"
          />
        </div>
        <div>
  <label htmlFor="organizers" className="text-gray-700">Select Organizer:</label>
  {users.length > 0 ? (
    <select
  id="organizers"
  name="organizers"
  value={eventData.organizers}
  onChange={handleChange}
  className="w-full border border-gray-300 rounded-md py-2 px-3 mt-1 mb-4 appearance-none"
  
>
  <option value="" disabled>Select Organizers</option>
  {users.map((user) => (
    <option key={user.user_id} value={user.user_id}>
      {user.username}
    </option>
  ))}
</select>
  ) : (
    <p>Loading organizers...</p>
  )}
</div>
        {/* {event && eventData.eventType === 'voting' && (
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
        ))} */}
      </div>
      <button
        type="submit"
        className="bg-gray-500 hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded-lg flex items-center justify-center"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <>
            <svg className="w-5 h-5 mr-2 animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Submitting...
          </>
        ) : (
          event ? 'Update Event' : 'Create Event'
        )}
      </button>
    </form>
  );
};


AdminForm.propTypes = {
  event: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    startDate: PropTypes.string,
    endDate: PropTypes.string,
    // organizer: PropTypes.string,
    eventType: PropTypes.oneOf(['voting', 'ticketing']),
    // categories: PropTypes.arrayOf(PropTypes.shape({
    //   name: PropTypes.string,
    //   nominees: PropTypes.arrayOf(PropTypes.shape({
    //     name: PropTypes.string,
    //     imageUrl: PropTypes.string,
    //   })),
    // })),
  }),
  onSubmit: PropTypes.func.isRequired,
};


export default AdminForm;