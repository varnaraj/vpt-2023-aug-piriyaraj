import React from 'react';

import Bookitem from './BookItem';
function SearchResults({ results }) {
  return (
    <div>
      <h2>Search Results</h2>
      <ul>
        {results.map((result) => (
            <div>
          <li key={result.id}>
            <h3>{result.title}</h3>
            <img src ={`https://covers.openlibrary.org/b/id/${result.cover_i}-M.jpg`} alt="" />
            <p>Author: {result.author_name}</p>
            <p>Year: {result.year}</p>
          </li>
            {/* <li><Bookitem/></li> */}
            </div>
        ))}
      </ul>
    </div>
  );
}

export default SearchResults;
