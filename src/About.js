import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
  },
  fadeInSlideIn: {
    animation: '$fadeInSlideIn 2s ease-out forwards',
    fontFamily: 'Corsiva',
  },
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: 'auto',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
  },
  text: {
    animation: '$fadeInSlideIn 2.5s ease-out forwards',
    fontFamily: 'Corsiva',
  },
  button: {
    marginTop: theme.spacing(2),
    alignSelf: 'center',
    '&:hover': {
      backgroundColor: theme.palette.secondary.main,
    },
  },
  '@keyframes fadeInSlideIn': {
    '0%': {
      opacity: 0,
      transform: 'translateX(-50px)',
    },
    '100%': {
      opacity: 1,
      transform: 'translateX(0)',
    },
  },
}));

const About = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container component="main" className='main' maxWidth="md">
        <Typography variant="h2" component="h1" gutterBottom className={`scale-up-center ${classes.fadeInSlideIn}`}>
          Welcome To The Digital Den
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom className={classes.text}>
          The Digital Den is a virtual space where users can find and read books in a 3D
          environment. Explore a variety of books from different genres and authors, and
          get lost in your own virtual library. The Digital Den seeks to recreate that
          magical feeling of looking for a book in library or bookstore while still providing tools
          for streamlining the process for those who want to.
        </Typography>
        <Button variant="contained" color="primary" className={classes.button}>
          Enter The Reading Room
        </Button>
      </Container>
    </div>
  );
};

export default About;

