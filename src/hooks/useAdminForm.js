import { useState, useEffect } from 'react';
import axios from 'axios';

const useAdminForm = (initialEvent) => {
  const [eventData, setEventData] = useState({
    name: '',
    description: '',
    categories: [],
  });
  const [events, setEvents] = useState([]);

  useEffect(() => {
    if (initialEvent) {
      setEventData(initialEvent);
    }
  }, [initialEvent]);

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const response = await axios.get('your-api-url/events');
      setEvents(response.data);
    } catch (error) {
      console.error('Error fetching events:', error);
    }
  };

  const handleSubmit = async () => {
    try {
      // Assuming you have an API endpoint for submitting event data
      await axios.post('your-api-url/submit-event', eventData);
      // After successful submission, fetch events again to update the list
      fetchEvents();
      // Reset form after submission
      resetForm();
    } catch (error) {
      console.error('Error submitting event data:', error);
    }
  };

  const handleChange = (e) => {
    setEventData({ ...eventData, [e.target.name]: e.target.value });
  };

  const handleAddCategory = () => {
    setEventData({
      ...eventData,
      categories: [...eventData.categories, { name: '', nominees: [] }],
    });
  };

  const handleAddNominee = (categoryIndex) => {
    const updatedCategories = [...eventData.categories];
    updatedCategories[categoryIndex].nominees.push({ name: '', imageUrl: '' });
    setEventData({ ...eventData, categories: updatedCategories });
  };

  const handleCategoryNameChange = (e, categoryIndex) => {
    const updatedCategories = [...eventData.categories];
    updatedCategories[categoryIndex].name = e.target.value;
    setEventData({ ...eventData, categories: updatedCategories });
  };

  const handleNomineeChange = (e, categoryIndex, nomineeIndex) => {
    const updatedCategories = [...eventData.categories];
    updatedCategories[categoryIndex].nominees[nomineeIndex][e.target.name] = e.target.value;
    setEventData({ ...eventData, categories: updatedCategories });
  };

  const handleImageUpload = (e, categoryIndex, nomineeIndex) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      const updatedCategories = [...eventData.categories];
      updatedCategories[categoryIndex].nominees[nomineeIndex].imageUrl = reader.result;
      setEventData({ ...eventData, categories: updatedCategories });
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const resetForm = () => {
    setEventData({ name: '', description: '', categories: [] });
  };

  return {
    eventData,
    events,
    handleChange,
    handleSubmit,
    handleAddCategory,
    handleAddNominee,
    handleCategoryNameChange,
    handleNomineeChange,
    handleImageUpload,
    resetForm,
  };
};

export default useAdminForm;
