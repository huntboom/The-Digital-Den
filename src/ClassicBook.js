import React, { useState, useEffect } from 'react';

const BookSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [selectedBook, setSelectedBook] = useState({});

  const fetchResults = async () => {
    const response = await fetch(
      `http://localhost:3000/search/title+eq+${searchTerm}?include=title,author`
    );
    const data = await response.json();
    setSearchResults(data.texts);
  };

  useEffect(() => {
    if (searchTerm) {
      fetchResults();
    }
  }, [searchTerm]);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchResults();
  };

  const handleSelect = (book) => {
    setSelectedBook(book);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleSearch} />
        <button type="submit">Search</button>
      </form>
      <ul>
        {searchResults.map((book) => (
          <li key={book.text_id} onClick={() => handleSelect(book)}>
            {book.metadata.title[0]}
          </li>
        ))}
      </ul>
      {selectedBook.metadata && (
        <div>
          <h1>{selectedBook.metadata.title[0]}</h1>
          <p>By: {selectedBook.metadata.author[0]}</p>
        </div>
      )}
    </div>
  );
};

export default BookSearch;
