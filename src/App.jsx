import { useState, useEffect } from 'react';
import { BrowserRouter as BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import AuthForm from './components/AuthForm';
import Arrowtothetop from './components/Arrowtothetop';
import Home from './components/Home';
import VoteCategory from './components/VoteCategory';
import UserAccountPage from './components/UserAccountPage';
import AdminPage from './components/AdminPage';


const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App = () => {
  const [events, setEvents] = useState([
    {
      id: 1,
      name: 'AUSA DINNER NIGHT',
      description: 'Join us for the annual AUSA dinner night, filled with delicious food and entertainment.',
      link: '/ausa',
    },
    {
      id: 2,
      name: 'AUSA SUMMER PICNIC',
      description: 'Celebrate the summer season with our community picnic. Enjoy games, food, and fun under the sun!',
      link: '/account',
    },
    // ... add more events here
  ]);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Arrowtothetop />
      <Routes>
        <Route path="*" element={<AuthForm />} />
        <Route path="/ausa" element={<Home />} />
        <Route path="/votecategory" element={<VoteCategory />} />
        <Route path="/account" element={<UserAccountPage events={events}/>} />
        <Route path="/admin" element={<AdminPage events={events} setEvents={setEvents} />} />
       
      </Routes>
    </BrowserRouter>
  );
};

export default App;