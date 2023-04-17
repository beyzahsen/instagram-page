import React, { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import { Gallery } from "./components/gallery";
import { Profile } from "./components/profile";
import { useParams } from "react-router-dom";
import axios from "axios";
import { ProSidebarProvider } from "react-pro-sidebar";
import Layout from "./SideBar";
import Popup from "./AddImagePopup";

const Main = styled.main`
  padding: 30px 20px 0px 20px;
  max-width: 935px;
  margin: 0 auto;
  @media only screen and (max-width: 735px) {
    padding: 0;
  }
`;

export function ProfilePage() {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [name, setName] = useState("");
  async function fetchUser(nameInsta) {
    await axios
      .post("http://localhost:3100/api/getuser", {
        userName: nameInsta,
      })
      .then((res) => {
        setData(res.data.user[0]);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  useEffect(() => {
    const nameInsta = id.toLocaleLowerCase();
    setName(nameInsta);
    fetchUser(nameInsta);
  }, []);

  if (data) {
    return (
      <ProSidebarProvider>
        <Layout></Layout>
        <Main>
          <Profile data={data} />
          <Gallery data={data} />
          <Popup userName={name}></Popup>
        </Main>
      </ProSidebarProvider>
    );
  } else {
    return <h1>No User </h1>;
  }
}
