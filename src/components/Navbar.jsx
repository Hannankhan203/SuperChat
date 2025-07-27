import { Link } from "react-router-dom";
import AuthDetails from "./Auth/AuthDetails";

function Navbar() {
  return (
    <nav>
      <div>
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/signup">Sign Up</Link>
        <Link to="/chat">Chat</Link>
      </div>
      <AuthDetails />
    </nav>
  );
}

export default Navbar;