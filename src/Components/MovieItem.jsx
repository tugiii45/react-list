import React from 'react'

function MovieItem({movie, deleteMovie}) {

  return (
    <>
    <div className='flex justify-between items-center bg-white shadow p-4 rounded-xl hover:shadow-lg transition'>

        <div className='flex items-center gap-4'>
            {movie.Poster && movie.Poster !== 'N/A' && (
                <img 
                    src={movie.Poster} 
                    alt={movie.Title} 
                    className='w-16 h-24 object-cover rounded'
                />
            )}
            <div>
                <h2 className='font-semibold text-lg'>
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
        className='bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600 transition'>Delete</button>
    </div>
    </>
  );
}

export default MovieItem
