import styled from "styled-components";
import DetailPopup from "../../ImageDetailsPopup";
import React, { useState } from "react";

const Wrap = styled.div`
  position: relative;
`;
const Img = styled.img`
  width: 100%;
  display: block;
`;

export function GalleryItem({ imagePath, imageCaption }) {
  const [modal, setModal] = useState(false);

  const handleShowDialog = () => {
    setModal(!modal);
    console.log("clicked");
  };

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  return (
    <>
      <Wrap>
        <Img
          alt="gallery-post"
          src={imagePath}
          style={{ zIndex: 0, cursor: "pointer" }}
          onClick={handleShowDialog}
        />
      </Wrap>
      {modal && (
        <DetailPopup
          imag={imagePath}
          capt={imageCaption}
          toggleModal={handleShowDialog}
        />
      )}
    </>
  );
}

GalleryItem.defaultProps = {
  imagePath: "/images/transparent.png",
};
