import React, { useState } from "react";
import { FaSearch, FaEdit, FaTrash, FaPlus, FaFilter } from "react-icons/fa";
import "./Dashboard.css";

const userRole = "admin"; // Change to "enduser" to test user view

const Dashboard = () => {
  const [events, setEvents] = useState([
    { id: 1, title: "Tech Conference", description: "Latest in tech.", date: "2025-05-15", status: "upcoming" },
    { id: 2, title: "AI Summit", description: "Exploring AI trends.", date: "2025-04-01", status: "completed" },
    { id: 3, title: "Hackathon", description: "24-hour coding event.", date: "2025-04-10", status: "ongoing" },
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [filterStatus, setFilterStatus] = useState("");
  const [newEvent, setNewEvent] = useState({ title: "", description: "", date: "", status: "upcoming" });
  const [editId, setEditId] = useState(null);

  const handleCreateEvent = () => {
    if (newEvent.title && newEvent.description && newEvent.date) {
      setEvents([...events, { id: Date.now(), ...newEvent }]);
      setNewEvent({ title: "", description: "", date: "", status: "upcoming" });
      setShowCreateForm(false);
    }
  };

  const handleDelete = (id) => {
    setEvents(events.filter((e) => e.id !== id));
  };

  const handleEdit = (event) => {
    setEditId(event.id);
    setNewEvent({ title: event.title, description: event.description, date: event.date, status: event.status });
    setShowCreateForm(true);
  };

  const handleUpdateEvent = () => {
    setEvents(events.map(e => e.id === editId ? { ...e, ...newEvent } : e));
    setEditId(null);
    setShowCreateForm(false);
    setNewEvent({ title: "", description: "", date: "", status: "upcoming" });
  };

  const filteredEvents = events.filter((e) => {
    const matchesSearch = e.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterStatus ? e.status === filterStatus : true;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="page-wrapper">
    <div className="dashboard-container">
      <h2 className="dashboard-heading">
        {userRole === "admin" ? "Admin Dashboard" : "User Dashboard"}
      </h2>

      {userRole === "enduser" && (
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search events..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      )}

      <div className="filter-bar">
        <FaFilter className="filter-icon" />
        <select onChange={(e) => setFilterStatus(e.target.value)} value={filterStatus}>
          <option value="">All Events</option>
          <option value="completed">Completed</option>
          <option value="upcoming">Upcoming</option>
          <option value="ongoing">Ongoing</option>
        </select>
      </div>

      {userRole === "admin" && (
        <button className="create-btn" onClick={() => {
          setShowCreateForm(true);
          setEditId(null);
          setNewEvent({ title: "", description: "", date: "", status: "upcoming" });
        }}>
          <FaPlus /> Create Event
        </button>
      )}

      {showCreateForm && (
        <div className="create-form">
          <input
            type="text"
            placeholder="Event Title"
            value={newEvent.title}
            onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
          />
          <input
            type="date"
            value={newEvent.date}
            onChange={(e) => setNewEvent({ ...newEvent, date: e.target.value })}
          />
          <textarea
            placeholder="Description"
            value={newEvent.description}
            onChange={(e) => setNewEvent({ ...newEvent, description: e.target.value })}
          ></textarea>
          <select
            value={newEvent.status}
            onChange={(e) => setNewEvent({ ...newEvent, status: e.target.value })}
          >
            <option value="upcoming">Upcoming</option>
            <option value="ongoing">Ongoing</option>
            <option value="completed">Completed</option>
          </select>
          <button className="create-btn" onClick={editId ? handleUpdateEvent : handleCreateEvent}>
            {editId ? "Update Event" : "Add Event"}
          </button>
        </div>
      )}

      <div className="dashboard-cards">
        {filteredEvents.map((event) => (
          <div className="dashboard-card" key={event.id}>
            <h3>{event.title}</h3>
            <p>{event.date}</p>
            <p>{event.description}</p>
            <span className={`tag ${event.status}`}>{event.status}</span>
            {userRole === "admin" && (
              <div className="card-actions">
                <button className="edit-btn" onClick={() => handleEdit(event)}>
                  <FaEdit /> Edit
                </button>
                <button className="delete-btn" onClick={() => handleDelete(event.id)}>
                  <FaTrash /> Delete
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Dashboard;
