import React from 'react';
import './App.scss';
import Nav from './components/Nav';
import Posts from './components/Posts';
import PostDetail from './components/PostDetail';
import AuthorDetail from './components/AuthorDetail';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    // Handling the routing for the whole application here
    <Router>
      <div className="App">
        <Nav />
        <Route path="/" exact component={Posts} />
        <Route path="/posts" exact component={Posts} />
        {/* For the routes whose path will be the id of the posts */}
        <Route path="/posts/:id" component={PostDetail} />
        <Route path="/author/:id" component={AuthorDetail} />
      </div>

    </Router>
  );
}

const Home = () => (
  <div>
    <h1>Home Page</h1>
  </div>
);

export default App;
