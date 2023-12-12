import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import RootLayout from './pages/layout';
import HomePage from './pages/home';
import AboutUs from './pages/home_group/about-us';
import HomeLayout from './pages/home_group/layout';
import Contact from './pages/home_group/contact';
import Login from './pages/login';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout />} >
          <Route path='/' element={<HomePage />} />
          <Route path='/login' element={<Login />} />
          <Route path='/' element={<HomeLayout />}>
            <Route path='/about-us' element={<AboutUs />} />
            <Route path='/contact' element={<Contact />} />
          </Route>
        </Route>
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
