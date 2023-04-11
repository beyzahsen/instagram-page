import * as React from "react";
import styled from "styled-components";
import DetailPopup from "../../ImageDetailsPopup";

const Wrap = styled.div`
  position: relative;
`;
const Img = styled.img`
  width: 100%;
  display: block;
`;

function showDetail() {
  return <DetailPopup></DetailPopup>;
}

export function GalleryItem({ imagePath, imageCaption }) {
  return (
    <Wrap>
      <Img
        alt="gallery-post"
        src={imagePath}
        style={{ zIndex: 0 }}
        onClick={showDetail}
      />
      <p style={{ position: "flex" }}>{imageCaption}</p>
    </Wrap>
  );
}

GalleryItem.defaultProps = {
  imagePath: "/images/transparent.png",
};
