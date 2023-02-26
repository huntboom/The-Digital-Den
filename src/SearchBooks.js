import React, { useState } from 'react';
const handleSearch = async () => {
  const response = await fetch(`https://gutendex.com/books/?search=Pride`);
  const data = await response.json();
  console.log(data)
  const firstResult = data.results[0]
  console.log(firstResult)
  const bookId = firstResult.id
  console.log(bookId)
  const bookUrl = 'https://www.gutenberg.org/files/' + bookId + "/" + bookId + "-0.txt"
  console.log(bookUrl)

  //https://www.gutenberg.org/files/1342/1342-0.txt
};

function SearchBooks() {
  const [searchTerm, setSearchTerm] = useState('');
  const [books, setBooks] = useState([]);
  //okay so I think to get a correctly formatted json I need to use gutendex.
  //https://gutendex.com/books/?search=Pride%20and%20Prejudice&format=json
  const handleeSearch = async () => {
    //https://gutenberg.org/ebooks/search/?query=$Pride%20and%20Prejudice&format=json
    const response = await fetch(`/books/?search=dickens`);
    const data = await response.json();
    console.log(data)
    setBooks(data.results);
  };

  return (
    <div>
      <button onClick={handleSearch} type="submit">Search</button>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            <a href={`https://www.gutenberg.org/ebooks/${book.id}`}>{book.title}</a> by {book.author_name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SearchBooks;
