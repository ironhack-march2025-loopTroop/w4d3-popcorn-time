import { useState } from "react";
import { Route, Routes } from "react-router-dom";

import movies from "./data/movies.json"

import Header from "./components/Header"
import MovieList from "./pages/MovieList"
import Footer from "./components/Footer"
import About from "./pages/About";
import Contact from "./pages/Contact";
import MovieDetails from "./pages/MovieDetails";
import AddMovie from "./pages/AddMovie";


function App() {

  const [moviesToDisplay, setMoviesToDisplay] = useState(movies);


  // createMovie: will receive an object with the details of a movie and update state
  const createMovie = (newMovieDetails) => {

    // find out id for the movie that we want to add
    const movieIds = moviesToDisplay.map((movieObj) => {
      return movieObj.id;
    });
    const maxId = Math.max(...movieIds);
    const nextId = maxId + 1;

    const newMovie = {
      ...newMovieDetails,
      id: nextId
    }

    const newList = [newMovie, ...moviesToDisplay]

    setMoviesToDisplay(newList)
  }

  // deleteMovie: will receive the id of a movie and delete it from state
  const deleteMovie = (movieToDeleteId) => {
    const newList = moviesToDisplay.filter((movie) => {
      return movie.id !== movieToDeleteId;
    })
    setMoviesToDisplay(newList);
  }


  return (
    <>

      <Header numberOfMovies={moviesToDisplay.length} />

      <Routes>
        <Route path="/" element={<MovieList moviesArr={moviesToDisplay} callbackToDelete={deleteMovie} />} />
        <Route path="/create" element={<AddMovie callbackToCreate={createMovie} />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/movies/:movieId" element={<MovieDetails moviesArr={moviesToDisplay} />} />
        <Route path="*" element={<h1>Page not found</h1>} />
      </Routes>

      <Footer />

    </>
  )
}

export default App
