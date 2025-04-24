import { useState } from "react";
import { Route, Routes } from "react-router-dom";

import movies from "./data/movies.json"

import Header from "./components/Header"
import MovieList from "./pages/MovieList"
import Footer from "./components/Footer"
import About from "./pages/About";
import Contact from "./pages/Contact";

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

      <Routes>
        <Route path="/" element={<MovieList moviesArr={moviesToDisplay} callbackToDelete={deleteMovie} />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<h1>Page not found</h1>} />
      </Routes>

      <Footer />

    </>
  )
}

export default App
