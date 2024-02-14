// import { Routes, Route } from 'react-router';
import NavBar from './components/NavBar/NavBar.jsx';
import Login from './pages/Login/Login.jsx';
import Signup from './pages/Signup/Signup.jsx';
import Home from './pages/Home/Home.jsx';
import MyInvites from './pages/MyInvites/MyInvites.jsx';
import NewParty from './pages/NewParty/NewParty.jsx';
import Profile from './pages/Profile/Profile.jsx';
import Image from './pages/LandingPage/LandingPage.jsx';
import { Routes, Route, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { verifyUser } from './services/users.js';

function App() {

  const location = useLocation(); // This hook returns the location object

  // Check if the current pathname is not the landing page
  const showNavBar = location.pathname !== '/' && location.pathname !== '/user/login' && location.pathname !== '/user/signup';

  const [user, setUser] = useState(null);

  const updateUser = (update) => {
    setUser(update);
  };

  useEffect(() => {
    const fetchUser = async () => {
      const user = await verifyUser();
      user ? setUser(user) : setUser(null);
    };

    fetchUser();
  }, []);


  return (
    <div className='flex flex-col h-full'>
      <Routes>
        <Route path="/" element={<Image />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/user/login" element={<Login setUser={setUser}/>}></Route>
        <Route path="/user/signup" element={<Signup updateUser={updateUser} />}></Route>
        <Route path="/myinvites" element={<MyInvites />}/>
        <Route path="/newparty" element={<NewParty />}/>
        <Route path="/user/profile" element={<Profile />}/>
      </Routes>
      {showNavBar && <NavBar />} {/* Conditionally render NavBar */}
    </div>
  );
}

export default App;
