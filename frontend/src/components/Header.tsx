import React from "react";
import { RouteComponentProps } from 'react-router-dom';
import {
  AppBar,
  Typography,
  Toolbar,
  Button,
  makeStyles
} from '@material-ui/core';
import {
  Input,
} from '@material-ui/icons';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  title: {
    flexGrow: 1,
  },
}));

const Header: React.FC<RouteComponentProps> = (props: RouteComponentProps) => {
  const classes = useStyles({});

  const logged_out_menu = (
    <Button
      color="inherit"
      endIcon={<Input />}
    >
      LOGIN
    </Button>
  );

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" onClick={() => props.history.push('/')} className={classes.title}>
            Questions
          </Typography>
          <div className="grow" />
          <div>
            {logged_out_menu}
          </div>
        </Toolbar>
      </AppBar>
    </div>
  )
};

export default Header;
