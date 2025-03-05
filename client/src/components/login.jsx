import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import bgimg from "../images/bgimg.jpeg";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("isAuthenticated") === "true") {
      navigate("/dashboard");
    }
  }, [navigate]);

  const handleLogin = () => {
    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (storedUser && storedUser.email === email && storedUser.password === password) {
      localStorage.setItem("isAuthenticated", "true");
      alert("✅ Login successful!");
      navigate("/upload");
    } else {
      alert("❌ Invalid email or password.");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-cover bg-center" style={{ backgroundImage: `url(${bgimg})` }}>
      <div className="bg-white p-6 rounded-lg shadow-md w-96">
        <h1 className="text-2xl font-bold text-center mb-4">🔑 Login</h1>
        <input 
          type="email" placeholder="Email" 
          className="w-full p-2 border rounded my-2" 
          value={email} onChange={(e) => setEmail(e.target.value)}
        />
        <input 
          type="password" placeholder="Password" 
          className="w-full p-2 border rounded my-2" 
          value={password} onChange={(e) => setPassword(e.target.value)}
        />
        <button 
          className="w-full bg-greenCustom text-white p-2 rounded hover:bg-green-700"
          onClick={handleLogin}
        >
          Login
        </button>
        <p className="mt-3 text-center text-sm">
          Don't have an account? <span className="text-blue-500 cursor-pointer" onClick={() => navigate("/signup")}>Sign Up</span>
        </p>
      </div>
    </div>
  );
};

export default Login;
