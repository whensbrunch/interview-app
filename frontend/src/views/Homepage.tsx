import React from 'react';
import {
  Paper,
  Typography,
  makeStyles
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
  },
}));

const Homepage: React.FC = () => {
  const classes = useStyles({});

  return (
    <Paper className={classes.root}>
      <Typography variant="h2">Welcome to Question Answering App</Typography>
    </Paper>
  );
};

export default Homepage;
