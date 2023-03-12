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

  //Okay instead of openlibrary--->project gutenburg, how about I start with project Gutenburg to ensure 
  //I the titles exist there, and then I get the covers for the books from open library. 
  //Because Project Gutenburg does not allow API request, I'll have to use gutendex
  //https://gutendex.com/books/?topic=${topic-goes-here}
  //Okay request made and works, the "next" object in the json gives the url for the next set of
  //books as this one seems to set the limit at 32 books.
  //So I'll 
  const handleGenresClick = async (genre) => {
    setGenre(genre);
    try {
      const response = await fetch(`https://openlibrary.org/search.json?q=subject:${genre}&limit=30`);
      const data = await response.json();
      const bookinfo = data.docs;
      let i = 0;
      console.log(bookinfo)
      bookinfo.forEach((element) => {
        if (element.ebook_access == "public") {
          const coverIdentifier = element.cover_i
          const bookCover = 'https://covers.openlibrary.org/b/id/' + coverIdentifier + '-M.jpg'
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
  //okay so I can take the count, divide it by 32 to see how many pages there are.
  const handleGenreClick = async (genre) => {
    setGenre(genre);
    try {
      //make the request for the given genre
      const response = await fetch(`https://gutendex.com/books/?topic=${genre}`);
      const data = await response.json();
      //take the count and divide it by 32 as there are 32 books per page
      const count = data.count
      console.log("count: " + count)
      let numberofpages = (data.count) / 32
      console.log("numberofpages: " + numberofpages)
      //if the count is not divisible by 32, then the numberofpages will need to have 1 added to it to 
      //account for the remaining books on the last page
      //IF it has a remainder, then the numberofpages I iterate through will be equal to
      const hasRemainder = (data.count % 32) !== 0;
      console.log("hasRemainder: " + hasRemainder)
      if (hasRemainder) {
        numberofpages = Math.round(numberofpages) + 1;
      }
      console.log("numberofpages: " + numberofpages)
      console.log(data)
      const page2response = await fetch(data.next)
      const page2data = await page2response.json();
      console.log(data.results)
      console.log(page2data.results)
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      <button onClick={() => handleGenreClick('Science Fiction')}>Science Fiction</button>
      <button onClick={() => handleGenreClick('Thriller')}>Thriller</button>
      <button onClick={() => handleGenreClick('Horror')}>Horror</button>
      <button onClick={() => handleGenreClick('Mystery')}>Mystery</button>
      <button onClick={() => handleGenreClick('Romance')}>Romance</button>
      <button onClick={() => handleGenreClick('Fantasy')}>Fantasy</button>
      <button onClick={() => handleGenreClick('Historical Fiction')}>Historical Fiction</button>
      <button onClick={() => handleGenreClick('Non-Fiction')}>Non-Fiction</button>
      <button onClick={() => handleGenreClick('Physics')}>Physics</button>
      <button onClick={() => handleGenreClick('Autobiography')}>Autobiography</button>
      <button onClick={() => handleGenreClick('Comedy')}>Comedy</button>
      <button onClick={() => handleGenreClick('Drama')}>Drama</button>
      <button onClick={() => handleGenreClick('Action')}>Action</button>
      <button onClick={() => handleGenreClick('Adventure')}>Adventure</button>
      <button onClick={() => handleGenreClick('Crime')}>Crime</button>
      <button onClick={() => handleGenreClick('Western')}>Western</button>
      <button onClick={() => handleGenreClick('Young Adult')}>Young Adult</button>
      <button onClick={() => handleGenreClick('Sports')}>Sports</button>
      <button onClick={() => handleGenreClick('Religion')}>Religion</button>
      <button onClick={() => handleGenreClick('Philosophy')}>Philosophy</button>
      <button onClick={() => handleGenreClick('Children')}>Children</button>
      <button onClick={() => handleGenreClick('Cookbooks')}>Cookbooks</button>
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

