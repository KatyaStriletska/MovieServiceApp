import React from 'react';
import axios from 'axios';

const MovieCard = ({ movie, onUpdate, user }) => {
    const handleDelete = async () => {
        await axios.delete(`/movie/${movie._id}`);
        onUpdate();
    };

    return (
        <div className="col-md-4 mb-4">
            <div className="card h-100">
                <div className="card-body">
                    <h5 className="card-title">{movie.title}</h5>
                    <p className="card-text">{movie.description}</p>
                    <p><strong>Рік:</strong> {movie.year}</p>
                    {user?.role === 'admin' && (
                        <button className="btn btn-danger btn-sm" onClick={handleDelete}>
                            Видалити
                        </button>
                    )}

                </div>
            </div>
        </div>
    );
};

export default MovieCard;
