import {AuthProvider } from 'react-auth-kit'
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
import SignUp from './pages/register';
import CoursePage from './pages/Courses/CoursePage';
import TrialRequest from './pages/trial/trialRequest';
import RequireAuth from './components/RequireAuth';
import StudentDashboard from './pages/Dashboard/Student';
import MyTrialRequests from './pages/trial/trialRequest/my/my-requests';
import Meeting from './pages/Meeting';
import StudentDashboardLayout from './pages/Dashboard/Student/layout';
import TeacherDashboardLayout from './pages/Dashboard/Teacher/layout';
import TeacherDashboard from './pages/Dashboard/Teacher';
import AdminDashboardLayout from './pages/Dashboard/Admin/layout';
import AdminTrialRequests from './pages/Dashboard/Admin/Requests/trial_request';
import AdminDashboard from './pages/Dashboard/Admin';
import TeacherRequests from './pages/Dashboard/Teacher/Request';



function App() {
  
  return (
    <AuthProvider authName="auth" authType="localhost" >
      
          <BrowserRouter>
            <Routes>
              
              <Route path="/" element={<RootLayout />} >
                  <Route path='/' element={<HomePage />} />
                  
                  <Route path='/login' element={<Login />} />
                  <Route path='/register' element={<SignUp />} />
                  
                      <Route path='/' element={<HomeLayout />}>
                        <Route path='/about-us' element={<AboutUs />} />
                        <Route path='/contact' element={<Contact />} />
                        <Route path='courses/:courseId' element={<CoursePage />} />
                        <Route path='/trial-request' element={
                          <RequireAuth loginPath="/login">
                            <TrialRequest />
                          </RequireAuth>
                        } />
                      </Route>

                  <Route path='/student' element={<StudentDashboardLayout />}>
                      <Route path='/student/dashboard' element={
                        <RequireAuth loginPath="/login">
                          <StudentDashboard />
                        </RequireAuth>
                      } />
                      <Route path='/student/trial-request/my' element={
                        <RequireAuth loginPath="/login">
                          <MyTrialRequests />
                        </RequireAuth>
                      } />
                  </Route>

                  <Route path='/teacher' element={<TeacherDashboardLayout />}>
                      <Route path='/teacher/dashboard' element={
                        <RequireAuth loginPath="/login">
                          <TeacherDashboard />
                        </RequireAuth>
                      } />

                      <Route path='/teacher/requests' element={
                        <RequireAuth loginPath="/login">
                          <TeacherRequests />
                        </RequireAuth>
                      } />
                  </Route>


                  <Route path='/admin' element={<AdminDashboardLayout />}>
                      <Route path='/admin/dashboard' element={
                        <RequireAuth loginPath="/login">
                          <AdminDashboard />
                        </RequireAuth>
                      } />

                      <Route path='/admin/trial-requests' element={
                        <RequireAuth loginPath="/login">
                          <AdminTrialRequests />
                        </RequireAuth>
                      } />
                  </Route>
                  
                  
                  <Route path='*' element={<NotFoundPage />} />
                  <Route path='/404' element={<NotFoundPage />} />
                </Route>
                <Route path='/meeting' element={<Meeting />} />
            </Routes>
          </BrowserRouter>
      </AuthProvider>
  );
}

export default App;
