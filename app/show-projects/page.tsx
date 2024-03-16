import React from "react";
// import { Container } from 'react-bootstrap';
// import ParticleBackground from './particles';
// import TypeLoop from './Type';
// import Sparkles from 'react-sparkle'
import dexter from "./dexter.jpeg";
import Grid from "@mui/material/Grid";
import {
  Box,
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";
const page = () => {
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item lg={12}>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              sx={{ height: 300 }}
              image={"Sth"}
              title="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Lizard
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default page;
