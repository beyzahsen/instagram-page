import React from "react";
import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";

const Logo = styled.img`
  height: 60px;
  padding-top: 7px;
`;
const NavContent = styled.div`
  max-width: 935px;
  margin: 0 auto;
  height: 54px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media only screen and (max-width: 735px) {
    padding: 0 20px;
  }
`;

const NavLink = styled(Link)`
  color: #808080;
  display: flex;
  align-items: flex-start;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
`;

const Mock = styled.div`
  height: 54px;
`;
const Fixed = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: var(--ins-background-primary);
  border-bottom: 1px solid var(--ins-border-primary);
  z-index: 1;
`;

export function Navigation() {
  return (
    <nav>
      <Mock></Mock>
      <Fixed>
        <NavContent>
          <Logo alt="logo" src="/images/Logo-Instagram.png" />
          <div>
            <NavLink to="/" activeStyle>
              Home Page
            </NavLink>
          </div>
          <div>
            <NavLink to="/adresgezgini" activeStyle>
              Profil Pages
            </NavLink>
          </div>
        </NavContent>
      </Fixed>
    </nav>
  );
}
