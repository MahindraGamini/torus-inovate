import React from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import { Provider } from "react-redux"; // Import Redux Provider
import { store } from "./redux/store"; // Import the Redux store

import LoginPage from "./pages/Login";
import DashboardNavbar from "./components/NavBar";
import DashBoard from "./pages/DashBoard";
import AnalyticsDashboard from "./pages/Analytics";

const App: React.FC = () => {
  const location = useLocation();

  return (
    <>
      {location.pathname !== "/" && <DashboardNavbar />}
      <Routes>
        <Route path="/" element={<LoginPage />} />
        
        <Route path="/dashboard" element={<DashBoard />} />
        
        <Route path="/analytics" element={<AnalyticsDashboard />} />
      </Routes>
    </>
  );
};

const AppWrapper: React.FC = () => (
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
);

export default AppWrapper;
