import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles.css";
import { ProfilePage } from "./ProfilePage";
import Home from "./HomePage";
import { Navigation } from "./components/navigation";
export default function App() {
  return (
    <div>
      <Router>
        <Navigation />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<ProfilePage />} />
        </Routes>
      </Router>
    </div>
  );
}
