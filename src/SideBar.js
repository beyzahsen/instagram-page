import React from "react";
import { Sidebar, Menu, MenuItem, useProSidebar } from "react-pro-sidebar";
import data from "./data.json";
import { Link } from "react-router-dom";
export default function Layout() {
  const { collapseSidebar } = useProSidebar();

  return (
    <div style={{ display: "flex", height: "100%", position: "fixed" }}>
      <Sidebar>
        <Menu style={{ background: "#F8F9F9" }}>
          <MenuItem
            onClick={() => {
              collapseSidebar();
            }}
            style={{ textAlign: "center", background: "#F5B7B1" }}
          >
            X
          </MenuItem>
          {data.profiles.map((profile, index) => (
            <MenuItem
              key={index}
              name={profile.name}
              component={<Link to={"/" + profile.name} />}
            >
              {profile.name}
            </MenuItem>
          ))}
        </Menu>
      </Sidebar>
    </div>
  );
}
