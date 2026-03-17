import InputField from "../components/InputField";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
    company: "",
    agency: "yes",
  });

  const handleChange = (field) => (e) => {
    setFormData({ ...formData, [field]: e.target.value });
  };

  const handleRegister = () => {
  const userData = {
    name: formData.name,
    email: formData.email,
  };

  // Save to localStorage
  localStorage.setItem("user", JSON.stringify(userData));

  // Navigate
  navigate("/account");
};

  return (
    <div className="register">
      <h2>Create your PopX account</h2>

      <InputField
        label="Full Name*"
        placeholder="Enter name"
        value={formData.name}
        onChange={handleChange("name")}
      />

      <InputField
        label="Phone number*"
        placeholder="Enter phone"
        value={formData.phone}
        onChange={handleChange("phone")}
      />

      <InputField
        label="Email address*"
        placeholder="Enter email"
        value={formData.email}
        onChange={handleChange("email")}
      />

      <InputField
        label="Password*"
        placeholder="Enter password"
        type="password"
        value={formData.password}
        onChange={handleChange("password")}
      />

      <InputField
        label="Company name"
        placeholder="Enter company"
        value={formData.company}
        onChange={handleChange("company")}
      />

      <div className="radio-section">
        <p className="radio-label">Are you an Agency?*</p>

        <div className="radio-group">
          <label>
            <input
              type="radio"
              name="agency"
              value="yes"
              checked={formData.agency === "yes"}
              onChange={handleChange("agency")}
            />
            Yes
          </label>

          <label>
            <input
              type="radio"
              name="agency"
              value="no"
              checked={formData.agency === "no"}
              onChange={handleChange("agency")}
            />
            No
          </label>
        </div>
      </div>

      <button className="primary-btn" onClick={handleRegister}>
        Create Account
      </button>
    </div>
  );
}

export default Register;