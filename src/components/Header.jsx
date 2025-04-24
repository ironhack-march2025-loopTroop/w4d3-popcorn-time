import "./Header.css"

function Header(props){
    return (
        <div className="Header">
            <h1>Welcome to Popcorn Time! 🍿</h1>
            <h2>Number of movies: {props.numberOfMovies}</h2>
        </div>
    )
}

export default Header;