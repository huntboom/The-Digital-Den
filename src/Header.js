import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: 'black',
    position: 'fixed', // Set position to fixed
    width: '100%', // Make it take the full width
    zIndex: theme.zIndex.appBar + 1, // Ensure it's above other elements
  },
  title: {
    fontFamily: '"Palatino Linotype", "Book Antiqua", Palatino, serif',
    flexGrow: 1,
  },
  toolbar: {
    justifyContent: 'center', // Center the content horizontally
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <AppBar position="static" className={classes.root}>
      <Toolbar className={classes.toolbar}>
        <Typography variant="h6" className={classes.title}>
          The Digital Den
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
