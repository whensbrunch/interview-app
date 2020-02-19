import React from 'react';
import {
  makeStyles,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar
} from '@material-ui/core';
import { SvgIcon } from 'material-ui';


const useStyles = makeStyles(theme => ({
  toolbar: theme.mixins.toolbar,
}));

interface LIProps {
  textPrimary: string,
  textSecondary: string,
  avatar: SvgIcon | string;
}



const ListItemSummary: React.FC<LIProps> = (props: LIProps) => {
  const classes = useStyles({});

  return (
    <ListItem alignItems="flex-start">
      <ListItemAvatar>
        <Avatar> {props.avatar} </Avatar>
      </ListItemAvatar>
      <ListItemText
        primary={props.textPrimary}
        secondary={props.textSecondary}
      />
    </ListItem>
  );
}

export default ListItemSummary;