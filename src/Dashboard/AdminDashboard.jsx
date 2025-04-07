import React from "react";
import {
  FaPlus,
  FaTools,
  FaChartBar,
  FaUsers,
} from "react-icons/fa";
import "./Dashboard.css";

const AdminDashboard = () => {
  return (
    <div className="dashboard-container">
      <h1 className="dashboard-heading">👨‍💼 Admin Dashboard</h1>
      <div className="dashboard-card">
        <ul>
          <li><FaPlus /> Create new events</li>
          <li><FaTools /> Edit or delete events</li>
          <li><FaChartBar /> View analytics (no. of attendees, etc.)</li>
          <li><FaUsers /> Manage registrations</li>
        </ul>
      </div>
    </div>
  );
};

export default AdminDashboard;
