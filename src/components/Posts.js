import React, { useState, useEffect } from 'react';
import './styleforcomponents/index.scss';
import { Link } from 'react-router-dom';

function Posts() {

    const PostsLinkStyle = {
        listStyle: 'none',
        color: 'black',
        textDecoration: 'none',
        fontSize: '1.5rem'

    }

    // Using useEffect to run our fetPosts call only once when the component mounts
    useEffect(() => {
        fetchPosts();
    }, []);

    const [postsData, setPostsData] = useState([]);

    // Fetching all the posts for our blog from API
    const fetchPosts = async () => {

        const data = await fetch('https://jsonplaceholder.typicode.com/posts');

        const postsFromAPI = await data.json();

        // console.log(postsFromAPI);

        setPostsData(postsFromAPI);


    }


    return (
        <div className="posts">

            <h1 className='posts-heading'>Featured Articles</h1>

            {/* Mapping over all the posts we got from API to display the posts title */}
            {postsData.map(post => (

                <div className="each-post-section">
                    <div className="blog-image">
                    </div>
                    <h1 key={post.title} className='each-post'>
                        {/* Linking each title to a unique page named by its id */}
                        <Link style={PostsLinkStyle} to={`/posts/${post.id}`}>Title: {post.title}</Link>
                    </h1>
                </div>
            ))}

        </div>
    );
}

export default Posts;
