import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AuthForm from "./components/AuthForm";
// import Navbar from "./components/Navbar";
import Arrowtothetop from './components/Arrowtothetop';
import Home from "./components/Home";
import VoteCategory from "./components/VoteCategory";
import UserAccountPage from "./components/UserAccountPage";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    setTimeout(() => {
      setLoading(false); // Set loading to false after the timeout
    }, 2000); // Adjust the timeout as needed
  }, []);

  if (loading) {
    // Render a loading indicator
    return <div>Loading...</div>;
  }

  return (
    <Router>
      {/* <Navbar /> */}
      <Arrowtothetop />
      <Routes>
        <Route path="/" element={<AuthForm />} /> {/* Auth page as the first page */}
        <Route path="/ausa" element={<Home />} />
        <Route path="/votecategory" element={<VoteCategory />} />
        <Route path="/account" element={<UserAccountPage/>} />
      </Routes>
    </Router>
  );
};

export default App;
