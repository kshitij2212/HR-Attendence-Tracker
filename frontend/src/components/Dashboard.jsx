import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Dashboard.css";

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (userData) {
      setUser(JSON.parse(userData));
    } else {
      navigate("/login");
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  if (!user) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <div className="header-content">
          <h1 className="dashboard-title">HR Attendance Tracker</h1>
          <div className="user-info">
            <span className="user-name">
              Welcome, {user.name || user.email}
            </span>
            <span className="user-role">{user.role}</span>
            <button onClick={handleLogout} className="logout-btn">
              ⚡ Logout
            </button>
          </div>
        </div>
      </header>

      <main className="dashboard-main">
        <div className="dashboard-content">
          <div className="welcome-section">
            <h2>Welcome to Your Dashboard</h2>
            <p>Manage your attendance, leaves, and more from here.</p>
          </div>

          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-icon">📅</div>
              <div className="stat-info">
                <h3>Today's Status</h3>
                <p>Not Checked In</p>
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-icon">⏰</div>
              <div className="stat-info">
                <h3>This Month</h3>
                <p>22 Days Present</p>
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-icon">🏖️</div>
              <div className="stat-info">
                <h3>Leave Balance</h3>
                <p>15 Days Available</p>
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-icon">📊</div>
              <div className="stat-info">
                <h3>Department</h3>
                <p>{user.department || "Not Specified"}</p>
              </div>
            </div>
          </div>

          <div className="quick-actions">
            <h3>Quick Actions</h3>
            <div className="actions-grid">
              <button className="action-btn check-in">
                <span className="action-icon">🟢</span>
                Check In
              </button>
              <button className="action-btn check-out">
                <span className="action-icon">🔴</span>
                Check Out
              </button>
              <button className="action-btn leave-request">
                <span className="action-icon">📝</span>
                Request Leave
              </button>
              <button className="action-btn view-reports">
                <span className="action-icon">📈</span>
                View Reports
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
