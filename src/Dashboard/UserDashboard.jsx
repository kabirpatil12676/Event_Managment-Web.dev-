import React from "react";
import {
  FaCalendarAlt,
  FaSearch,
  FaPen,
  FaClipboardList,
} from "react-icons/fa";
import "./Dashboard.css";

const UserDashboard = () => {
  return (
    <div className="dashboard-container">
      <h1 className="dashboard-heading">👤 User Dashboard</h1>
      <div className="dashboard-card">
        <ul>
          <li><FaCalendarAlt /> View upcoming events</li>
          <li><FaSearch /> Browse & search events</li>
          <li><FaPen /> Register for events</li>
          <li><FaClipboardList /> View registration history</li>
        </ul>
      </div>
    </div>
  );
};

export default UserDashboard;
