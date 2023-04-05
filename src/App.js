import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles.css";
import { ProfilePage } from "./ProfilePage";
import ImageUpload from "./ImageUpload";

const ThemeWrap = styled.div`
  background: var(--ins-background-primary);
`;

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
