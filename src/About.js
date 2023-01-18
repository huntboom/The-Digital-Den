import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

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
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: 'auto',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
  },
}));

const About = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container component="main" className={classes.main} maxWidth="md">
        <Typography variant="h2" component="h1" gutterBottom>
          The Digital Den
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom>
          The Digital Den is a virtual environment where users can find and read books in a 3D
          environment. Users can explore a variety of books from different genres and authors, and
          can even customize their own virtual library. The Digital Den also offers a variety of
          interactive features, such as the ability to chat with other readers and create book
          clubs.
        </Typography>
      </Container>
    </div>
  );
};

export default About;
