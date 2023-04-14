import React from "react";
import "./styles.css";
import BasicCard from "./Card_Comp";
import styled from "styled-components";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 28px;
  @media only screen and (max-width: 735px) {
    gap: 3px;
  }
`;

export default function Home() {
  const [data, setData] = useState(null);

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
      <div class="container">
        <div class="all flex-row">
          <div class="menu flex-column">
            <div class="profil-info">
              <div class="menu-elements">
                <div class="icons">
                  <img src="https://i.ibb.co/y8wD2HZ/explore-tool.png" />
                  <div class="exp-writing"> Explore</div>
                </div>

                <div class="icons">
                  <img src="https://i.ibb.co/tsDcKD1/hashtag.png" />
                  <div class="trend-writing"> Trending Tags</div>
                </div>

                <div class="icons">
                  <img src="https://i.ibb.co/XDnYxL9/user-symbol-of-thin-outline.png" />
                  <div class="people-writing"> People </div>
                </div>

                <div class="icons">
                  <img src="https://i.ibb.co/dWcct0k/notification.png" />
                  <div class="notif-writing"> Notification </div>
                </div>

                <div class="icons">
                  <img src="https://i.ibb.co/rQcCQcL/direction.png" />
                  <div class="direct-writing"> Direct </div>
                </div>

                <div class="icons">
                  <img src="https://i.ibb.co/smVnQkg/settings.png" />
                  <div class="set-writing"> Settings</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="last-body">
          <div class="galery-wrapper">
            <>
              {
                <Grid>
                  {data.names.map((val, indx) => (
                    <BasicCard data={val}></BasicCard>
                  ))}
                </Grid>
              }
            </>
          </div>
        </div>
      </div>
    );
  } else {
    return <p>Error</p>;
  }
}
