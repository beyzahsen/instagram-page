import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import DetailPopup from "./ImageDetailsPopup";
import { useState } from "react";

export default function CardCaption({ imag, imageCaption, id, userName }) {
  const [modal, setModal] = useState(false);

  const handleShowDialog = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  return (
    <Card sx={{ width: 350, height: 250, margin: 3 }}>
      {
        <CardActionArea
          sx={{ width: 350, height: 250 }}
          onClick={handleShowDialog}
          id={id}
        >
          {modal && (
            <DetailPopup
              imag={imag}
              capt={imageCaption}
              toggleModal={handleShowDialog}
              id={id}
              userName={userName}
            />
          )}
          <CardContent>
            <Typography variant="body2">{imageCaption}</Typography>
          </CardContent>
        </CardActionArea>
      }
    </Card>
  );
}
