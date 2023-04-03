import React from "react";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import { useState } from "react";
import styled from "styled-components";
import "./styles.css";
import { ProfilePage } from "./ProfilePage";
import ImageUpload from "./ImageUpload";

const ThemeWrap = styled.div`
  background: var(--ins-background-primary);
`;

export default function App() {
  const [theme, setTheme] = useState("light");

  return (
    <Router>
      {/* A <Switch> looks through its children <Route>s and
        renders the first one that matches the current URL. */}
      <Switch>
        <Route path="/">
          <ProfilePage />
          <ImageUpload></ImageUpload>
        </Route>
      </Switch>
    </Router>
  );
}


