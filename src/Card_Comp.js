import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function BasicCard(props) {
  const navigate = useNavigate();

  return (
    <Card sx={{ width: 350, height: 250, margin: 3 }}>
      {
        <CardActionArea
          sx={{ width: 350, height: 250 }}
          onClick={() => {
            navigate(`/${props.data[1]}`);
            // window.location.reload(true);
          }}
        >
          {/* <CardMedia
          component="img"
          height="140"
          image=""
          alt="green iguana"
        /> */}
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {props.data[0]}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              {props.data[1]}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {props.data[2]}
            </Typography>
          </CardContent>
        </CardActionArea>
      }
    </Card>
  );
}
