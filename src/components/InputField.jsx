function InputField({ label, placeholder, type = "text" }) {
  return (
    <div className="input-group">
      <label>{label}</label>
      <input type={type} placeholder={placeholder} />
    </div>
  );
}

export default InputField;