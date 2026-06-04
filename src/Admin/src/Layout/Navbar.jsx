import { useState } from "react";
import "./Navbar.css";

function Navbar({ title = "Dashboard" }) {
  const [notifOpen, setNotifOpen] = useState(false);

  return (
    <header className="navbar">
      <h1 className="navbar-title">{title}</h1>

      <div className="navbar-right">
        <div className="notif-wrapper">
          <button
            className="notif-btn"
            onClick={() => setNotifOpen(!notifOpen)}
            aria-label="Notifications"
          >
            🔔
            <span className="notif-badge">3</span>
          </button>

          {notifOpen && (
            <div className="notif-dropdown">
              <p className="notif-heading">Notifications</p>
              <div className="notif-item">New enquiry from Rahul Patil</div>
              <div className="notif-item">Consultation scheduled – Priya D.</div>
              <div className="notif-item">New partner request received</div>
            </div>
          )}
        </div>

        <div className="admin-avatar">AD</div>
      </div>
    </header>
  );
}

export default Navbar;
