import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

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

export function Navigation({ lightThemeLogo, darkThemeLogo }) {
  const navigate = useNavigate();

  return (
    <nav>
      <Mock></Mock>
      <Fixed>
        <NavContent>
          <div className="light-theme-only">
            <Logo alt="logo" src={lightThemeLogo} />
          </div>
          <div className="dark-theme-only">
            <Logo alt="logo" src={darkThemeLogo} />
          </div>
        </NavContent>
      </Fixed>
    </nav>
  );
}
Navigation.defaultProps = {
  lightThemeLogo: "/images/Logo-Instagram.png",
  darkThemeLogo: "/images/logo-white.png",
};
