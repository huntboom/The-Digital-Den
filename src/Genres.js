import React, { useState, useEffect } from 'react';
import store from './store';
import { updateShelf, resetShelf } from './store';

const GenreList = () => {
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    const initialGenres = ['Mystery', 'Fantasy','Crime','Religion'];
    setGenres(initialGenres);
    initialGenres.forEach(genre => {
      handleGenreClick(genre);
    });
  }, []);

  const handleGenreClick = async (genre) => {
    store.dispatch(resetShelf(genre));
    try {
      const response = await fetch(`https://openlibrary.org/search.json?q=subject:${genre}&limit=30`);
      const data = await response.json();
      const bookinfo = data.docs;
      let i = 0;
      const coversTitles = {};
      bookinfo.forEach((element) => {
        if (element.ebook_access === "public") {
          const coverIdentifier = element.cover_i;
          const bookCover = 'https://covers.openlibrary.org/b/id/' + coverIdentifier + '-M.jpg';
          coversTitles[i] = {
            title: element.title,
            url: bookCover,
          };
          i++;
        }
      });
      store.dispatch(updateShelf(genre, coversTitles));
    } catch (error) {
      console.error(error);
    }
  };

  const handleAddGenre = (genre) => {
    if (!genres.includes(genre)) {
      setGenres([...genres, genre]);
      handleGenreClick(genre);
    }
  };

  const availableGenres = [
    'Verne', 'Thriller', 'Horror', 'Mystery', 'Romance', 'Fantasy', 'Historical Fiction',
    'Non-Fiction', 'Physics', 'Autobiography', 'Comedy', 'Drama', 'Action',
    'Adventure', 'Crime', 'Western', 'Young Adult', 'Sports', 'Religion',
    'Philosophy', 'Children', 'Cookbooks'
  ];

  return (
    <div>
      <h2>Available Genres</h2>
      {availableGenres.map(genre => (
        <button key={genre} onClick={() => handleAddGenre(genre)}>{genre}</button>
      ))}
      <h2>Selected Genres</h2>
      <ul>
        {genres.map(genre => (
          <li key={genre}>{genre}</li>
        ))}
      </ul>
    </div>
  );
};

export default GenreList;
