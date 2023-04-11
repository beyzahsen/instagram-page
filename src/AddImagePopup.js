import "./AddImagePopup.css";
import React, { useState } from "react";
import ImageUpload from "./ImageUpload";

export default function Popup() {
  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  return (
    <>
      <button
        onClick={toggleModal}
        className="btn-modal"
        style={{
          padding: 0,
          position: "fixed",
          height: "60px",
          width: "60px",
          borderRadius: "100%",
          bottom: "50px",
          right: "50%",
          cursor: "pointer",
          zIndex: 1,
        }}
      >
        +
      </button>
      {modal && (
        <div className="modal" style={{ zIndex: 51 }}>
          <div className="overlay">
            <div className="modal-content">
              <h2 style={{ margin: 10 }}>Post Ekle</h2>
              <buttone
                style={{ background: "#E74C3C" }}
                onClick={toggleModal}
                className="close-modal"
              >
                <p>x</p>
              </buttone>
              <ImageUpload></ImageUpload>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
