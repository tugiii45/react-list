import React from 'react'

function MovieItem({movie, deleteMovie}) {

  return (
    <div className='flex justify-between items-center bg-white p-4 rounded-lg border border-gray-200 mb-3'>
        <div className='flex items-center gap-3'>
            {movie.Poster && movie.Poster !== 'N/A' ? (
                <img 
                    src={movie.Poster} 
                    alt={movie.Title} 
                    className='w-12 h-16 object-cover rounded'
                />
            ) : (
                <div className='w-12 h-16 bg-gray-200 rounded flex items-center justify-center'>
                    <span>🎬</span>
                </div>
            )}
            <div>
                <h2 className='font-semibold text-gray-800'>
                    {movie.Title}
                </h2>

                {movie.Year && (
                    <p className='text-sm text-gray-500'>
                        {movie.Year}
                    </p>
                )}
            </div>
        </div>

        <button
        onClick={() => deleteMovie(movie.imdbID)}
        className='bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 text-sm'
        >
            Delete
        </button>
    </div>
  );
}

export default MovieItem
