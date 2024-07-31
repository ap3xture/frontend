import { useState } from 'react';


const CreateRide = () => {
    const [name, setName] = useState('')
    const [terminal, setTerminal] = useState('')
    const [destination, setDestination] = useState('')
    const [date, setDate] = useState('')
    const [seats, setSeats] = useState('')
    const onButtonClick = () => {
        console.log("create rode button pressed")
    }
    const [nameError, setNameError] = useState('')
    const [terminalError, setterminalError] = useState('')
    const [destinationError, setDestinationError] = useState('')
    const [dateError, setDateError] = useState('')
    const [seatsError, setSeatsError] = useState('')

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
                    placeholder="Enter your date here"
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

                <input className={'inputButton'} type="button" onClick={onButtonClick} value={'Create Ride'} />

            </section>
        </>

    )
}

export default CreateRide;