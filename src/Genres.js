import React, { useState } from 'react';
import store from './store';
import { updateCoverTitles } from './actions';
const bookCovers = []
const coversTitles = {};
const GenreList = () => {
  const [genre, setGenre] = useState('');
  const [bookList, setBookList] = useState([]);
  const [bookCover, setBookCover] = useState(null);
  const handleMysteryClick = async () => {
    setGenre('Mystery');
    try {
      const response = await fetch(`https://openlibrary.org/search.json?q=subject:mystery&limit=30`);
      const data = await response.json();
      setBookList(data.docs.map(book => book.title));
    } catch (error) {
      console.error(error);
    }
  };

  const handleScienceFictionClick = async () => {
    setGenre('Science Fiction');
    try {
      const response = await fetch(`https://openlibrary.org/search.json?q=subject:science+fiction&limit=30`);
      const data = await response.json();
      const bookinfo = data.docs;
      let i = 0;
      bookinfo.forEach((element) => {
        if (element.ebook_access == "public") {
          const bookIdentifier = element.lending_identifier_s
          const bookCover = 'https://archive.org/download/' + bookIdentifier + '/page/cover.jpg'
          coversTitles[i] = {
            title: element.title,
            url: bookCover,
          };
          store.dispatch(updateCoverTitles(coversTitles));
          i++;
        }
      });
      setBookList(data.docs.map(book => book.title));
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      <button onClick={handleMysteryClick}>Mystery</button>
      <button onClick={handleScienceFictionClick}>Science Fiction</button>
      <h2>{genre} Books</h2>
      {/* <ul> */}
      {/*   {bookList.map((title, index) => ( */}
      {/*     <li key={index}>{title}</li> */}
      {/*   ))} */}
      {/* </ul> */}
    </div>
  );
};

export default GenreList;

