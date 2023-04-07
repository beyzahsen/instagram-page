import React from "react";
import { useState } from "react";
import "./styles.css";
import axios from "axios";

export default function ImageUpload() {
  const [image, setImage] = useState("");

  const handleChange = (e) => {
    console.log(e.target.files);
    setImage(e.target.files[0]);
  };

  function handleApi() {
    const url = "http://localhost:3100/api/addimagetouser";
    const formData = new FormData();
    formData.append("image", image);
    axios.post(url, formData).then((res) => {
      console.log(res);
    });
  }

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
      />

      <button className="btn-add" onClick={handleApi}>
        Ekle
      </button>
    </div>
  );
}
