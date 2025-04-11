import React, { useState } from 'react';
import MovieList from './components/MovieList';
import Login from './components/Login';

function App() {
    const [user, setUser] = useState(null);
    const [showLogin, setShowLogin] = useState(false);

    const handleLogout = () => {
        setUser(null);
        localStorage.removeItem('token');
    };

    return (
        <div>
            <nav className="navbar navbar-dark bg-dark">
                <div className="container d-flex justify-content-between align-items-center">
                    <span className="navbar-brand mb-0 h1">Кінобаза</span>
                    <div>
                        {user ? (
                            <>
                                <span className="text-white me-3">{user.loggedInUsername}</span>
                                <button className="btn btn-outline-light btn-sm" onClick={handleLogout}>
                                    Вийти
                                </button>
                            </>
                        ) : (
                            <button
                                className="btn btn-outline-light btn-sm"
                                onClick={() => setShowLogin(true)}
                            >
                                Увійти
                            </button>
                        )}
                    </div>
                </div>
            </nav>

            <div className="container mt-3">
                {showLogin && !user && (
                    <Login
                        onLogin={(loggedInUser) => {
                            setUser(loggedInUser);
                            setShowLogin(false);
                        }}
                    />
                )}

                {user && <MovieList user={user} />}
            </div>
        </div>
    );
}

export default App;
