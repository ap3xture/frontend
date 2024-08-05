import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Rides = () => {
  const [query, setQuery] = useState('');
  const [rides, setRides] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    // Check if the user is logged in
    const token = localStorage.getItem('token');
    const storedUsername = localStorage.getItem('username');

    if (!token) {
      // Redirect to login if no token found
      navigate('/login');
    } else {
      setIsLoggedIn(true);
      setUsername(storedUsername);

      // Fetch rides from the server
      const fetchRides = async () => {
        try {
          const response = await fetch('http://localhost:3001/rides', {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });

          if (response.ok) {
            const data = await response.json();
            setRides(data);
          } else {
            console.error('Error fetching rides:', response.statusText);
          }
        } catch (error) {
          console.error('Network error:', error);
        }
      };

      fetchRides();
    }
  }, [navigate]);

  // Handle the search button click
  const handleSearch = () => {
    // You can add your search logic here
    console.log('Search query:', query);
    // For example, you can call an API to fetch search results
  };

  // Handle logout
  const handleLogout = () => {
    // Clear the token from local storage
    localStorage.removeItem("token");
    localStorage.removeItem("username");

    setIsLoggedIn(false);
    setUsername("");

    // Redirect to home or login page
    navigate('/');  // Redirect to the home page or '/login'
  };

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
      <section className="dashboard">
        <h3>Dashboard</h3>
        <div className="card">
          <div className="card-header">
            <div className="search-container">
              <input
                type="text"
                placeholder="Search..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="search-input" // Add unique class names
              />
              <button onClick={handleSearch} className="button search-button">
                Search
              </button>
            </div>
            <ul>
              <li><a href="/my-rides" style={{ textDecoration: "none" }}>My Rides</a></li>
              <li><a href="/rides" style={{ textDecoration: "none" }}>Available Rides</a></li>
              <li><a href="/rides/create-ride" style={{ textDecoration: "none" }}>Create Ride</a></li>
            </ul>
          </div>
          <div className="card-content">
            <div className="ride">
              <div className="table-container">
                <table>
                  <thead>
                    <tr>
                      <th>Driver Name</th>
                      <th>Terminal</th>
                      <th>Destination</th>
                      <th>Departure Time</th>
                      <th>Seats Available</th>
                      <th>Price Per Seat</th>
                      <th>Request Ride</th>
                    </tr>
                  </thead>
                  <tbody>
                    {rides.map((ride) => (
                      <tr key={ride.ride_id}>
                        <td>{ride.driver_name}</td>
                        <td>{ride.start_location}</td>
                        <td>{ride.end_location}</td>
                        <td>{ride.departure_time}</td>
                        <td>{ride.seats_available}</td>
                        <td>{ride.price_per_seat}</td>
                        <td><button>Request</button></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Rides;
