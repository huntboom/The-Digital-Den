import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: 'black',
    position: 'fixed',
    width: '100%',
    zIndex: theme.zIndex.appBar + 1,
  },
  title: {
    fontFamily: '"Palatino Linotype", "Book Antiqua", Palatino, serif',
    flexGrow: 1,
  },
  toolbar: {
    justifyContent: 'space-between', // Center the content horizontally
  },
  button: {
    marginLeft: theme.spacing(2),
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
        <div>
      <Link to="/">
          <Button color="inherit" className={classes.button}>
            Home
          </Button>
      </Link>
      <Link to="/second-page">
          <Button color="inherit" className={classes.button}>
            Library
          </Button>
      </Link>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
