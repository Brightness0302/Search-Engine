import React from 'react';
import App from '../App';

const Posts = ({ posts, loading }) => {
    if (loading) {
        return <h2>Loading...</h2>;
    }
    return (
    <ul className='list-group mb-4'>
    {posts.map(post => (
        <li key={post.title} className='list-group-item'>
            {post.title}
        </li>

    ))}
</ul>
);
};

export default Posts;