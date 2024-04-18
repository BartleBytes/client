import { Link } from "react-router-dom";
import { useContext, useEffect } from "react";
import { UserContext } from "./UserContext";

export default function Header() {
  const { setUserInfo, userInfo } = useContext(UserContext);
  
  const fetchUserInfo = () => {
    fetch('http://localhost:4040/profile', {
      credentials: 'include',
      method: "GET",
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Failed to fetch user information');
        }
      })
      .then(userInfo => {
        setUserInfo(userInfo);
      })
      .catch(error => {
        console.error('Error fetching user information:', error);
      });
  }

  useEffect(() => {
    fetchUserInfo();
  }, []);
  

  const logout = () => {
    fetch('http://localhost:4040/logout', {
      credentials: 'include',
      method: 'POST',
    })
      .then(response => {
        if (response.ok) {
          setUserInfo(null);
          // Additional actions after successful logout, e.g., redirecting
        } else {
          throw new Error('Failed to logout');
        }
      })
      .catch(error => {
        console.error('Error logging out:', error);
      });
  }

  const username = userInfo?.username;

  return (
    <header>
      <Link to="/" className="logo">MyBlog</Link>
      <nav>
        {username ? (
          <>
            <span>Hello, {username}</span>
            <Link to="/create">Create new post</Link>
            <button href="#" onClick={logout}>Logout ({username})</button>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        )}
      </nav>
    </header>
  );
}
