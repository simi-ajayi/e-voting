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
      // Dummy admin credentials
      const adminEmail = 'admin@example.com';
      const adminPassword = 'password123';

      // Check if the provided credentials match the admin credentials
      if (
        signInData.email === adminEmail &&
        signInData.password === adminPassword
      ) {
        // Simulate a successful admin sign-in after a delay
        await new Promise((resolve) => setTimeout(resolve, 1000));
        // Return true for successful admin sign-in
        return { isAdmin: true };
      } else {
        // Simulate a successful user sign-in after a delay
        await new Promise((resolve) => setTimeout(resolve, 1000));
        // Return false for regular user sign-in
        return { isAdmin: false };
      }
    } catch (error) {
      setError('Sign-in failed. Please check your credentials.');
      return { isAdmin: false };
    } finally {
      setIsLoading(false);
    }
  };

  return {
    signInData,
    handleSignInChange,
    handleSignIn,
    error,
    isLoading,
  };
};

export default useSignIn;