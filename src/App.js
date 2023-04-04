import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles.css";
import { ProfilePage } from "./ProfilePage";
import data from "./data.json";
import Home from "./HomePage";

export default function App() {
  console.log(data);

  return (
    <div>
      
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<ProfilePage />} />
        </Routes>
      </Router>
    </div>
  );
}
