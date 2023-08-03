import React from "react";
import Movie from "./Movie";

const Movies = ({ movies }) => {
    return (
        <div className="movies">
            {movies?.map((movie) => (<Movie key={movie.id} movie={movie} />))}
        </div>
    )
}

export default Movies