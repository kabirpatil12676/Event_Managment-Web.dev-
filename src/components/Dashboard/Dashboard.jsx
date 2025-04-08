import React from "react";
import { useNavigate } from "react-router-dom";
import {
  FaCalendarAlt,
  FaSearch,
  FaPen,
  FaClipboardList,
  FaPlus,
  FaEdit,
  FaTrash,
  FaChartBar,
  FaUsers,
} from "react-icons/fa";
import "./Dashboard.css";

// 🔁 Simulate userRole - Replace with real auth later
const userRole = "enduser"; // Change to "enduser" for testing user view

const Dashboard = () => {
  const navigate = useNavigate();

  const events = [
    { id: 1, title: "Tech Conference", description: "Latest in tech.", status: "Pending for Payment" },
    { id: 2, title: "AI Summit", description: "Exploring AI trends.", status: "Registered" },
  ];

  // Admin Functions (Simulated)
  const handleCreate = () => alert("Create Event Clicked");
  const handleEdit = (id) => alert(`Edit Event ID: ${id}`);
  const handleDelete = (id) => alert(`Delete Event ID: ${id}`);

  return (
    <div className="dashboard-container">
      <h1 className="dashboard-heading">
        {userRole === "admin" ? "👨‍💼 Admin Dashboard" : "👤 User Dashboard"}
      </h1>

      {/* Admin-specific actions */}
      {userRole === "admin" && (
        <div className="admin-actions">
          <button className="create-btn" onClick={handleCreate}>
            <FaPlus /> Create Event
          </button>
        </div>
      )}

      {/* Event Cards */}
      <div className="dashboard-card">
        {events.map((event) => (
          <div key={event.id} className="event-box">
            <h3>{event.title}</h3>
            <p>{event.description}</p>
            <p>Status: {event.status}</p>

            {userRole === "enduser" && (
              <>
                {event.status === "Pending for Payment" && (
                  <>
                    <button onClick={() => navigate("/payment")}>💳 Make Payment</button>
                    <button onClick={() => navigate("/download")}>📥 Download Ticket</button>
                  </>
                )}
              </>
            )}

            {userRole === "admin" && (
              <div className="admin-controls">
                <button onClick={() => handleEdit(event.id)}>
                  <FaEdit /> Edit
                </button>
                <button onClick={() => handleDelete(event.id)}>
                  <FaTrash /> Delete
                </button>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Extra Admin Stats */}
      {userRole === "admin" && (
        <div className="dashboard-stats">
          <ul>
            <li><FaChartBar /> View analytics</li>
            <li><FaUsers /> Manage registrations</li>
          </ul>
        </div>
      )}

      {/* Extra User Features */}
      {userRole === "enduser" && (
        <ul>
          <li><FaCalendarAlt /> View upcoming events</li>
          <li><FaSearch /> Browse & search events</li>
          <li><FaPen /> Register for events</li>
          <li><FaClipboardList /> View registration history</li>
        </ul>
      )}
    </div>
  );
};

export default Dashboard;
