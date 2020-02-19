import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { push } from 'connected-react-router';
import {
  makeStyles,
  Drawer,
  List,
  Divider,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core';
import {
  Home,
  EmojiPeople,
  LocalLibraryTwoTone,
  PermMediaTwoTone
} from '@material-ui/icons';


const useStyles = makeStyles(theme => ({
  toolbar: theme.mixins.toolbar,
}));

const connector = connect(null, { push });
type PropsFromRedux = ConnectedProps<typeof connector>;
interface SidenavProps {
  classes: {
    drawer: any,
    drawerPaper: any,
  }
};
type Props = SidenavProps & PropsFromRedux;


const SideNav: React.FC<Props> = (props: Props) => {
  const classes = useStyles({});
  const navToURL = (url: string) => (_: any) => props.push(url);

  return (
    <Drawer
      className={props.classes.drawer}
      variant="permanent"
      classes={{
        paper: props.classes.drawerPaper,
      }}
    >
      <div className={classes.toolbar} />
      <List>
        <ListItem button key={'Home'} onClick={navToURL('/')} >
          <ListItemIcon><Home /></ListItemIcon>
          <ListItemText primary={'Home'} />
        </ListItem>
        <ListItem button key={'Authors'} onClick={navToURL('/authors')}>
          <ListItemIcon><LocalLibraryTwoTone /></ListItemIcon>
          <ListItemText primary={'Authors'} />
        </ListItem>
        <ListItem button key={'Posts'} onClick={navToURL('/content')}>
          <ListItemIcon><PermMediaTwoTone /></ListItemIcon>
          <ListItemText primary={'Posts'} />
        </ListItem>
      </List>
      <Divider />
    </Drawer>

  );
}

export default connector(SideNav);