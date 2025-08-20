
import React from "react";
import { Link } from "react-router-dom";
import { auth } from "../Components/firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import "/src/App.css";

export const Header = ({ user }) => {

  const navigate = useNavigate();

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/login");
  };

  return (
    <div>
      <div className="header">
        <h2 className="logo">Deadly</h2>
        <nav className="nav">
          <Link to="/" className="nav-link">Home</Link>
          {!user && <Link to="/register" className="nav-link">Register</Link>}
          {!user && <Link to="/login" className="nav-link">Login</Link>}
          {user && <Link to="/profile" className="nav-link">Profile</Link>}
          <button onClick={handleLogout} className="nav-link">Exit</button>
        </nav>
      </div>
    </div>
  );
};
