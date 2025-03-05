import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import MainLayout from "./components/mainLayout";
import Dashboard from "./components/dashboard";
import Products from "./components/product";

import Upload from "./components/upload";
import Login from "./components/login";
import Signup from "./components/signup";
import LandingPage from "./components/landingPage";
import WastePredictionChart from'./components/ml_model'; 
import MapView from './components/map'; 
import WasteChart from './components/waste'; 
import ExpiryPredictor from './components/shelflife';
import Phase from './components/phase'

const PrivateRoute = ({ children }) => {
  return localStorage.getItem("isAuthenticated") ? children : <Navigate to="/login" />;
};

function App() {
  return (
    <Router>
      <Routes>
        {/* 🔹 Public Routes (No Sidebar) */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* 🔹 Private Routes (With Sidebar) */}
        <Route path="/" element={<PrivateRoute><MainLayout /></PrivateRoute>} className="font-poppins">
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/waste" element={<WastePredictionChart />} />
          <Route path="/map" element={<MapView />} />
          <Route path="/garbage" element={<WasteChart />} />
          <Route path="/expiry" element={<ExpiryPredictor />} />
          <Route path="/allphase" element={<Phase />} />
          <Route path="/upload" element={<Upload />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
