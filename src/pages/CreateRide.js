import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const CreateRide = () => {
    const [name, setName] = useState('');
    const [terminal, setTerminal] = useState('');
    const [destination, setDestination] = useState('');
    const [departureTime, setDepartureTime] = useState('');
    const [arrivalTime, setArrivalTime] = useState('');
    const [seats, setSeats] = useState('');
    const [pricePerSeat, setPricePerSeat] = useState('');

    const [nameError, setNameError] = useState('');
    const [terminalError, setTerminalError] = useState('');
    const [destinationError, setDestinationError] = useState('');
    const [departureTimeError, setDepartureTimeError] = useState('');
    const [arrivalTimeError, setArrivalTimeError] = useState('');
    const [seatsError, setSeatsError] = useState('');
    const [pricePerSeatError, setPricePerSeatError] = useState('');

    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            navigate('/login');
        }
    }, [navigate]);

    const validateForm = () => {
        let isValid = true;

        if (!name) {
            setNameError('Name is required');
            isValid = false;
        } else {
            setNameError('');
        }

        if (!terminal) {
            setTerminalError('Terminal is required');
            isValid = false;
        } else {
            setTerminalError('');
        }

        if (!destination) {
            setDestinationError('Destination is required');
            isValid = false;
        } else {
            setDestinationError('');
        }

        if (!departureTime) {
            setDepartureTimeError('Departure time is required');
            isValid = false;
        } else {
            setDepartureTimeError('');
        }

        if (!arrivalTime) {
            setArrivalTimeError('Arrival time is required');
            isValid = false;
        } else {
            setArrivalTimeError('');
        }

        if (!seats || isNaN(seats) || seats <= 0) {
            setSeatsError('Valid number of seats is required');
            isValid = false;
        } else {
            setSeatsError('');
        }

        if (!pricePerSeat || isNaN(pricePerSeat) || pricePerSeat <= 0) {
            setPricePerSeatError('Valid price per seat is required');
            isValid = false;
        } else {
            setPricePerSeatError('');
        }

        return isValid;
    };

    const onButtonClick = async () => {
        if (!validateForm()) {
            return;
        }

        const rideDetails = {
            start_location: terminal,
            end_location: destination,
            departure_time: departureTime,
            arrival_time: arrivalTime,
            seats_available: Number(seats),
            price_per_seat: Number(pricePerSeat),
        };

        try {
            const token = localStorage.getItem('token');
            if (!token) {
                console.error('No token found, redirecting to login');
                navigate('/login');
                return;
            }

            const response = await fetch('http://localhost:3001/createRide', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`, // Include the token in the request header
                },
                body: JSON.stringify(rideDetails),
            });

            if (response.ok) {
                const result = await response.json();
                console.log('Ride created successfully:', result);
                // Reset form fields after successful submission
                setName('');
                setTerminal('');
                setDestination('');
                setDepartureTime('');
                setArrivalTime('');
                setSeats('');
                setPricePerSeat('');
            } else {
                const errorData = await response.json();
                console.error('Error creating ride:', errorData.error || response.statusText);
            }
        } catch (error) {
            console.error('Network error:', error);
        }
    };

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
            <section className="login">
                <h2>Create Ride</h2>

                <input
                    value={name}
                    placeholder="Enter your name here"
                    onChange={(ev) => setName(ev.target.value)}
                    className={'inputBox'}
                />
                <label className="errorLabel">{nameError}</label>

                <input
                    value={terminal}
                    placeholder="Enter your terminal here"
                    onChange={(ev) => setTerminal(ev.target.value)}
                    className={'inputBox'}
                />
                <label className="errorLabel">{terminalError}</label>

                <input
                    value={destination}
                    placeholder="Enter your destination here"
                    onChange={(ev) => setDestination(ev.target.value)}
                    className={'inputBox'}
                />
                <label className="errorLabel">{destinationError}</label>

                <input
                    value={departureTime}
                    type="datetime-local" // Use datetime-local for date and time selection
                    onChange={(ev) => setDepartureTime(ev.target.value)}
                    className={'inputBox'}
                />
                <label className="errorLabel">{departureTimeError}</label>

                <input
                    value={arrivalTime}
                    type="datetime-local" // Use datetime-local for date and time selection
                    onChange={(ev) => setArrivalTime(ev.target.value)}
                    className={'inputBox'}
                />
                <label className="errorLabel">{arrivalTimeError}</label>

                <input
                    value={seats}
                    placeholder="Enter your seats here"
                    onChange={(ev) => setSeats(ev.target.value)}
                    className={'inputBox'}
                />
                <label className="errorLabel">{seatsError}</label>

                <input
                    value={pricePerSeat}
                    placeholder="Enter price per seat"
                    onChange={(ev) => setPricePerSeat(ev.target.value)}
                    className={'inputBox'}
                />
                <label className="errorLabel">{pricePerSeatError}</label>

                <input className={'inputButton'} type="button" onClick={onButtonClick} value={'Create Ride'} />

            </section>
        </>
    );
}

export default CreateRide;
