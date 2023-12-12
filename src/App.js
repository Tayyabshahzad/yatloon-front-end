import {AuthProvider, RequireAuth} from 'react-auth-kit'
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import RootLayout from './pages/layout';
import HomePage from './pages/home';
import AboutUs from './pages/home_group/about-us';
import HomeLayout from './pages/home_group/layout';
import Contact from './pages/home_group/contact';
import Login from './pages/login';
import NotFoundPage from './pages/Errors/404';
import Dashboard from './pages/Dashboard';
import SignUp from './pages/register';


function App() {
  return (
    <AuthProvider authName="auth" authType="localhost" >
        <BrowserRouter>
          <Routes>
            
            <Route path="/" element={<RootLayout />} >
                <Route path='/' element={<HomePage />} />
                <Route path='/dashboard' element={
                  <RequireAuth loginPath="/login">
                    <Dashboard />
                  </RequireAuth>
                } />
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<SignUp />} />
                <Route path='/' element={<HomeLayout />}>
                  <Route path='/about-us' element={<AboutUs />} />
                  <Route path='/contact' element={<Contact />} />
                </Route>
                <Route path='*' element={<NotFoundPage />} />
              </Route>
          </Routes>
        </BrowserRouter>
      </AuthProvider>
  );
}

export default App;
