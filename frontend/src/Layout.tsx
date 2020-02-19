import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import {
  CssBaseline,
  Box,
  makeStyles,
} from '@material-ui/core';
import Footer from './components/Footer';
import Header from './components/Header';
import SideNav from './components/Sidenav';

const DRAWER_WIDTH = 240;

const useStyles = makeStyles(theme => ({
  root: {
    minHeight: "calc(100vh - 8px)",
  },
  mainContent: {
    paddingTop: theme.spacing(4),
  },
  toolbar: theme.mixins.toolbar,
  drawer: {
    width: DRAWER_WIDTH,
    flexShrink: 0,
  },
  drawerPaper: {
    width: DRAWER_WIDTH,
  },
}));

const Layout: React.FC = (props) => {
  const classes = useStyles({});
  return (
    <BrowserRouter>
      <CssBaseline />
      <Route component={Header} />

      <Box display="flex">
        <Box flexShrink={0} flexGrow={0}>
          <SideNav classes={{ drawer: classes.drawer, drawerPaper: classes.drawerPaper}} />
        </Box>
        <Box
          flexGrow={1}
          flexDirection="column"
          display="flex"
          justifyContent="flex-start"
          className={classes.root}
          component="main"
        >
          <Box className={classes.toolbar} />
          <Box flexGrow={1} className={classes.mainContent}>

            {props.children}

          </Box>
          <Box>
            <Route component={Footer} />
          </Box>
        </Box>
      </Box>

    </BrowserRouter>
  );
};
export default Layout;
