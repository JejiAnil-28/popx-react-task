import InputField from "../components/InputField";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  return (
    <div className="login">
      <h2>Signin to your <br />PopX account</h2>
      <p>Lorem ipsum dolor sit amet,<br /> consectetur adipiscing elit.</p>

      <InputField label="Email Address" placeholder="Enter email address" />
      <InputField label="Password" placeholder="Enter password" type="password" />

      <button
        className="disabled-btn"
        onClick={() => navigate("/account")}
      >
        Login
      </button>
    </div>
  );
}

export default Login;