import { NavLink } from "react-router-dom";

import "./Header.css"

function Header(props){
    return (
        <div className="Header">
            <nav>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/create">Add new movie</NavLink>
                <NavLink to="/about">About Page</NavLink>
                <NavLink to="/contact">Contact Page</NavLink>
            </nav>

            <h1>Welcome to Popcorn Time! 🍿</h1>
            <h2>Number of movies: {props.numberOfMovies}</h2>
        </div>
    )
}

export default Header;