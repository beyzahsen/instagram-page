import React from "react";
import styled from "styled-components";
import { KeyNumber } from "./key-number";

const ProfileDetailUl = styled.ul`
  display: flex;
  @media only screen and (max-width: 735px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    padding: 12px 0;
    border-top: 1px solid var(--ins-border-primary);
  }
`;
export function KeyNumbers(props) {
  return (
    <ProfileDetailUl>
      <KeyNumber label="posts" number={props.num.posts} />
      <KeyNumber label="followers" number={props.num.followers} />
      <KeyNumber label="following" number={props.num.following} />
    </ProfileDetailUl>
  );
}
