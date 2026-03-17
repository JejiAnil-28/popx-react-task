import InputField from "../components/InputField";

function Register() {
  return (
    <div className="register">
      <h2>Create your PopX account</h2>

      <InputField label="Full Name*" placeholder="Marry Doe" />
      <InputField label="Phone number*" placeholder="Marry Doe" />
      <InputField label="Email address*" placeholder="Marry Doe" />
      <InputField label="Password*" placeholder="Marry Doe" type="password" />
      <InputField label="Company name" placeholder="Marry Doe" />

      <div className="radio-section">
        <p className="radio-label">Are you an Agency?*</p>

        <div className="radio-group">
          <label>
            <input type="radio" name="agency" defaultChecked /> Yes
          </label>

          <label>
            <input type="radio" name="agency" /> No
          </label>
        </div>
      </div>

      <button className="primary-btn">Create Account</button>
    </div>
  );
}

export default Register;