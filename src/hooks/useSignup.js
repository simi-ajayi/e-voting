import { useState } from 'react';
import axios from 'axios';

const useSignUp = () => {
  const [signUpData, setSignUpData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSignUpChange = (e) => {
    setSignUpData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };
  

  
  const handleSignUp = async () => {
    setIsLoading(true);
    setError(null);
  
    try {
      // Convert sign-up data to JSON string and print it
      console.log('Sign-up data:', JSON.stringify(signUpData));
  
      const response = await axios.post('https://events.thecribbers.ng/api/users/register', signUpData);
  
      if (response.data.status && response.data.statusCode === 201) {
        console.log('User created:', response.data.data.userId.user_id);
        return true; 
      } else {
        setError(response.data.message || 'Failed to create user. Please try again.');
        return false; 
      }
    } catch (error) {
      console.error('Error creating user:', error);
      setError('An error occurred while creating user. Please try again.');
      return false; 
    } finally {
      setIsLoading(false);
    }
  };
  

  return {
    signUpData,
    handleSignUpChange,
    handleSignUp,
    error,
    isLoading,
  };
};

export default useSignUp;