import {useState} from 'react';
import BASE_URL from './config';

export default function RegisterPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    async function register(ev) {
        ev.preventDefault();
        const response = await fetch(`${BASE_URL}/register`, {
                method: 'POST',
                body: JSON.stringify({username, password}),
                headers: {'Content-Type': 'application/json'},
    
            });
            if (response.status === 200) {
                alert('registration successful');
            } else {
                alert('registration failed');

            }

    }
    return(
        <div>
            <form className="Register" onSubmit={register}>
                <h1>Register</h1>
                <input type="text" 
                        placeholder="username"
                        value={username}
                        onChange={ev => setUsername(ev.target.value)}></input>
                <input type="password"
                        placeholder="password"
                        value={password}
                        onChange={ev => setPassword(ev.target.value)}></input>
                <input type="email" 
                        placeholder="email"
                        value={email}
                        onChange={ev => setEmail(ev.target.value)}></input>
                <button>Register</button>
            </form>
        </div>
    )
}