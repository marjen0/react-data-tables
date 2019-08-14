import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

const home = (props) => {
    return (
        <div className="wrapper">
            <div className="container">
                <ul>
                    <li><Link to='/react-table'>react-table</Link></li>
                    <li><Link to='/agGrid'>agGrid</Link></li>
                </ul>
                
            </div>
        </div>
    );
}

export default home; 