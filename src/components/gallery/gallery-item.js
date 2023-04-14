import styled from "styled-components";
import DetailPopup from "../../ImageDetailsPopup";
import React, { useState } from "react";
import CardCaption from "../../CardCaption";

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
  };

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  if (imagePath) {
    return (
      <>
        <Wrap>
          <Img
            alt="post image"
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
  } else if (imageCaption) {
    return (
      <>
        <Wrap>
          <CardCaption imag="" imageCaption={imageCaption}></CardCaption>
        </Wrap>
      </>
    );
  } else {
    return <p>Error</p>;
  }
}
