import React from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { useState } from "react";
import styled from "styled-components";
import "./styles.css";
import { ProfilePage } from "./ProfilePage";
import ImageUpload from "./ImageUpload";
import data from "./data.json"

const ThemeWrap = styled.div`
  background: var(--ins-background-primary);
`;

export default function App() {
  const [theme, setTheme] = useState("light");

  console.log(data);

  return (
    <Router>
      {/* A <Switch> looks through its children <Route>s and
        renders the first one that matches the current URL. */}
      <Routes>
        <Route path="/">
          <Route path="/:id" element={<ProfilePage/>}/>
        </Route>
      </Routes>
    </Router>
  );
}


