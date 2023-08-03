import React from "react";
import { useState } from "react";

const SearchBar = ({ searchMovie }) => {
    const [search, setSearch] = useState('');

    const onSubmit = (e) => {
        e.preventDefault()

        if (!search) {
            alert('Must search something.')
            return
        }

        searchMovie(search)
        setSearch('')
    }

    return (
        <div className="search-bar" onSubmit={onSubmit}>
            <form className="search-form">
                <input className="text-field" id="search-area" type="text" placeholder="Enter a movie name..." value={search} onChange={(e) => setSearch(e.target.value)}></input>
                <input className="btn" id="submit--search-btn" type="submit" value="Search"></input>
            </form>
        </div>
    )
}

export default SearchBar