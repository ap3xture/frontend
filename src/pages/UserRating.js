import { useState } from "react";

const UserRating = () => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleRatingClick = (rate) => {
    setRating(rate);
  };

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle the form submission logic (e.g., send the rating and comment to the server)
    console.log("Rating submitted:", rating, comment);
    setSubmitted(true);
  };

  return (
    <>
      <header>
        <nav className="navbar">
          <a className="logo" href="/">
            CarPool PK<span>.</span>
          </a>
          <ul className="menu-links">
            <li>
              <a href="/login">Login</a>
            </li>
            <li>
              <a href="/signup">Signup</a>
            </li>
          </ul>
        </nav>
      </header>
      <section className="rating">
        <h2>User Rating</h2>
        {submitted ? (
          <p>Thank you for your feedback!</p>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="rating-stars">
              {[1, 2, 3, 4, 5].map((rate) => (
                <span
                  key={rate}
                  className={`star ${rate <= rating ? "selected" : ""}`}
                  onClick={() => handleRatingClick(rate)}
                >
                  ★
                </span>
              ))}
            </div>
            <textarea
              value={comment}
              onChange={handleCommentChange}
              placeholder="Leave a comment"
              className="commentBox"
            />
            <input
              type="submit"
              value="Submit"
              className="submitButton"
            />
          </form>
        )}
      </section>
    </>
  );
};

export default UserRating;
