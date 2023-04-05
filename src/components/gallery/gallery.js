import React from "react";
import styled from "styled-components";
import { GalleryItem } from "./gallery-item";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 28px;
  @media only screen and (max-width: 735px) {
    gap: 3px;
  }
`;

export function Gallery(props) {
  console.log(props.data);
  return (
    <Grid>
      {props.data.posts.map((item, id) => (
        <GalleryItem key={id} imagePath={item.postImage} imageCaption={item.caption} />
      ))}

    </Grid>
  );
}
