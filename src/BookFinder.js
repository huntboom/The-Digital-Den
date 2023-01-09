import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const useStyles = makeStyles(theme => ({
  form: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  input: {
    marginRight: theme.spacing(1)
  }
}));

const BookFinder = () => {
  const classes = useStyles();

  // The query is the initial value of the input field
  const [query, setQuery] = useState('');
  // The search is the value of the input field after the user has changed it
  const [search, setSearch] = useState('');

  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        `https://www.googleapis.com/books/v1/volumes?q=${search}`
      );
      setBooks(result.data.items);
    };
    fetchData();
  }, [search]);

  const updateSearch = e => {
    setQuery(e.target.value);
  };
  const getSearch = e => {
    e.preventDefault();
    setSearch(query);
  };

  return (
    <div>
      <h2>Books</h2>
      <form className={classes.form} onSubmit={getSearch}>
        <TextField
          className={classes.input}
          label="Search"
          value={query}
          onChange={updateSearch}
        />
        <Button type="submit" variant="contained" color="primary">
          Search
        </Button>
      </form>
      <List>
        {books.map(book => (
          <ListItem key={book.id}>
            <ListItemText primary={`${book.volumeInfo.title} by ${book.volumeInfo.authors[0]}`} />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default BookFinder;
