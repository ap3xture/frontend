import { useState } from 'react';

const CreateRide = () => {
    const [name, setName] = useState('');
    const [terminal, setTerminal] = useState('');
    const [destination, setDestination] = useState('');
    const [date, setDate] = useState('');
    const [seats, setSeats] = useState('');
    const [pricePerSeat, setPricePerSeat] = useState('');

    const [nameError, setNameError] = useState('');
    const [terminalError, setTerminalError] = useState('');
    const [destinationError, setDestinationError] = useState('');
    const [dateError, setDateError] = useState('');
    const [seatsError, setSeatsError] = useState('');
    const [pricePerSeatError, setPricePerSeatError] = useState('');

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

        if (!date) {
            setDateError('Date is required');
            isValid = false;
        } else {
            setDateError('');
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
            name,
            terminal,
            destination,
            date,
            seats: Number(seats),
            pricePerSeat: Number(pricePerSeat),
        };

        try {
            const response = await fetch('http://localhost:3001/createRide', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
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
                setDate('');
                setSeats('');
                setPricePerSeat('');
            } else {
                console.error('Error creating ride:', response.statusText);
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
                    value={date}
                    type="date" // Changed to type="date" for better input experience
                    onChange={(ev) => setDate(ev.target.value)}
                    className={'inputBox'}
                />
                <label className="errorLabel">{dateError}</label>

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
