import { useState } from "react";
import movies from "../data/movies.json"
import Movie from "./Movie";


function MovieList() {

    const [moviesToDisplay, setMoviesToDisplay] = useState(movies);


    // deleteMovie: will receive the id of a movie and delete it from state
    const deleteMovie = (movieToDeleteId) => {
        const newList = moviesToDisplay.filter((movie) => {
            if (movie.id !== movieToDeleteId) {
                return true; // keep it
            } else {
                return false; // discard it
            }
        })
        setMoviesToDisplay(newList);
    }

    return (
        <section className="MovieList">
            <h1>Number of movies: {moviesToDisplay.length}</h1>

            {moviesToDisplay.map((movieObj) => {
                return (
                    <Movie 
                        key={movieObj.id} 
                        movieDetails={movieObj} 
                        callbackToDelete={deleteMovie}
                    />
                )
            })}
        </section>
    )
}

export default MovieList;