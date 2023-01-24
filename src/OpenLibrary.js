import React, { useState } from 'react';

const Library = () => {
  const [bookTitle, setBookTitle] = useState('');
  const [firstPage, setFirstPage] = useState('');

  const handleChange = (event) => {
    setBookTitle(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(
        `https://openlibrary.org/search.json?q=${bookTitle}`
      );
      const data = await response.json();
      if (data.num_found === 0) {
        setFirstPage('Book not found');
      }
      else {
        setFirstPage(`This book has ${data.docs[0].number_of_pages} pages.`);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Book Title:
          <input type="text" value={bookTitle} onChange={handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
      {firstPage && <div>{firstPage}</div>}
    </div>
  );
};

export default Library;
