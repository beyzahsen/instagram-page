import "./AddImagePopup.css";
import React from "react";

export default function DetailPopup({ imag, capt, toggleModal }) {
  if (imag !== "") {
    return (
      <div className="modal" style={{ zIndex: 51 }}>
        <div className="overlay">
          <div
            className="modal-content"
            style={{
              width: "700px",
              height: "500px",
              overflow: "auto",
              whiteSpace: "pre-wrap",
            }}
          >
            <h2 style={{ margin: 10, fontWeight: "bold" }}>Post Detayları</h2>
            <button
              style={{ background: "#E74C3C" }}
              onClick={toggleModal}
              className="close-modal"
            >
              <p>x</p>
            </button>
            <img style={{ width: "530px" }} src={imag} alt="post_detail" />
            <div>{capt}</div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="modal" style={{ zIndex: 51 }}>
        <div className="overlay">
          <div
            className="modal-content"
            style={{
              width: "700px",
              height: "500px",
              overflow: "auto",
              whiteSpace: "pre-wrap",
            }}
          >
            <h2 style={{ margin: 10, fontWeight: "bold" }}>Post Detayları</h2>
            <button
              style={{ background: "#E74C3C" }}
              onClick={toggleModal}
              className="close-modal"
            >
              <p>x</p>
            </button>
            <div>{capt}</div>
          </div>
        </div>
      </div>
    );
  }
}
