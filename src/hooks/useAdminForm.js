import { useState, useEffect } from "react";

const useAdminForm = (initialEvent) => {
  const [eventData, setEventData] = useState({
    title: '',
    description: '',
    startDate: '',
    endDate: '',
    eventType: 'voting',
    organizers:''
  });

  useEffect(() => {
    if (initialEvent) {
      setEventData(initialEvent);
    }
  }, [initialEvent]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEventData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleAddCategory = () => {
    setEventData((prevData) => ({
      ...prevData,
      categories: [...prevData.categories, { name: '', nominees: [] }],
    }));
  };

  const handleAddNominee = (categoryIndex) => {
    setEventData((prevData) => {
      const updatedCategories = [...prevData.categories];
      updatedCategories[categoryIndex].nominees.push({ name: '', imageUrl: '' });
      return { ...prevData, categories: updatedCategories };
    });
  };

  const handleCategoryNameChange = (e, categoryIndex) => {
    const { value } = e.target;
    setEventData((prevData) => {
      const updatedCategories = [...prevData.categories];
      updatedCategories[categoryIndex].name = value;
      return { ...prevData, categories: updatedCategories };
    });
  };

  const handleNomineeChange = (e, categoryIndex, nomineeIndex) => {
    const { name, value } = e.target;
    setEventData((prevData) => {
      const updatedCategories = [...prevData.categories];
      updatedCategories[categoryIndex].nominees[nomineeIndex][name] = value;
      return { ...prevData, categories: updatedCategories };
    });
  };

  const handleImageUpload = (e, categoryIndex, nomineeIndex) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setEventData((prevData) => {
        const updatedCategories = [...prevData.categories];
        updatedCategories[categoryIndex].nominees[nomineeIndex].imageUrl = reader.result;
        return { ...prevData, categories: updatedCategories };
      });
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const resetForm = () => {
    setEventData({
      title: '',
      description: '',
      startDate: '',
      endDate: '',
      eventType: 'voting',
    //   categories: [],
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