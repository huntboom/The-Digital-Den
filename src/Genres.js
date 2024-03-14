import React, { useState, useEffect } from 'react';
import store from './store'; import { updateCoverTitles } from './actions';
import { resetCoverTitles } from './store';
const bookCovers = []
const coversTitles = {};
const GenreList = () => {
  const [genre, setGenre] = useState('');
  const [bookList, setBookList] = useState([]);
  const [bookCover, setBookCover] = useState(null);
  useEffect(() => {
    handleGenreClick('Mystery');
  }, []); // Empty dependency array ensures this runs only once on component mount
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

  const handleGenreClick = async (genre) => {
    setGenre(genre);
    store.dispatch(resetCoverTitles());
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
  const handleGenresClick = async (genre) => {
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
      console.log(data.results[0]['title'])
      const title = data.results[0]['title']
      const openResponse = await fetch(`https://openlibrary.org/search.json?q=subject:${title}`);
      //okay for item in the 
      const openData = await openResponse.json();
      console.log(openData)
    } catch (error) {
      console.error(error);
    }
  };
  const genres = [
    'Verne', 'Thriller', 'Horror', 'Mystery', 'Romance', 'Fantasy', 'Historical Fiction',
    'Non-Fiction', 'Physics', 'Autobiography', 'Comedy', 'Drama', 'Action',
    'Adventure', 'Crime', 'Western', 'Young Adult', 'Sports', 'Religion',
    'Philosophy', 'Children', 'Cookbooks'
  ];
  const handleBookLog = () => {
    const currentState = store.getState();
    console.log(currentState.bookText);
  };
  return (
    <div>
      {genres.map(genre => (
        <button key={genre} onClick={() => handleGenreClick(genre)}>{genre}</button>
      ))}
      <h2>{genre} Books</h2>
      <button onClick={handleBookLog}>Log Book</button>
    </div>
  );
};

export default GenreList;

