import { HashRouter as BrowserRouter, Routes, Route } from "react-router-dom"
import AuthForm from "./components/AuthForm";
import Arrowtothetop from './components/Arrowtothetop';
import Home from "./components/Home";
import VoteCategory from "./components/VoteCategory";
import UserAccountPage from "./components/UserAccountPage";

const App = () => {
  return (
    <BrowserRouter scrollRestoration="auto">
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