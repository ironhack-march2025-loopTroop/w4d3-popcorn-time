import { useState } from "react";
import { Route, Routes } from "react-router-dom";

import movies from "./data/movies.json"

import Header from "./components/Header"
import MovieList from "./pages/MovieList"
import Footer from "./components/Footer"
import About from "./pages/About";
import Contact from "./pages/Contact";
import MovieDetails from "./pages/MovieDetails";


function App() {

  const [moviesToDisplay, setMoviesToDisplay] = useState(movies);
  const [title, setTitle] = useState("");


  // deleteMovie: will receive the id of a movie and delete it from state
  const deleteMovie = (movieToDeleteId) => {
    const newList = moviesToDisplay.filter((movie) => {
      return movie.id !== movieToDeleteId;
    })
    setMoviesToDisplay(newList);
  }

  
  // handleSubmit: will handle the form to create new movies
  const handleSubmit = (e) => {
    e.preventDefault();
    
    const newMovie = {
      title: title,
      year: 2025
    }

    const newList = [newMovie, ...moviesToDisplay]

    // moviesToDisplay.push(newMovie); // never, never modify state directly
    setMoviesToDisplay(newList)

    // clear form
    setTitle("")
  }



  return (
    <>

      <Header numberOfMovies={moviesToDisplay.length} />

      <section className="card">
        <h2>Create a new movie</h2>

        <form onSubmit={handleSubmit}>
          <label>
            Title:
            <input 
              type="text" 
              name="title" 
              placeholder="movie title" 
              value={title} 
              onChange={(e) => { setTitle(e.target.value) }}
            />
          </label>
          <button>Create</button>
        </form>
      </section>



      <Routes>
        <Route path="/" element={<MovieList moviesArr={moviesToDisplay} callbackToDelete={deleteMovie} />} />
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
