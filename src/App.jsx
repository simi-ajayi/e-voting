import { useEffect } from "react";
import { BrowserRouter as BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import AuthForm from "./components/AuthForm";
import Arrowtothetop from './components/Arrowtothetop';
import Home from "./components/Home";
import VoteCategory from "./components/VoteCategory";
import UserAccountPage from "./components/UserAccountPage";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Arrowtothetop />
      <Routes>
        <Route path="/" element={<AuthForm />} />
        <Route path="/ausa" element={<Home />} />
        <Route path="/votecategory" element={<VoteCategory />} />
        <Route path="/account" element={<UserAccountPage/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
