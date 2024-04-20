import {useState, useContext} from "react";
import {Navigate} from 'react-router-dom';
import {UserContext} from "./UserContext";
// import BASE_URL from "./config";

export default function LoginPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [redirect, setRedirect] = useState(false);
    const {setUserInfo} = useContext(UserContext);
    async function login(ev) {
        ev.preventDefault();
        const response = await fetch(`/login`, {
        method: 'POST',
        body: JSON.stringify({username, password}),
        headers: {'Content-Type': 'application/json'},
        credentials: 'include',
       });
       if (response.ok){
        response.json().then(userInfo => {
            setUserInfo(userInfo);
            setRedirect(true);
        });
    
       } else {
        alert('wrong credentials');
       }
    }


    if(redirect) {
        return <Navigate to={'/'} />
    }

    return(
        <div>
            <form className="Login" onSubmit={login}>
                <h1>Login</h1>
                <input type="text" placeholder="username" value={username} onChange={ev => setUsername(ev.target.value)} ></input>
                <input type="password" placeholder="password" value={password} onChange={ev => setPassword(ev.target.value)} ></input>
                <button>Login</button>
            </form>
        </div>
    )
}