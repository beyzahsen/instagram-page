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
    <div>
      <input type="file" name="file" onChange={handleChange} />
      <input type="text" placeholder="Açıklama (caption) giriniz:" />
      <button onClick={handleApi}>Ekle</button>
    </div>
  );
}
