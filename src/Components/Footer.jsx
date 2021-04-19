import React from "react";

export default function Footer() {
  return (
    <div className="footer-container">
      <h5>
        &copy; {new Date().getFullYear()}
        <span> Attire-Fusion</span>
      </h5>
      <h5>All Rights Reserved</h5>
    </div>
  );
}
