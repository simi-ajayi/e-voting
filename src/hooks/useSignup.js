import { useState } from 'react';

const useSignUp = () => {
  const [signUpData, setSignUpData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleSignUpChange = (e) => {
    setSignUpData({ ...signUpData, [e.target.name]: e.target.value });
  };

  const handleSignUp = () => {
    // Perform signup logic here (e.g., send data to server)
    console.log('Sign up data:', signUpData);
    // Reset form data
    setSignUpData({ username: '', email: '', password: '' });
  };

  return { signUpData, handleSignUpChange, handleSignUp };
};

export default useSignUp;