import React from "react";
import Layout from "./SideBar";
import { ProSidebarProvider } from "react-pro-sidebar";
import "./styles.css";

export default function Home() {

  return (
    
    <div className="App">
      <header className="App-header">
        <img
          src="/images/project-1.webp"
          alt="Instagram Logo"
          className="logo"
        />
        <input type="text" placeholder="Search" className="search-box" />
        <div className="menu">
          <i className="fas fa-home"></i>
          <i className="fas fa-paper-plane"></i>
          <i className="fas fa-compass"></i>
          <i className="fas fa-heart"></i>
          <img
            src="/images/project-1.webp"
            alt="Profile"
            className="profile"
          />
        </div>
      </header>
      <div className="posts">
        <div className="post">
          <img
            src="/images/project-1.webp"
            alt="Post"
          />
        </div>
        <div className="post">
          <img
            src="/images/project-1.webp"
            alt="Post"
          />
        </div>
        <div className="post"></div>
        <img
        src="/images/project-1.webp"
        alt="Post"
        />
        </div>
        
       

    {/* <ProSidebarProvider>
    <Layout></Layout>
    </ProSidebarProvider> */}
    </div>
  );
}