const Rides = () => {
    const rides = [
        { id: 1, name: 'John Doe', terminal: 'Terminal A', destination: 'City X', departureTime: '08:00 AM', seatsAvailable: 3 },
        { id: 2, name: 'Jane Smith', terminal: 'Terminal B', destination: 'City Y', departureTime: '09:30 AM', seatsAvailable: 2 },
        { id: 3, name: 'Alice Johnson', terminal: 'Terminal C', destination: 'City Z', departureTime: '11:15 AM', seatsAvailable: 1 },
        { id: 1, name: 'John Doe', terminal: 'Terminal A', destination: 'City X', departureTime: '08:00 AM', seatsAvailable: 3 },
        { id: 2, name: 'Jane Smith', terminal: 'Terminal B', destination: 'City Y', departureTime: '09:30 AM', seatsAvailable: 2 },
        { id: 3, name: 'Alice Johnson', terminal: 'Terminal C', destination: 'City Z', departureTime: '11:15 AM', seatsAvailable: 1 },
        { id: 1, name: 'John Doe', terminal: 'Terminal A', destination: 'City X', departureTime: '08:00 AM', seatsAvailable: 3 },
        { id: 2, name: 'Jane Smith', terminal: 'Terminal B', destination: 'City Y', departureTime: '09:30 AM', seatsAvailable: 2 },
        { id: 3, name: 'Alice Johnson', terminal: 'Terminal C', destination: 'City Z', departureTime: '11:15 AM', seatsAvailable: 1 },
        { id: 1, name: 'John Doe', terminal: 'Terminal A', destination: 'City X', departureTime: '08:00 AM', seatsAvailable: 3 },
        { id: 2, name: 'Jane Smith', terminal: 'Terminal B', destination: 'City Y', departureTime: '09:30 AM', seatsAvailable: 2 },
        { id: 3, name: 'Alice Johnson', terminal: 'Terminal C', destination: 'City Z', departureTime: '11:15 AM', seatsAvailable: 1 },
        { id: 1, name: 'John Doe', terminal: 'Terminal A', destination: 'City X', departureTime: '08:00 AM', seatsAvailable: 3 },
        { id: 2, name: 'Jane Smith', terminal: 'Terminal B', destination: 'City Y', departureTime: '09:30 AM', seatsAvailable: 2 },
        { id: 3, name: 'Alice Johnson', terminal: 'Terminal C', destination: 'City Z', departureTime: '11:15 AM', seatsAvailable: 1 },
        { id: 1, name: 'John Doe', terminal: 'Terminal A', destination: 'City X', departureTime: '08:00 AM', seatsAvailable: 3 },
        { id: 2, name: 'Jane Smith', terminal: 'Terminal B', destination: 'City Y', departureTime: '09:30 AM', seatsAvailable: 2 },
        { id: 3, name: 'Alice Johnson', terminal: 'Terminal C', destination: 'City Z', departureTime: '11:15 AM', seatsAvailable: 1 },
        { id: 1, name: 'John Doe', terminal: 'Terminal A', destination: 'City X', departureTime: '08:00 AM', seatsAvailable: 3 },
        { id: 2, name: 'Jane Smith', terminal: 'Terminal B', destination: 'City Y', departureTime: '09:30 AM', seatsAvailable: 2 },
        { id: 3, name: 'Alice Johnson', terminal: 'Terminal C', destination: 'City Z', departureTime: '11:15 AM', seatsAvailable: 1 },
        { id: 1, name: 'John Doe', terminal: 'Terminal A', destination: 'City X', departureTime: '08:00 AM', seatsAvailable: 3 },
        { id: 2, name: 'Jane Smith', terminal: 'Terminal B', destination: 'City Y', departureTime: '09:30 AM', seatsAvailable: 2 },
        { id: 3, name: 'Alice Johnson', terminal: 'Terminal C', destination: 'City Z', departureTime: '11:15 AM', seatsAvailable: 1 },
    ];

    return (
        <>
            <header>
                <nav className="navbar">
                    <a className="logo" href="/">Carpooling App<span>.</span></a>
                    <ul className="menu-links">
                        <li><a>Username</a></li>
                    </ul>
                </nav>
            </header>
            <section className="dashboard">
                <h3>Dashboard</h3>
                <div className="card">
                    <div className="card-header">
                        <h3>search</h3>
                        <ul>
                            <li><a>My Rides</a></li>
                            <li><a>Avalaible Rides</a></li>
                            <li><a>Create Rides</a></li>
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