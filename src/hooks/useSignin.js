import { useState } from 'react';
import axios from 'axios';

const useSignIn = () => {
  const [signInData, setSignInData] = useState({ login: '', password: '' });
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  const handleSignInChange = (e) => {
    setSignInData({ ...signInData, [e.target.name]: e.target.value });
  };

  const handleSignIn = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await axios.post('https://events.thecribbers.ng/api/users/login', signInData);

      if (response.status === 200) {
        const { token, user } = response.data.data;
        const isAdmin = user.email === 'admin@example.com';

        // Store the token in local storage or a state management solution
        localStorage.setItem('token', token);

        // Set the user and authentication state
        setUser(user);
        setIsAuthenticated(true);

        return { token, user, isAdmin };
      } else {
        setError('Sign-in failed. Please check your credentials.');
        return null;
      }
    } catch (error) {
      console.error('Error during sign-in:', error);
      setError('An error occurred during sign-in. Please try again.');
      return null;
    } finally {
      setIsLoading(false);
    }
  };

  const handleSignOut = () => {
    // Remove the token from local storage or the state management solution
    localStorage.removeItem('token');

    // Reset the user and authentication state
    setUser(null);
    setIsAuthenticated(false);
  };

  return {
    signInData,
    handleSignInChange,
    handleSignIn,
    handleSignOut,
    error,
    isLoading,
    isAuthenticated,
    user,
  };
};

export default useSignIn;
