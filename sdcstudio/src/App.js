import React, { useState, useEffect } from "react";
import Login from "./Login";
import EmployeeLayout from "./EmployeeLayout";
import Navbar from "./Navbar";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Check authentication on load
  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsAuthenticated(!!token);
  }, []);

  const handleLogin = () => {
    localStorage.setItem("token", "dummy_token"); // Fake token for testing
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
  };

  return isAuthenticated ? (
    <>
      <Navbar onLogout={handleLogout} /> {/* ✅ Navbar me logout pass kiya */}
      <EmployeeLayout />
    </>
  ) : (
    <Login onLogin={handleLogin} />
  );
};

export default App;
