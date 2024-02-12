// import { Routes, Route } from 'react-router';
import NavBar from './components/NavBar/NavBar.jsx';
import Login from './pages/Login/Login.jsx';
import Signup from './pages/Signup/Signup.jsx';
import Home from './pages/Home/Home.jsx';
import Messages from './pages/Messages/Messages.jsx';
import NewParty from './pages/NewParty/NewParty.jsx';
import Profile from './pages/Profile/Profile.jsx';
import Image from './pages/LandingPage/LandingPage.jsx';
import { Routes, Route, useLocation } from 'react-router-dom';

function App() {

  const location = useLocation(); // This hook returns the location object

  // Check if the current pathname is not the landing page
  const showNavBar = location.pathname !== '/';

  return (
    <>
      <Routes>
        <Route path="/" element={<Image />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/user/login" element={<Login />}></Route>
        <Route path="/user/signup" element={<Signup />}></Route>
        <Route path="/messages" element={<Messages />}/>
        <Route path="/newparty" element={<NewParty />}/>
        <Route path="/user/profile" element={<Profile />}/>
      </Routes>
      {showNavBar && <NavBar />} {/* Conditionally render NavBar */}
    </>
  );
}

export default App;
