import { BrowserRouter, Route, Routes } from "react-router-dom";
import axios from "axios";

import './App.css';


/* Profile Management */
import Home from "./components/Dashboard/Home"
import Profile from "./components/UserProfileManagement/Profile";

function App() {
  
  axios.interceptors.request.use((config) => {
    config.headers["Origin"] = "http://localhost:3001";
    return config;
  });

  return (
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Home/>} />

      {/* Module : User Profile Management start */}
      <Route path="/Profile" element={<Profile />} />

      {/* User Profile Management end */}
    </Routes>
  </BrowserRouter>
  );
}

export default App;
