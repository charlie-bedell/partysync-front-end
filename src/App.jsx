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
import Header from './components/Header/Header.jsx';

function App() {

  const location = useLocation(); // This hook returns the location object

  const locToName = {
    '/home': 'Home',
    '/user/login': 'Login',
    '/user/signup': 'Signup',
    '/messages': 'Messages',
    '/newparty': 'New Party',
    '/user/profile': 'Profile'
  };

  // Check if the current pathname is not the landing page
  const showNavBar = location.pathname !== '/' && location.pathname !== '/user/login' && location.pathname !== '/user/signup';

  const background = " bg-[url('https://media3.giphy.com/media/3o6Yg2fNFfEryQ7VPW/giphy.webp?cid=acd21440i3y38wd58ow2atqaww2ml3dspljosi9sqj65rvkd&ep=v1_gifs_search&rid=giphy.webp&ct=g')] bg-no-repeat bg-cover h-screen bg-scroll";
  
  return (
    <div className={'flex flex-col h-screen' + background}>
      {showNavBar && <header><Header text={locToName[location.pathname]}/></header>}
      <main className='flex-1 overflow-y-auto'>
      <Routes>
        <Route path="/" element={<Image />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/user/login" element={<Login />}></Route>
        <Route path="/user/signup" element={<Signup />}></Route>
        <Route path="/messages" element={<Messages />}/>
        <Route path="/newparty" element={<NewParty />}/>
        <Route path="/user/profile" element={<Profile />}/>
    </Routes>
    </main>
    {showNavBar && <footer><NavBar /></footer>} {/* Conditionally render NavBar */}
    </div>
  );
}

export default App;
