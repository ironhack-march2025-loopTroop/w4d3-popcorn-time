import { Link } from "react-router-dom";

function MovieSummary(props) {
    return (
        <div className="card">
            <h2>{props.movieDetails.title}</h2>
            <p>Rating: {props.movieDetails.rating}</p>

            { props.movieDetails.imgURL 
                && <img src={props.movieDetails.imgURL} alt="Movie Poster" />
            }

            <p>
                {/* when the user clicks, we'll invoke a function in the parent component */}
                <button onClick={() => { props.callbackToDelete(props.movieDetails.id) }}>Delete this movie</button>
                
                <Link to={`/movies/${props.movieDetails.id}`}>
                    <button className="btn btn-primary">More details</button>
                </Link>
            </p>

        </div>
    )
}

export default MovieSummary;