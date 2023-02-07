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
      // for (i in data.docs[i]) {
      //   console.log(item)
      // }
      console.log(data.docs)
      const bookinfo = data.docs;
      bookinfo.forEach((element, index, array) => {
        console.log(element.ebook_access)
        if (element.ebook_access == "public") {
          // console.log('true')
          const bookIdentifier = element.lending_identifier_s
          // console.log(bookIdentifier)
          const bookCover = 'https://archive.org/download/' + bookIdentifier + '/page/cover.jpg'
          coversTitles[index] = {
            title: element.title,
            url: bookCover,
            key: index
          };
          store.dispatch(updateCoverTitles(coversTitles));
          console.log(coversTitles)
          console.log(coversTitles['2']["title"])
          // console.log(bookCover)
          bookCovers.push(bookCover)
          // console.log(bookCovers)
          const setBookCover = async () => {
            const bookCover = await fetch('https://archive.org/download/{bookIdentifier}/page/title.jpg');
            // console.log(bookCover)
          };
        } else {
          console.log("false")
        }
      });
      // console.log(data.docs[0].ebook_access);
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
      <ul>
        {bookList.map((title, index) => (
          <li key={index}>{title}</li>
        ))}
      </ul>
      {/* <ul> */}
      {/*     {bookCovers.map((title,index)=> ( */}
      {/**/}
      {/*          <img src={bookCover} key={index} alt="Book Cover" /> */}
      {/*     ))} */}
      {/* </ul> */}

      {/* <img src={bookCovers[0]} alt="Book Cover" /> */}
    </div>
  );
};

export default GenreList;
