import React, { useState, useEffect } from 'react';


export default function AuthorDetail({ match }) {


    const [authorDetails, setAuthorDetails] = useState({});

    // Using useEffect to run our fetchAuthorDetails call only once when the component mounts
    useEffect(() => {
        fetchAuthorDetails();
    }, []);

    // Fetching all the details about the author from our API
    const fetchAuthorDetails = async () => {

        const res = await fetch(`https://jsonplaceholder.typicode.com/users/${match.params.id}`);

        const finalResponse = await res.json();


        setAuthorDetails(finalResponse);

    }


    // Fetching the author of our post from the API
    // const fetchAuthor = async () => {


    //     const authorResponse = await fetch(`https://jsonplaceholder.typicode.com/users/${postData.userId}`);

    //     const authorFromAPI = await authorResponse.json();

    // console.log(authorFromAPI);
    //     console.log(authorFromAPI);

    //     setAuthor(authorFromAPI);


    // }

    // fetchAuthor();




    return (

        <div className="author-detail">
            <h1>{authorDetails.name}</h1>
            <h3>Username: {authorDetails.username}</h3>
            <h3>Email: {authorDetails.email}</h3>
            <h3>Phone: {authorDetails.phone} </h3>
            <h3>Website: {authorDetails.website} </h3>

        </div>

    );
}
