import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AuthForm from "./components/AuthForm";
import Arrowtothetop from './components/Arrowtothetop';
import Home from "./components/Home";
import VoteCategory from "./components/VoteCategory";
import UserAccountPage from "./components/UserAccountPage";
import { useState, useEffect } from 'react';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading objects (you can replace this with your actual loading logic)
    const loadObjects = async () => {
      await new Promise(resolve => setTimeout(resolve, 2000)); // Simulating a 2-second delay
      setIsLoading(false);
    };

    loadObjects();
  }, []);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-center">
          <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <p className="mt-4">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <Router>
      <Arrowtothetop />
      <Routes>
        <Route path="/" element={<AuthForm />} />
        <Route path="/ausa" element={<Home />} />
        <Route path="/votecategory" element={<VoteCategory />} />
        <Route path="/account" element={<UserAccountPage/>} />
      </Routes>
    </Router>
  );
};

export default App;