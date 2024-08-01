import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");

  useEffect(() => {
    // Check if the user is already logged in
    const token = localStorage.getItem("token");
    const storedUsername = localStorage.getItem("username");

    if (token && storedUsername) {
      setIsLoggedIn(true);
      setUsername(storedUsername);
    }
  }, []);

  const handleLogout = () => {
    // Clear the token from local storage
    localStorage.removeItem("token");
    localStorage.removeItem("username");

    setIsLoggedIn(false);
    setUsername("");
  };

  return (
    <>
      <header>
        <nav className="navbar">
          <a className="logo" href="/">
            CarPool PK<span>.</span>
          </a>
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
                <li>
                  <a href="/login">Login</a>
                </li>
                <li>
                  <a href="/signup">Signup</a>
                </li>
              </>
            )}
          </ul>
        </nav>
      </header>
      <section className="hero-section">
        <div className="content">
          <h1>
            Share<span>.</span> Save<span>.</span> Go Green<span>.</span>{" "}
            CarPool PK<span>.</span>
          </h1>
          <p>
            Start your journey towards eco-friendly commuting with CarPool PK,
            where every shared ride means less traffic, lower costs, and a
            greener planet. Share. Save. Go Green.
          </p>
          <button
            onClick={() => {
              navigate("/rides");
            }}
          >
            Find a Ride
          </button>
        </div>
      </section>
    </>
  );
};

export default Home;
