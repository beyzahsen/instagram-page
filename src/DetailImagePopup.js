import "./DetailImagePopup.css";
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
    document.body.classList.remove("active.modal");
  }

  return (
    <>
      <button onClick={toggleModal} className="btn-modal">
        Post Ekle
      </button>
      {modal && (
        <div className="modal" style={{ zIndex: 51 }}>
          <div className="overlay">
            <div className="modal-content">
              <h2>Post Ekle</h2>
              <button onClick={toggleModal} className="close-modal">
                X
              </button>
              <ImageUpload></ImageUpload>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
