import React from 'react';

function Addmovie({
  searchTerm,
  setSearchTerm,
  year,
  setYear,
  genre,
  setGenre,
  fetchMovies
}) {
  return (
    <div className="bg-gray-800 p-4 rounded-lg border border-gray-700 mb-4">
      <h2 className="text-xl font-bold text-center mb-4 text-white">
        Search Movies
      </h2>
      
      <div className="flex flex-col gap-3">
        <input
          type="text"
          placeholder="Movie title"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border border-gray-600 bg-gray-700 text-white p-2 rounded w-full placeholder-gray-400"
        />

        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Year"
            value={year}
            onChange={(e) => setYear(e.target.value)}
            className="border border-gray-600 bg-gray-700 text-white p-2 rounded flex-1 placeholder-gray-400"
          />

          <input
            type="text"
            placeholder="Genre"
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
            className="border border-gray-600 bg-gray-700 text-white p-2 rounded flex-1 placeholder-gray-400"
          />
        </div>

        <button 
          onClick={fetchMovies}
          className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Search
        </button>
      </div>
    </div>
  );
}

export default Addmovie;
