// useAdminForm.js
import { useState, useEffect } from 'react';

const useAdminForm = (initialEvent) => {
  const [eventData, setEventData] = useState({
    title: '',
    description: '',
    startDate: '',
    endDate: '',
    organizers: [],
    eventType: 'voting',
    categories: [],
  });

  useEffect(() => {
    if (initialEvent) {
      setEventData(initialEvent);
    }
  }, [initialEvent]);

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;

    if (type === 'file') {
      
      const file = files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        setEventData({ ...eventData, [name]: reader.result });
      };
      if (file) {
        reader.readAsDataURL(file);
      }
    } else {
      
      setEventData({ ...eventData, [name]: value });
    }
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
    setEventData({
      name: '',
      description: '',
      startDate: '',
      endDate: '',
      organizers: [],
      eventType: 'voting',
      categories: [],
    });
  };

  return {
    eventData,
    handleChange,
    handleAddCategory,
    handleAddNominee,
    handleCategoryNameChange,
    handleNomineeChange,
    handleImageUpload,
    resetForm,
  };
};

export default useAdminForm;