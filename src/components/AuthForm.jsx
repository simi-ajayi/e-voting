import { Routes, Route, Navigate } from 'react-router-dom';
import { useState } from 'react';
import useSignUp from '../hooks/useSignup';
import useSignIn from '../hooks/useSignin';
import UserAccountPage from './UserAccountPage';

const AuthForm = () => {
  const [isSignUp, setIsSignUp] = useState(true);
  const { signUpData, handleSignUpChange, handleSignUp } = useSignUp();
  const { signInData, handleSignInChange, handleSignIn, error, isLoading } = useSignIn();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSignUp) {
      await handleSignUp();
      setIsAuthenticated(true);
    } else {
      const success = await handleSignIn();
      if (success) {
        setIsAuthenticated(true);
      }
    }
  };

  const handleToggleForm = () => {
    setIsSignUp(!isSignUp);
  };

  return (
    <Routes>
      <Route
        path="/"
        element={
          isAuthenticated ? (
            <Navigate to="/account" />
          ) : (
            <div className="w-full h-screen flex justify-center items-center bg-gray-100">
              <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
                <h2 className="text-2xl font-bold mb-4">{isSignUp ? 'Sign Up' : 'Sign In'}</h2>
                {error && <p className="text-red-500 mb-4">{error}</p>}
                <form onSubmit={handleSubmit}>
                  {isSignUp && (
                    <input
                      type="text"
                      name="username"
                      placeholder="Matric Number"
                      value={signUpData.username}
                      onChange={handleSignUpChange}
                      className="w-full p-2 mb-4 border border-gray-300 rounded"
                    />
                  )}
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={isSignUp ? signUpData.email : signInData.email}
                    onChange={isSignUp ? handleSignUpChange : handleSignInChange}
                    className="w-full p-2 mb-4 border border-gray-300 rounded"
                  />
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={isSignUp ? signUpData.password : signInData.password}
                    onChange={isSignUp ? handleSignUpChange : handleSignInChange}
                    className="w-full p-2 mb-4 border border-gray-300 rounded"
                  />
                  <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
                    disabled={isLoading}
                  >
                    {isLoading ? 'Loading...' : isSignUp ? 'Sign Up' : 'Sign In'}
                  </button>
                </form>
                <p className="mt-4 text-center">
                  {isSignUp ? (
                    <span>
                      Already have an account?{' '}
                      <button onClick={handleToggleForm} className="text-blue-500 hover:underline">
                        Sign In
                      </button>
                    </span>
                  ) : (
                    <span>
                      Don't have an account?{' '}
                      <button onClick={handleToggleForm} className="text-blue-500 hover:underline">
                        Sign Up
                      </button>
                    </span>
                  )}
                </p>
              </div>
            </div>
          )
        }
      />
      <Route
        path="/account"
        element={isAuthenticated ? <UserAccountPage /> : <Navigate to="/" />}
      />
    </Routes>
  );
};

export default AuthForm;
