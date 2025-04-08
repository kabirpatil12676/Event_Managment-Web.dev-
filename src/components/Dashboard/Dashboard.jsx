import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaSearch,
  FaEdit,
  FaTrash,
  FaPlus,
} from "react-icons/fa";
import "./Dashboard.css";

const userRole = "admin"; // Change to "enduser" for testing user view

const Dashboard = () => {
  const navigate = useNavigate();

  const [events, setEvents] = useState([
    { id: 1, title: "Tech Conference", description: "Latest in tech." },
    { id: 2, title: "AI Summit", description: "Exploring AI trends." },
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [newEvent, setNewEvent] = useState({ title: "", description: "", date: "" });

  const handleCreateEvent = () => {
    if (newEvent.title && newEvent.description && newEvent.date) {
      setEvents([...events, { id: Date.now(), ...newEvent }]);
      setNewEvent({ title: "", description: "", date: "" });
      setShowCreateForm(false);
    }
  };

  const handleDelete = (id) => {
    setEvents(events.filter((e) => e.id !== id));
  };

  const handleEdit = (id) => {
    alert(`Edit Event ID: ${id}`); // Replace with actual logic
  };

  const filteredEvents = events.filter((e) =>
    e.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="dashboard-container">
      <h2 className="dashboard-heading">
        {userRole === "admin" ? "Admin Dashboard" : "User Dashboard"}
      </h2>

      {userRole === "enduser" && (
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search Events..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      )}

      {userRole === "admin" && (
        <div style={{ textAlign: "center", marginBottom: "1rem" }}>
          <button onClick={() => setShowCreateForm(!showCreateForm)}>
            <FaPlus /> Create Event
          </button>
        </div>
      )}

      {showCreateForm && (
        <div className="create-form">
          <input
            type="text"
            placeholder="Event Name"
            value={newEvent.title}
            onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
          />
          <input
            type="datetime-local"
            value={newEvent.date}
            onChange={(e) => setNewEvent({ ...newEvent, date: e.target.value })}
          />
          <textarea
            rows="3"
            placeholder="Description"
            value={newEvent.description}
            onChange={(e) => setNewEvent({ ...newEvent, description: e.target.value })}
          />
          <button onClick={handleCreateEvent}>Submit</button>
        </div>
      )}

      <div className="dashboard-cards">
        {filteredEvents.map((item) => (
          <div className="dashboard-card" key={item.id}>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <p><strong>Date:</strong> {item.date || "TBA"}</p>

            {userRole === "admin" && (
              <div className="card-actions">
                <button className="edit-btn" onClick={() => handleEdit(item.id)}>
                  <FaEdit /> Edit
                </button>
                <button className="delete-btn" onClick={() => handleDelete(item.id)}>
                  <FaTrash /> Delete
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
