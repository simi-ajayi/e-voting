/* eslint-disable react/no-unescaped-entities */
import { Routes, Route, Navigate } from 'react-router-dom';
import { useState } from 'react';
import useSignUp from '../hooks/useSignup';
import useSignIn from '../hooks/useSignin';
import UserAccountPage from './UserAccountPage';
import Logo from '../assets/logo.png';
import AdminPage from './AdminPage';

const AuthForm = () => {
  const [isSignUp, setIsSignUp] = useState(false); // Set isSignUp to false initially
  const { signUpData, handleSignUpChange, handleSignUp } = useSignUp();
  const { signInData, handleSignInChange, handleSignIn, error, isLoading } = useSignIn();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSignUp) {
      await handleSignUp();
      setIsAuthenticated(true);
    } else {
      const { isAdmin: admin } = await handleSignIn(); // Destructure isAdmin from the return value
      setIsAdmin(admin);
      setIsAuthenticated(true);
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
            isAdmin ? (
              <Navigate to="/admin" />
            ) : (
              <Navigate to="/account" />
            )
          ) : (
            <div className="flex flex-col md:flex-row h-screen">
              <div className="w-full py-52 md:py-8 md:w-1/2 bg-gray-100 flex justify-center items-center relative">
                <img src={Logo} alt="Logo" className="absolute left-7 top-10 w-24 h-18" />
                <div className="md:w-[500px] w-[370px] px-4">
                  <div className='w-full pl-[25%]'><h2 className="w-full  text-gray-700 text-5xl font-bold font-['Inter'] leading-[48px] mb-20">{isSignUp ? 'Sign Up' : 'Sign In'}</h2></div>
                  {error && <p className="text-red-500 mb-4">{error}</p>}
                  <form onSubmit={handleSubmit}>
                    {isSignUp && (
                      <input
                        type="text"
                        name="username"
                        placeholder="Username"
                        value={signUpData.username}
                        onChange={handleSignUpChange}
                        className="w-full p-3 mb-4 border border-gray-300 rounded-3xl focus:outline-none"
                      />
                    )}
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      value={isSignUp ? signUpData.email : signInData.email}
                      onChange={isSignUp ? handleSignUpChange : handleSignInChange}
                      className="w-full p-3 mb-4 border border-gray-300 rounded-3xl focus:outline-none"
                    />
                    <input
                      type="password"
                      name="password"
                      placeholder="Password"
                      value={isSignUp ? signUpData.password : signInData.password}
                      onChange={isSignUp ? handleSignUpChange : handleSignInChange}
                      className="w-full p-3 mb-4 border border-gray-300 rounded-3xl focus:outline-none"
                    />
                   <button
                      type="submit"
                         className="w-full bg-[#2e9196] text-white py-2 hover:bg-[#38A8AD] rounded-xl flex items-center justify-center"
                     disabled={isLoading}
>
  {isLoading ? (
    <svg
      className="animate-spin h-5 w-5 mr-3"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      ></circle>
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      ></path>
    </svg>
    
  ) : isSignUp ? (
    'Sign Up'
  ) : (
    'Sign In'
  )}
</button>
                  </form>
                  <p className="mt-4 text-center">
                    {isSignUp ? (
                      <span className="text-gray-400 text-base font-normal font-['Inter'] leading-[27px]">
                        Already have an account?{' '}
                        <button
                          onClick={handleToggleForm}
                          className="text-gray-700 text-base font-medium font-['Inter'] underline leading-[27px]"
                        >
                          Sign In
                        </button>
                      </span>
                    ) : (
                      <span className="text-gray-400 text-base font-normal font-['Inter'] leading-[27px]">
                        Don't have an account?{' '}
                        <button
                          onClick={handleToggleForm}
                          className="text-gray-700 text-base font-medium font-['Inter'] underline leading-[27px]"
                        >
                          Create now
                        </button>
                      </span>
                    )}
                  </p>
                </div>
              </div>
              <div className="w-full md:w-1/2 bg-gradient-to-tr from-gray-500 via-gray-300 to-gray-500 flex justify-center items-center md:block relative">
                {/* <img src={Logo} alt="Logo" className="absolute top-4 left-4 w-12 h-12" /> */}
                <div className="w-[525px] h-[334px] relative bg-slate-50 rounded-[10px] md:block hidden mx-auto mt-48">
                  <div className="w-[386px] h-[103px] left-[44px] top-[109px] absolute text-gray-400 text-base font-medium font-['Inter'] leading-7">
                    Cribbers Awards streamlines the voting process for your award show and events, making it easy for participants to cast their votes and contribute to the selection of winners.
                  </div>
                  <div className="w-[300px] h-[99px] left-[44px] top-[36px] absolute text-gray-400 text-2xl font-bold font-['Inter']">
                    Cribbers, vote for your winners instantly!
                  </div>
                </div>
              </div>
            </div>
          )
        }
      />
      <Route
        path="/account"
        element={isAuthenticated && !isAdmin ? <UserAccountPage /> : <Navigate to="/" />}
      />
      {/* Add a new route for the admin page */}
      <Route
        path="/admin"
        element={isAuthenticated && isAdmin ? <AdminPage /> : <Navigate to="/" />}
      />
    </Routes>
  );
};

export default AuthForm;