import { Routes, Route } from 'react-router';
import NavBar from './components/NavBar/NavBar.jsx';
import Login from './pages/Login/Login.jsx';
import Signup from './pages/Signup/Signup.jsx';
import Home from './pages/Home/Home.jsx';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/user/login" element={<Login />}></Route>
        <Route path="/user/signup" element={<Signup />}></Route>
      </Routes>
    </>
  );
}

export default App;
