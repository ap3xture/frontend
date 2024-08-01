import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Rides = () => {
    const [query, setQuery] = useState('');
    const [rides, setRides] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        // Check if the user is logged in
        const token = localStorage.getItem('token');
        if (!token) {
            // Redirect to login if no token found
            navigate('/login');
        } else {
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

    return (
        <>
            <header>
                <nav className="navbar">
                    <a className="logo" href="/">CarPool PK<span>.</span></a>
                    <ul className="menu-links">
                        <li><a href="/profile">Profile</a></li>
                        <li><a href="/logout">Logout</a></li>
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
                            <li><a href="/my-rides" style={{textDecoration:"none"}}>My Rides</a></li>
                            <li><a href="/rides" style={{textDecoration:"none"}}>Available Rides</a></li>
                            <li><a href="/rides/create-ride" style={{textDecoration:"none"}}>Create Ride</a></li>
                        </ul>
                    </div>
                    <div className="card-content">
                        <div className="ride">
                            <div className="table-container">
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Name</th>
                                            <th>Terminal</th>
                                            <th>Destination</th>
                                            <th>Departure Time</th>
                                            <th>Seats Available</th>
                                            <th>Request Ride</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {rides.map((ride) => (
                                            <tr key={ride.id}>
                                                <td>{ride.name}</td>
                                                <td>{ride.terminal}</td>
                                                <td>{ride.destination}</td>
                                                <td>{ride.departure_time}</td>
                                                <td>{ride.seats_available}</td>
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
