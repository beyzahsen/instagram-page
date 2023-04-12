import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export default function BasicCard() {
  return (
    <Card sx={{ width: 350, height: 250, margin: 3 }}>
      <CardActionArea sx={{ width: 350, height: 250 }} href="/adresgezgini">
        {/* <CardMedia
          component="img"
          height="140"
          image=""
          alt="green iguana"
        /> */}
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Adres Gezgini
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            adresgezgini
          </Typography>
          <Typography variant="body2" color="text.secondary">
            All In One Internet Marketing Solutions ➖Google Ads ➖Facebook Ads
            ➖Instagram Ads ➖Mobile Apps ➖Web Design ➖Social Media Management
            📲🔐💻
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
