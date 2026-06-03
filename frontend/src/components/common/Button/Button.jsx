import "./Button.css";

const Button = ({
  children,
  onClick,
  type = "button",
  disabled = false,
}) => {
  return (
    <button
      className="tokyo-button"
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;