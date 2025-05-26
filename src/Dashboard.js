import React, { useState, useEffect } from 'react';
import './App.css'; // Import your App.css'; // Make sure to create this CSS file

const Dashboard = () => {
  const [greeting, setGreeting] = useState('');
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  // Update greeting based on time
  useEffect(() => {
    const updateGreeting = () => {
      const hours = currentTime.getHours();
      let newGreeting = '';
      
      if (hours < 12) {
        newGreeting = 'Good Morning';
      } else if (hours >= 12 && hours < 17) {
        newGreeting = 'Good Afternoon';
      } else {
        newGreeting = 'Good Evening';
      }
      
      setGreeting(newGreeting);
    };

    updateGreeting();
    
    // Update time every minute
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000);
    
    return () => clearInterval(timer);
  }, [currentTime]);

  // Toggle sidebar for mobile responsiveness
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className={`dashboard-container ${isSidebarOpen ? '' : 'sidebar-collapsed'}`}>
      {/* Header Component */}
      <header className="dashboard-header">
        <button className="menu-toggle" onClick={toggleSidebar}>
          ☰
        </button>
        <div className="header-content">
          <h1>{greeting}, User!</h1>
          <div className="time-display">
            {currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
          </div>
        </div>
      </header>

      {/* Sidebar Component */}
      <aside className="dashboard-sidebar">
        <nav>
          <ul>
            <li>Dashboard</li>
            <li>Profile</li>
            <li>Settings</li>
            <li>Logout</li>
          </ul>
        </nav>
      </aside>

      {/* Main Content Area */}
      <main className="dashboard-main">
        <div className="dashboard-content">
          <h2>Welcome to Your Dashboard</h2>
          <p>Here's your personalized content area.</p>
          {/* Add your dashboard widgets/content here */}
        </div>
      </main>
    </div>
  );
};

export default Dashboard;