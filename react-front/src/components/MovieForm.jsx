import React, { useState } from 'react';
import axios from 'axios';

const MovieForm = ({ onUpdate, user }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [year, setYear] = useState('');
    const [genre, setGenre] = useState('');
    const [director, setDirector] = useState('');
    const [cast, setCast] = useState([]);
    const [releaseDate, setReleaseDate] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const movieData = {
            title,
            director,
            description,
            genre,
            releaseDate: new Date(releaseDate).toISOString()
        };
        try {
            await axios.post('/movie', movieData);
            onUpdate();
            alert('Movie created successfully!');
            setTitle('');
            setDirector('');
            setReleaseDate('');
            setGenre('');
            setDescription('');
        } catch (error) {
            console.error(error);
            alert('Error creating movie');
        }
    };
    console.log(user)
    if (user?.role !== 'admin') return null;

    return (
        <div>
            <h4>Додати фільм</h4>
            <form onSubmit={handleSubmit}>
                <div className="mb-2">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Назва"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-2">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Жанр"
                        value={genre}
                        onChange={(e) => setGenre(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-2">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Режисер"
                        value={director}
                        onChange={(e) => setDirector(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-2">
                  <textarea
                      className="form-control"
                      placeholder="Опис"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                    <label className="form-label">Дата випуску</label>
                    <input
                        type="date"
                        className="form-control"
                        value={releaseDate}
                        onChange={(e) => setReleaseDate(e.target.value)}

                    />
                </div>
                <button className="btn btn-success" type="submit">
                    Додати
                </button>
            </form>
        </div>
    );
};

export default MovieForm;
