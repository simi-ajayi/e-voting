import { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import AuthForm from './components/AuthForm';
import Arrowtothetop from './components/Arrowtothetop';
import Nominees from './components/Homepage';
import VoteCategory from './voting/VoteCategory';
import UserAccountPage from './components/UserAccountPage';
import AdminPage from './admin/AdminPage';
import Event from './admin/Events';
// import Landingpage from './components/Landingpage';
import ViewVotesPage from './voting/ViewVotes';
import TicketTransfer from './components/TicketTransfer';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Arrowtothetop />

          <Routes>
            {/* <Route path="/auth/*" element={<AuthForm setEvents={setEvents} />} />
            <Route path="/home/:eventId" element={<Nominees events={events} />} />
            <Route path="/votecategory" element={<VoteCategory />} /> */}
            <Route path="/account" element={<UserAccountPage />} />
            <Route path="/admin" element={<AdminPage/>} />
            <Route path="/" element={<TicketTransfer  />} />
            {/* <Route path="/view-votes/:eventId" element={<ViewVotesPage events={events} />} /> */}
          </Routes>
   
    </Router>
  );
};

export default App;