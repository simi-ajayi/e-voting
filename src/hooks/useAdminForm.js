import { useState, useEffect } from 'react';

const useAdminForm = (event) => {
  const [eventData, setEventData] = useState({
    name: event ? event.name : '',
    description: event ? event.description : '',
    eventType: event ? event.eventType : 'voting',
    categories: event ? event.categories : [],
    assignedUser: event ? event.assignedUser : '',
  });

  useEffect(() => {
    setEventData({
      name: event ? event.name : '',
      description: event ? event.description : '',
      eventType: event ? event.eventType : 'voting',
      categories: event ? event.categories : [],
      assignedUser: event ? event.assignedUser : '',
    });
  }, [event]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEventData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleAddCategory = () => {
    setEventData((prevState) => ({
      ...prevState,
      categories: [...prevState.categories, { name: '', nominees: [] }],
    }));
  };

  const handleAddNominee = (categoryIndex) => {
    setEventData((prevState) => {
      const updatedCategories = prevState.categories.map((category, index) => {
        if (index === categoryIndex) {
          return {
            ...category,
            nominees: [...category.nominees, { name: '', imageUrl: '' }],
          };
        }
        return category;
      });
      return {
        ...prevState,
        categories: updatedCategories,
      };
    });
  };

  const handleCategoryNameChange = (e, categoryIndex) => {
    const { value } = e.target;
    setEventData((prevState) => {
      const updatedCategories = prevState.categories.map((category, index) => {
        if (index === categoryIndex) {
          return {
            ...category,
            name: value,
          };
        }
        return category;
      });
      return {
        ...prevState,
        categories: updatedCategories,
      };
    });
  };

  const handleNomineeChange = (e, categoryIndex, nomineeIndex) => {
    const { name, value } = e.target;
    setEventData((prevState) => {
      const updatedCategories = prevState.categories.map((category, cIndex) => {
        if (cIndex === categoryIndex) {
          const updatedNominees = category.nominees.map((nominee, nIndex) => {
            if (nIndex === nomineeIndex) {
              return {
                ...nominee,
                [name]: value,
              };
            }
            return nominee;
          });
          return {
            ...category,
            nominees: updatedNominees,
          };
        }
        return category;
      });
      return {
        ...prevState,
        categories: updatedCategories,
      };
    });
  };

  const handleImageUpload = (e, categoryIndex, nomineeIndex) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      setEventData((prevState) => {
        const updatedCategories = prevState.categories.map((category, cIndex) => {
          if (cIndex === categoryIndex) {
            const updatedNominees = category.nominees.map((nominee, nIndex) => {
              if (nIndex === nomineeIndex) {
                return {
                  ...nominee,
                  imageUrl: reader.result,
                };
              }
              return nominee;
            });
            return {
              ...category,
              nominees: updatedNominees,
            };
          }
          return category;
        });
        return {
          ...prevState,
          categories: updatedCategories,
        };
      });
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const resetForm = () => {
    setEventData({
      name: '',
      description: '',
      eventType: 'voting',
      categories: [],
      assignedUser: '',
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