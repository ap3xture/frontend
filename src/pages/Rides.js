import { useState } from "react";

const Rides = () => {
    const [query, setQuery] = useState('');

    // Handle the search button click
    const handleSearch = () => {
        // You can add your search logic here
        console.log('Search query:', query);
        // For example, you can call an API to fetch search results
    };
    const rides = [
        { id: 1, name: 'John Doe', terminal: 'Terminal A', destination: 'City X', departureTime: '08:00 AM', seatsAvailable: 3 },
        { id: 2, name: 'Jane Smith', terminal: 'Terminal B', destination: 'City Y', departureTime: '09:30 AM', seatsAvailable: 2 },
        { id: 3, name: 'Alice Johnson', terminal: 'Terminal C', destination: 'City Z', departureTime: '11:15 AM', seatsAvailable: 1 },
    ];

    return (
        <>
            <header>
                <nav className="navbar">
                    <a className="logo" href="/">CarPool PK<span>.</span></a>
                    <ul className="menu-links">
                        <li><a>Username</a></li>
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
                            <li><a>My Rides</a></li>
                            <li><a href="/rides/"  style={{textDecoration:"none"}}>Avalaible Rides</a></li>
                            <li><a href="/rides/create-ride" style={{textDecoration:"none"}}>Create Rides</a></li>
                        </ul>
                    </div>
                    <div className="card-content">
                        <div className="ride">
                            <div class="table-container">
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Name</th>
                                            <th>Terminal</th>
                                            <th>Destination</th>
                                            <th>Departure time</th>
                                            <th>Seats Available</th>
                                            <th>Request Ride</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {rides.map(ride => (
                                            <tr key={ride.id}>
                                                <td>{ride.name}</td>
                                                <td>{ride.terminal}</td>
                                                <td>{ride.destination}</td>
                                                <td>{ride.departureTime}</td>
                                                <td>{ride.seatsAvailable}</td>
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
    )
}


export default Rides