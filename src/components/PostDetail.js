import React, { useState, useEffect } from 'react';
import './styleforcomponents/index.scss';
import { Link } from 'react-router-dom';

export default function PostDetail({ match }) {

    const AuthorLinkStyle = {
        listStyle: 'none',
        color: 'black',
        textDecoration: 'none'

    }

    const [postData, setPostData] = useState([]);
    const [author, setAuthor] = useState('');
    const [comment, setComment] = useState('');

    // Using useEffect to run our fetPosts call only once when the component mounts
    useEffect(() => {

        fetchPost();
    }, []);



    // Fetching all the posts for our blog from API
    const fetchPost = async () => {

        const data = await fetch(`https://jsonplaceholder.typicode.com/posts/${match.params.id}`);

        const postFromAPI = await data.json();

        // console.log(postsFromAPI);

        setPostData(postFromAPI);

        // console.log(postData);
    }

    // Fetching the author of our post from the API
    const fetchAuthor = async () => {


        const authorResponse = await fetch(`https://jsonplaceholder.typicode.com/users/${postData.userId}`);

        const authorFromAPI = await authorResponse.json();

        // console.log(authorFromAPI);

        setAuthor(authorFromAPI);


    }

    fetchAuthor();

    // Fetching the comments of our post from the API
    const fetchComments = async () => {


        const commentsResponse = await fetch(`https://jsonplaceholder.typicode.com/comments/${postData.id}`);

        const commentsFromAPI = await commentsResponse.json();

        setComment(commentsFromAPI);


    }

    fetchComments();







    return (

        <div className="post-detail">
            <h1>{postData.title}</h1>
            <p>{postData.body}</p>
            {/* <Link to={`/author/${author.id}`}>Author is :{author.name}</Link> */}
            <Link style={AuthorLinkStyle} to={`/author/${author.id}`}><h3>Author: {author.name}</h3></Link>
            <h4>Comments: {comment.body}</h4>
        </div>

    );
}
