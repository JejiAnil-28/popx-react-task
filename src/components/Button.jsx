const Button = ({ text, onClick, primary }) => {
  return (
    <button
      onClick={onClick}
      style={{
        width: "100%",
        padding: "14px",
        borderRadius: "8px",
        border: "none",
        marginTop: "10px",
        background: primary
          ? "linear-gradient(90deg, #6a11cb, #2575fc)"
          : "#d1c4e9",
        color: primary ? "#fff" : "#000",
        fontWeight: "bold",
      }}
    >
      {text}
    </button>
  );
};

export default Button;