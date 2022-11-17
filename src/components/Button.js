import { Link } from "react-router-dom";
import "./Button.css";

const STYLES = ["btn-primary", "btn-outline"];

export default function Button({ children, to, buttonStyle }) {
  const selectedButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];

  return (
    <Link to={to} className={`btn ${selectedButtonStyle}`}>
      {children}
    </Link>
  );
}