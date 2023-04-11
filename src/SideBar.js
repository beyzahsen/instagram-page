import React from "react";
import { Sidebar, Menu, MenuItem, useProSidebar } from "react-pro-sidebar";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Layout() {
  const { collapseSidebar } = useProSidebar();
  const [data, setData] = useState(null);
  const navigate = useNavigate();

  async function fetchUser() {
    await axios
      .post("http://localhost:3100/api/getallusersnames")
      .then((res) => {
        setData(res.data);
        console.log(res);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  useEffect(() => {
    fetchUser();
  }, []);

  if (data) {
    return (
      <div
        style={{
          display: "flex",
          height: "100%",
          position: "fixed",
          zIndex: 1,
        }}
      >
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
            {data.names.map((val, indx) => (
              <MenuItem
                key={indx}
                name={val}
                onClick={() => {
                  navigate(`/${val[1]}`);
                  window.location.reload(true);
                }}
              >
                {val[0]}
              </MenuItem>
            ))}
          </Menu>
        </Sidebar>
      </div>
    );
  } else {
    return <h1>Error</h1>;
  }
}
