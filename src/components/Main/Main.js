import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import { posts } from "../Data/Data";
import { Container } from "@mui/material";
import Singleentery from "../Singleentery/Singleentery";
import Search from '../Search/Search';

export default function Main({ title }) {
  return (
    <Grid item xs={12} md={8}>
    <Search/>
      
    </Grid>
  );
}