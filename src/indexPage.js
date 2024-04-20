import Post from './Post';
import { useEffect, useState } from 'react';

export default function IndexPage() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:4040/posts') // Corrected endpoint URL to match the backend route
            .then(response => response.json())
            .then(posts => {
                setPosts(posts);
            })
            .catch(error => {
                console.error('Error fetching posts:', error);
            });
    }, []);

    return (
        <>
            {posts.length > 0 && posts.map(post => (
                <Post key={post._id} {...post} /> // Assuming _id is a unique identifier for each post
            ))}
        </>
    );
}
