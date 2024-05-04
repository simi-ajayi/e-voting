import { useState } from 'react';
import axios from 'axios';

const useSignUp = () => {
  const [signUpData, setSignUpData] = useState({
    username: 'bishopolumayor',
    email: 'bishop@example.com',
    password: '#Million1',
  });

  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSignUpChange = (e) => {
    setSignUpData({
      ...signUpData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSignUp = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await axios.post('http://localhost:3050/api/users/register', signUpData);
      if (response.data.status && response.data.statusCode === 201) {
        console.log('User created:', response.data.data.userId);
        // Reset form data
        setSignUpData({
          username: 'bishopolumayor',
          email: 'bishop@example.com',
          password: '#Million1',
        });
        return true; // Return true to indicate successful sign-up
      } else {
        setError('Failed to create user. Please try again.');
        return false; // Return false to indicate sign-up failure
      }
    } catch (error) {
      console.error('Error creating user:', error);
      setError('An error occurred while creating user. Please try again.');
      return false; // Return false to indicate sign-up failure
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