import React, {useEffect, useState } from 'react'
import Addmovie from './Addmovie'
import MovieItem from './MovieItem'


function MovieList() {
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const [year, setYear] = useState('');
    const [genre, setGenre] = useState('');
    

    
        const fetchMovies = async () => {
            if (!searchTerm) return;

            try {
                const response = await fetch(
                `http://www.omdbapi.com/?s=${searchTerm}&apikey=1b0b0c7e`
                );


                const data = await response.json();
                
                if (data.search) {
                    const detailedMovies = await Promise.all(
                        data.Search.map(async (movie) => {
                            const response = await fetch(
                                `http://www.omdbapi.com/?i=${movie.imdbID}&apikey=1b0b0c7e`
                            );
                            
                            return await response.json();
                        })
                    );
                    const filteredMovies = detailedMovies.filter(
                        (movie) => genre ? movie.genre.toLowerCase().includes(genre.toLowerCase()) : true)
                        

                        setMovies (filteredMovies)
                    
                    } else {
                        setMovies(data.Search || []);
                    }
                } catch (error) {
                    console.error('Error fetching movies:', error);
                }
            };
return (
                    <div className="max-w-lg mx-auto p-4">
                        <h1 className="text-2xl font-bold text-center mb-4 text-white">
                            Movie Finder
                        </h1>

                        <Addmovie
                        searchTerm={searchTerm}
                        setSearchTerm={setSearchTerm}
                        year={year}
                        setYear={setYear}
                        genre={genre}
                        setGenre={setGenre}
                        fetchMovies={fetchMovies}
                        />

                        <div>
                            {movies.map((movie) =>(
                                <MovieItem 
                                    key={movie.imdbID} 
                                    movie={movie} 
                                    deleteMovie={(id) => setMovies(prev => prev.filter(m => m.imdbID !== id))}
                                />
                            ))}
                        </div>
                            
                        {movies.length === 0 && (
                            <p className="text-center text-gray-400 mt-4">
                                Search for movies above!
                            </p>
                        )}
                    </div>
                 )
                        
                        
                    
                }

                
                
            

export default MovieList
