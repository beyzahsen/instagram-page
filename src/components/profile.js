import React from "react";
import styled from "styled-components";
import { DesktopOnly, MobileOnly } from "../utils/mobile";
import { KeyNumbers } from "./key-numbers";


const Header = styled.header`
  margin-bottom: 44px;
  background: var(--ins-background-primary);
  color: var(--ins-content-primary);
  @media only screen and (max-width: 735px) {
    display: block;
    margin-bottom: 0px;
  }
`;
const HeaderWrap = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  column-gap: 30px;
  @media only screen and (max-width: 735px) {
    display: flex;
    padding: 14px;
    column-gap: 0px;
  }
`;
const ProfilePic = styled.div`
  height: 160px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 735px) {
    width: 77px;
    height: 77px;
    margin-right: 28px;
  }
`;
const ProfileImg = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 1000px;
  border: 1px solid var(--ins-border-primary);
  @media only screen and (max-width: 735px) {
    width: 100%;
    height: 100%;
  }
`;
const ProfileH2 = styled.h2`
  font-size: 28px;
  font-weight: 300;
  @media only screen and (max-width: 735px) {
    display: inline-block;
    margin-bottom: 12px;
  }
`;

const ProfileTitle = styled.div`
  display: flex;
  align-items: center;
  @media only screen and (max-width: 735px) {
    display: block;
  }
`;

const ProfileDescriptionH1 = styled.h1`
  font-weight: 600;
  line-height: 24px;
  @media only screen and (max-width: 735px) {
    line-height: 20px;
  }
`;
const ProfileDescriptionSpan = styled.span`
  font-weight: 400;
  line-height: 24px;
  @media only screen and (max-width: 735px) {
    line-height: 20px;
  }
`;
const ProfileDescriptionA = styled.a`
  color: var(--ins-content-blue);
`;
const ProfileDescriptions = styled.div`
  @media only screen and (max-width: 735px) {
    padding-left: 16px;
    padding-bottom: 21px;
    font-size: 14px;
    margin-bottom: 0px !important;
  }
`;
const ProfileRow = styled.div`
  margin-bottom: 20px;
`;

export function Profile(props) {
  return (
    <Header>
      <HeaderWrap>
        <ProfilePic>
          <ProfileImg src={props.data.profilePic} alt="profile-logo" />
        </ProfilePic>
        <div>
          <ProfileRow>
            <ProfileTitle>
              <ProfileH2>{props.data.name}</ProfileH2>
            </ProfileTitle>
          </ProfileRow>
          <DesktopOnly>
            <ProfileRow>
              <KeyNumbers num={props.data.info} />
            </ProfileRow>

            <ProfileDescriptions
            // class="row last"
            >
              <ProfileDescriptionSpan>
                {props.data.info.bio}
              </ProfileDescriptionSpan>
            </ProfileDescriptions>
          </DesktopOnly>
        </div>
      </HeaderWrap>
      <MobileOnly>
        <ProfileRow>
          <ProfileDescriptions>
            <ProfileDescriptionH1>cato</ProfileDescriptionH1>
            <ProfileDescriptionSpan>
              Everyone has a story to tell.
              <br />
              Tag <ProfileDescriptionA>#ShotoniPhone</ProfileDescriptionA> to
              take part.
            </ProfileDescriptionSpan>
          </ProfileDescriptions>
        </ProfileRow>
      </MobileOnly>
      <MobileOnly>
        <KeyNumbers num={props.data.info} />
      </MobileOnly>
    </Header>
  );
}
Profile.defaultProps = {
  profileImage: "/images/project-2.webp",
};
