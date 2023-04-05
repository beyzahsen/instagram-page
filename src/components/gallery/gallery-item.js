import * as React from "react";
import styled from "styled-components";

const Wrap = styled.div`
  position: relative;
`;
const Img = styled.img`
  width: 100%;
  display: block;
`;

export function GalleryItem({ imagePath, imageCaption }) {
  console.log("imagePath - GalleryItem", imagePath);
  return (
    <Wrap>
      <Img alt="gallery-post" src={imagePath} />
      <p style={{ position: "flex" }}>{imageCaption}</p>
    </Wrap>
  );
}

GalleryItem.defaultProps = {
  imagePath: "/images/transparent.png",
};
