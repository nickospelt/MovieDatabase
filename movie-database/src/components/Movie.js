import React from "react"

const Movie = ({ movie }) => {
    return (
        <div className="movie">
            <h3>{!movie.original_title ? movie.name : movie.original_title}</h3>
            <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt="poster" className="poster"/>
            {!movie.release_date ? <p>No year found.</p> : <p>{movie.release_date}</p>}
        </div>
    )
}

export default Movie