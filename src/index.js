import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter,RouterProvider  } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Rides from './pages/Rides';
import RideDetails from './pages/RideDetails';
import CreateRide from './pages/CreateRide';
import UserRating from './pages/UserRating';


const router = createBrowserRouter([
  {
    path:"/",
    element: <Home/>
  },
  {
    path:"/login",
    element: <Login/>
  },
  {
    path:"/signup",
    element: <Signup/>
  },
  {
    path:"/rides",
    element: <Rides />
  },
  {
    path: "/rides/:rideId",
    element: <RideDetails /> // Use the component that will handle displaying a specific ride
  },
  {
    path:"/rides/create-ride",
    element: <CreateRide/>
  },
  {
    path:"/rating/:userId",
    element:<UserRating/>
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
