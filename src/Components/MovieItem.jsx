import React from 'react'

function MovieItem({movie, deleteMovie}) {

  return (
    <>
    <div className='flex justify-between items-center bg-white shadow p-4 rounded-xl hover:shadow-lg transition'>

        <div>
            <h2 className='font-semibold text-lg'>
                {movie.title}
            </h2>

            <p className='text-sm text-gray-500'>
                {movie.genre ? movie.genre : 'Unknown Genre'}
            </p>

            {movie.year && (
                <p className='text-xs text-gray-400'>
                    {movie.year}
                </p>
            )}
        </div>

        <button
        onClick={() => deleteMovie(movie.id)}
        className='bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600 transition'>Delete</button>
    </div>
    </>
  );
}

export default MovieItem
