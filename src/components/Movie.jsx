
function Movie(props) {
    return (
        <div className="card">
            <h2>{props.movieDetails.title}</h2>
            <p>Year: {props.movieDetails.year}</p>
            <img src={props.movieDetails.imgURL} alt="Movie Poster" />

            <p>
                {/* when the user clicks, we'll invoke a function in the parent component */}
                <button onClick={() => { props.callbackToDelete(props.movieDetails.id) }}>Delete this movie</button>
            </p>

        </div>
    )
}

export default Movie;