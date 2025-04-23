import movies from "../data/movies.json"


function MovieList(){    
    return (
        <section className="MovieList">

            <h1>List of movies</h1>
            
            {movies.map((movieObj) => {                
                return (
                    <div key={movieObj.id} className="card">
                        <p>{movieObj.title}</p>
                        <p>Year: {movieObj.year}</p>
                        <img src={movieObj.imgURL} alt="Movie Poster" />
                    </div>
                )
            })}

        </section>
    )
}

export default MovieList;