import Header from '!/components/header/Header';
import About from '!/pages/about/About';
import Home from '!/pages/home/Home';
import Profile from '!/pages/profile/Profile';
import { Route, Routes } from 'react-router-dom';
import './App.css';

function App() {

  return (
    <>
      <Header />
        <Routes>
          <Route path="*" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
    </>
  )
}

export default App
