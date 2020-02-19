import React from 'react';
import { 
  Grid,
  Typography,
  Divider,
  Container
} from "@material-ui/core";

const Footer = () => (
  <Container style={{ maxWidth: 700, paddingTop: 16, textAlign: "center"}}>
    <Typography variant="caption" align={"center"}>
      Questions Inc &copy; 2020
    </Typography>
    <Divider style={{ margin: "16px auto", width: 60 }} />
    <Grid container justify={"center"} spacing={2}>
      <Grid item xs={12} sm={6} md={3}>
        <Typography align={"center"} gutterBottom color={"textSecondary"}>
          About
        </Typography>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Typography align={"center"} gutterBottom color={"textSecondary"}>
          Terms & Conditions
        </Typography>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Typography align={"center"} gutterBottom color={"textSecondary"}>
          Contact us
        </Typography>
      </Grid>
    </Grid>
  </Container>
);

export default Footer;
