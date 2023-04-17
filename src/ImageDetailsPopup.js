import "./AddImagePopup.css";
import React from "react";
import axios from "axios";

export default function DetailPopup({ imag, capt, toggleModal, id, userName }) {
  function handlePost() {
    const url = "http://localhost:3100/api/deletefromuser";

    axios.post(url, { id, userName }).then((res) => {
      console.log(res);
    });
  }

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
              className="btn-delete"
              style={{
                background: "#E74C3C",
              }}
              onClick={handlePost}
            >
              Postu Sil
            </button>
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
              className="btn-delete"
              style={{
                background: "#E74C3C",
              }}
              onClick={handlePost}
            >
              Postu Sil
            </button>
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
