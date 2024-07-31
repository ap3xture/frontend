import { useState } from "react"

const Signup = () => {
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const onButtonClick = () => {
        console.log("signup button pressed")
    }
    const [emailError, setEmailError] = useState('')
    const [passwordError, setPasswordError] = useState('')
    const [usernameError, setUsernameError] = useState('')

    return (
        <>
            <header>
                <nav className="navbar">
                    <a className="logo" href="/">CarPool PK<span>.</span></a>
                    <ul className="menu-links">
                        <li><a href="/login">Login</a></li>
                        <li><a href="/signup">Signup</a></li>
                    </ul>
                </nav>
            </header>
            <section className="login">
                <h2>Signup</h2>
                <input
                    value={email}
                    placeholder="Enter your email here"
                    onChange={(ev) => setEmail(ev.target.value)}
                    className={'inputBox'}
                />
                <label className="errorLabel">{emailError}</label>

                <input
                    value={username}
                    placeholder="Enter your username here"
                    onChange={(ev) => setUsername(ev.target.value)}
                    className={'inputBox'}
                />
                <label className="errorLabel">{usernameError}</label>

                <input
                    value={password}
                    placeholder="Enter your password here"
                    onChange={(ev) => setPassword(ev.target.value)}
                    className={'inputBox'}
                />
                <label className="errorLabel">{passwordError}</label>

                <input className={'inputButton'} type="button" onClick={onButtonClick} value={'Log in'} />

            </section>
        </>

    )
}

export default Signup