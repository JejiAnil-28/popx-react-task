import { useNavigate } from "react-router-dom";

function Welcome() {
  const navigate = useNavigate();

  return (
    <div className="welcome">
      <div>
        <h2>Welcome to PopX</h2>
        <p>Lorem ipsum dolor sit amet,<br /> consectetur adipiscing elit.</p>

        <button
          className="primary-btn"
          onClick={() => navigate("/register")}
        >
          Create Account
        </button>

        <button
          className="secondary-btn"
          onClick={() => navigate("/login")}
        >
          Already Registered? Login
        </button>
      </div>
    </div>
  );
}

export default Welcome;