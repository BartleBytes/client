import { BrowserRouter, Route, Routes } from "react-router-dom";
import IndexPage from './indexPage';
import LoginPage from './LoginPage';
import RegisterPage from './RegisterPage';
import Layout from './layout';
import './App.css';
import {UserContextProvider} from "./UserContext";
import CreatePost from "./CreatePost";
import PostPage from "./PostPage";

function App() {
  return (
    <UserContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<IndexPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/create" element={<CreatePost />} />
            <Route path="post/:id" element={<PostPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </UserContextProvider>

  );
}

export default App;
