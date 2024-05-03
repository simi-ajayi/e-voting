// hooks/useSignin.js
import { useState } from 'react';

const useSignIn = () => {
  const [signInData, setSignInData] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSignInChange = (e) => {
    setSignInData({ ...signInData, [e.target.name]: e.target.value });
  };

  const handleSignIn = async () => {
    setIsLoading(true);
    setError(null);

    try {
      // Here, you would make an API call to your backend for authentication
      // For this example, we'll simulate a successful sign-in after a delay
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Assuming the sign-in was successful
      return true;
    } catch (error) {
      setError('Sign-in failed. Please check your credentials.');
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  return { signInData, handleSignInChange, handleSignIn, error, isLoading };
};

export default useSignIn;