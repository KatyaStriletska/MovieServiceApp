import React, { useState } from 'react';
import axios from 'axios';

const Login = ({ onLogin }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('/login', { username, password });
            console.log(res);
            console.log(res.data);
            const { token, username: loggedInUsername , role } = res.data;
            localStorage.setItem('token', token);
            console.log(loggedInUsername);
            const user = { loggedInUsername, role };
            console.log(user);
            onLogin(user);

        } catch (err) {
            alert(err);
        }
    };

    return (
        <div className="card p-3 mx-auto" style={{ maxWidth: '400px' }}>
            <h4>Увійти</h4>
            <form onSubmit={handleSubmit}>
                <div className="mb-2">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Логін"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-2">
                    <input
                        type="password"
                        className="form-control"
                        placeholder="Пароль"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary w-100">Увійти</button>
            </form>
        </div>
    );
};

export default Login;
