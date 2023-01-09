import React, { useState, useEffect } from 'react';
import axios from 'axios';

const BookFinder = () => {
  const [query, setQuery] = useState('harry potter');
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        `https://www.gutenberg.org/ebooks/search/?query=${query}`
      );
      setBooks(result.data.books);
    };
    fetchData();
  }, [query]);

  return (
    <div>
      <h2>Books</h2>
      <form
        onSubmit={e => {
          e.preventDefault();
        }}
      >
        <label htmlFor="query">Search: </label>
        <input
          type="text"
          name="query"
          value={query}
          onChange={e => setQuery(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      <ul>
        {books.map(book => (
          <li key={book.id}>
            {book.title} by {book.author}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookFinder;

