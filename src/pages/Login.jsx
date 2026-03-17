import InputField from "../components/InputField";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (field) => (e) => {
    setFormData({ ...formData, [field]: e.target.value });
  };

  const isFormValid =
    formData.email.trim() !== "" && formData.password.trim() !== "";

  const handleLogin = () => {
    const storedUser = JSON.parse(localStorage.getItem("user"));

    // Simple check (demo purpose)
    if (storedUser && formData.email === storedUser.email) {
      navigate("/account");
    } else {
      alert("User not found. Please register first.");
    }
  };

  return (
    <div className="login">
      <h2>
        Signin to your <br /> PopX account
      </h2>
      <p>
        Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit.
      </p>

      <InputField
        label="Email Address"
        placeholder="Enter email address"
        value={formData.email}
        onChange={handleChange("email")}
      />

      <InputField
        label="Password"
        placeholder="Enter password"
        type="password"
        value={formData.password}
        onChange={handleChange("password")}
      />

      <button
        className={isFormValid ? "primary-btn" : "disabled-btn"}
        onClick={handleLogin}
        disabled={!isFormValid}
      >
        Login
      </button>
    </div>
  );
}

export default Login;