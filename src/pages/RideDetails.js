import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const RideDetails = () => {
  const { rideId } = useParams(); // Get ride ID from the URL
  const [ride, setRide] = useState(null);
  const [error, setError] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    const storedUsername = localStorage.getItem("username");

    if (!token) {
      navigate('/login'); // Redirect to login if no token found
    } else {
      setIsLoggedIn(true);
      setUsername(storedUsername);

      // Fetch ride details from the server
      const fetchRideDetails = async () => {
        try {
          const response = await fetch(`http://localhost:3001/rides/${rideId}`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });

          if (response.ok) {
            const data = await response.json();
            setRide(data);
          } else {
            console.error('Error fetching ride details:', response.statusText);
            setError('Error fetching ride details.');
          }
        } catch (error) {
          console.error('Network error:', error);
          setError('Network error while fetching ride details.');
        }
      };

      fetchRideDetails();
    }
  }, [rideId, navigate]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");

    setIsLoggedIn(false);
    setUsername("");

    // Redirect to home page after logout
    navigate('/');
  };

  if (error) {
    return <div>{error}</div>;
  }

  if (!ride) {
    return <div>Loading ride details...</div>;
  }

  return (
    <>
      <header>
        <nav className="navbar">
          <a className="logo" href="/">CarPool PK<span>.</span></a>
          <ul className="menu-links">
            {isLoggedIn ? (
              <>
                <li>{username}</li>
                <li>
                  <button onClick={handleLogout}>Logout</button>
                </li>
              </>
            ) : (
              <>
                <li><a href="/login">Login</a></li>
                <li><a href="/signup">Signup</a></li>
              </>
            )}
          </ul>
        </nav>
      </header>
      <section className="ride-details">
        <h2>Ride Details</h2>
        <div className="ride-info">
          <p><strong>Driver Name:</strong> {ride.driver_name}</p>
          <p><strong>Start Location:</strong> {ride.start_location}</p>
          <p><strong>End Location:</strong> {ride.end_location}</p>
          <p><strong>Departure Time:</strong> {ride.departure_time}</p>
          <p><strong>Arrival Time:</strong> {ride.arrival_time}</p>
          <p><strong>Seats Available:</strong> {ride.seats_available}</p>
          <p><strong>Price Per Seat:</strong> {ride.price_per_seat}</p>
          <p><strong>Status:</strong> {ride.ride_status}</p>
          <button>Request Ride</button>
        </div>
      </section>
    </>
  );
};

export default RideDetails;
