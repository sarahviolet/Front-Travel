import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
  Link
} from "react-router-dom";
import HomePage from './components/views/home/HomePage';
import BookingPage from './components/views/booking/BookingPage';
import LoginPage from './components/views/login/LoginPage';
import RegisterPage from './components/views/register/RegisterPage';
import { CheckLogin } from './auth/auth';
import Nav from './components/views/nav/Nav';
import TripPage from './components/views/trip/TripPage';
import AboutPage from './components/views/about/AboutPage';



const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/about",
    element: <AboutPage />,
  },
  {
    path: "/booking",
    element: <BookingPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/trip",
    element: <TripPage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <div className='header-wrapper'>
      <header>
      <div className="logo2_wrapper">
          <img src='images/team.png' className='logo2_image' />
        </div>
        <div className="logo1_wrapper">
        <a href={`/`}>
          <img src='images/blue2.png' className='logo_image' />
          </a>
        </div>
        <Nav />
      </header>
    </div>
  
  <RouterProvider router={router} />

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
