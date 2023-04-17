import React from "react";
import { useState } from "react";
import "./styles.css";
import axios from "axios";

export default function ImageUpload({ userName }) {
  const [image, setImage] = useState(null);
  const [caption, setCaption] = useState("");

  const handleChange = (e) => {
    console.log(e.target.files);
    setImage(e.target.files[0]);
  };

  function handleApi() {
    if (!caption) {
      alert("Please write a caption!");
      return;
    }
    const url = "http://localhost:3100/api/addposttouser";

    axios.post(url, { userName, caption, image }).then((res) => {
      console.log(res);
    });
  }

  const handleCaptionChange = (e) => {
    setCaption(e.target.value);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <input type="file" name="file" onChange={handleChange} />
      <textarea
        type="text"
        placeholder="Açıklama (caption) giriniz:"
        style={{
          width: "300px",
          height: "80px",
          paddingLeft: "8px",
          paddingTop: "6px",
          paddingBottom: "6px",
          margin: "10px",
          resize: "none",
        }}
        value={caption}
        onChange={handleCaptionChange}
      />

      <button className="btn-add" onClick={handleApi}>
        Ekle
      </button>
    </div>
  );
}
