import Movie from "./Movie";


function MovieList(props) {

    return (
        <section className="MovieList">
            {props.moviesArr.map((movieObj) => {
                return (
                    <Movie 
                        key={movieObj.id} 
                        movieDetails={movieObj} 
                        callbackToDelete={props.callbackToDelete}
                    />
                )
            })}
        </section>
    )
}

export default MovieList;