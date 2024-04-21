import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar">
      <p>
        <Link to="/">Home</Link>
      </p>
      <p>
        <Link to="/about">About</Link>
      </p>
      <p>
        <Link to="/support">Support</Link>
      </p>
      <p>
        <Link to="/contributions">Contributions</Link>
      </p>
    </div>
  );
}
