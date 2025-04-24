import { useState } from "react";

import movies from "./data/movies.json"

import Header from "./components/Header"
import MovieList from "./components/MovieList"
import Footer from "./components/Footer"

function App() {

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
    <>
      
      <Header numberOfMovies={moviesToDisplay.length} />
      <MovieList moviesArr={moviesToDisplay} callbackToDelete={deleteMovie} />
      <Footer />
      
    </>
  )
}

export default App
