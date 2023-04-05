import React from "react";
import styled from "styled-components";
import { Gallery } from "./components/gallery";
import { Navigation } from "./components/navigation";
import { Profile } from "./components/profile";
import { useParams } from "react-router-dom";
import data from "./data.json";
import Layout from "./SideBar";
import { ProSidebarProvider } from "react-pro-sidebar";

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

  let userInfo = "";
  data.profiles.forEach((user) => {
    if (user.name.toLocaleLowerCase() === id.toLocaleLowerCase()) {
      userInfo = user;
    }
  });

  return (
    <ProSidebarProvider>
      <Navigation />
      <Layout></Layout>
      <Main>
        <Profile data={userInfo} />
        <Gallery data={userInfo} />
      </Main>
    </ProSidebarProvider>
  );
}
