import React, {useEffect, useState } from 'react'
import Addmovie from './Addmovie'
import MovieItem from './MovieItem'


function MovieList() {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('Reminders of Him');

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const response = await fetch(
                `http://www.omdbapi.com/?s=${searchTerm}&apikey=1b0b0c7e`
                );


                const data = await response.json();
                console.log("API DATA", data);
                
                setMovies(data.Search || []);
                setLoading(false);

            } catch (error) {
                console.error('Error fetching movies:', error);
                setLoading(false); 

            }
            };

            fetchMovies();
        }, []);

        const addMovie = (movie) => {
            setMovies((prev) => [movie, ...prev]);
        };

const deleteMovie = (id) => {
        setMovies((prev) => prev.filter((movie) => movie.imdbID !== id));
        };

        if (loading) {
            return (

                <div className="text-center mt-10 text-xl">
                    <p>Loading Movies...</p>
                </div>
            );

            
        }
    


  return (
    <>
    <div className="max-w-xl mx-auto p-6">
                    <h1 className='text-3xl font-bold text-center mb-6'>HELLO MOVIES

                    </h1>

                    <Addmovie addMovie={addMovie} />
{movies.map((movie, index) => (
                        <MovieItem
                            key={movie.imdbID || index}
                            movie={movie}
                            deleteMovie={deleteMovie}
                            />
                    ))}
                </div>
    
    </>
  )
}

export default MovieList
