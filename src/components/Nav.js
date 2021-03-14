import React from 'react';
import './styleforcomponents/index.scss';
import Logo from './images/blogLogo.png';
import { Link } from 'react-router-dom';


function Nav() {

    const homeLinkStyle = {
        listStyle: 'none',
        color: 'rgba(0, 0, 0, 0.54)',
        textDecoration: 'none'

    }

    return (
        <div className="navigation">
            <ul>
                {/* <Link to="/about">
                    <li>About</li>
                </Link> */}
                <li className="logo">
                    BloggersDream
                </li>
                <Link style={homeLinkStyle} to="/posts">
                    <li className="home-link">Home</li>
                </Link>
            </ul>
        </div>
    );
}

export default Nav;
