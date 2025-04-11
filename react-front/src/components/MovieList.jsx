import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MovieCard from './MovieCard';
import MovieForm from './MovieForm';

const MovieList = ({user}) => {
    const [movies, setMovies] = useState([]);

    const fetchMovies = async () => {
        const res = await axios.get('/movies');
        setMovies(res.data);
        console.log("get movies", movies);
    };

    useEffect(() => {
        fetchMovies();
    }, []);

    return (
        <div className="container mt-4">
            <h2 className="mb-3">Список фільмів</h2>
            <div className="row">
                {movies.map((movie) => (
                    <MovieCard key={movie._id} movie={movie} onUpdate={fetchMovies} user={user} />
                ))}
            </div>

            <hr />
            <MovieForm onUpdate={fetchMovies} user={user} />
        </div>
    );
};

export default MovieList;
