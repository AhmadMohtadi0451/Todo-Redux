import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

const Header = () => {
  return (
    <Grid
      display="flex"
      justifyContent="center"
      alignContent="center"
      height="5rem"
      bgcolor="rgb(37,100,207)"
    >
      <Typography
        sx={{ fontSize: "2rem", alignSelf: "center", color: "white" }}
      >
        To Do
      </Typography>
    </Grid>
  );
};

export default Header;
