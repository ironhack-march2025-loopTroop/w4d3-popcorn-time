import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddMovie(props) {

    const [title, setTitle] = useState("");
    const [rating, setRating] = useState("");

    const navigate = useNavigate();

    // handleSubmit: will handle the form to create new movies
    const handleSubmit = (e) => {
        e.preventDefault();


        // prepare an object with the details of the new movie
        const newMovie = {
            title: title,
            rating: rating,
        }

        props.callbackToCreate(newMovie);

        // clear form
        setTitle("")
        setRating("")

        // redirect
        navigate("/")
    }

    return (
        <section className="card">
            <h2>Create a new movie</h2>

            <form onSubmit={handleSubmit}>
                <label>
                    Title:
                    <input
                        type="text"
                        required
                        name="title"
                        placeholder="movie title"
                        value={title}
                        onChange={(e) => { setTitle(e.target.value) }}
                    />
                </label>

                <label>
                    Rating:
                    <input
                        type="number"
                        min={1}
                        max={10}
                        required
                        name="rating"
                        placeholder="rating"
                        value={rating}
                        onChange={(e) => { setRating(e.target.value) }}
                    />
                </label>

                <button>Create</button>
            </form>
        </section>
    )
}

export default AddMovie