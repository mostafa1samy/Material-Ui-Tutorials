import React from "react";
import {
  Box,
  Card,
  CardContent,
  Button,
  CardMedia,
  Typography,
  CardActions,
} from "@mui/material";

const MuiCard = () => {
  return (
    <Box width="300px">
      <Card>
        <CardMedia
          component="img"
          height="140px"
          image="https://source.unsplash.com/random"
          alt=" fff"
        />

        <CardContent>
          <Typography variant="h5" gutterBottom component="div">
            React
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum
            laudantium illo perferendis tenetur suscipit cupiditate neque quia
            id nihil ipsa!
          </Typography>
        </CardContent>
        <CardActions>
          <Button sizs="small">share</Button>
          <Button sizs="small">learn more</Button>
        </CardActions>
      </Card>
    </Box>
  );
};

export default MuiCard;
