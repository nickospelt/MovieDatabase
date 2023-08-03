import Filter from "./components/Filter"
import Header from "./components/Header";
import Movies from "./components/Movies";

import { useState, useEffect } from "react"
import axios from "axios"
import SearchBar from "./components/SearchBar";


function App() {
  const [movies, setMovies] = useState([])
  const [filteredMovies, setFilteredMovies] = useState([])

  useEffect(() => {
    const options = {
      method: 'GET',
      url: 'https://api.themoviedb.org/3//trending/all/week?api_key=3da2ffd578937432a5b2f3720d68dc83&language=en-US'
    }

    const getMovies = async () => {
      try {
        const response = await axios.request(options);
        setMovies(response.data.results)
        console.log(response.data.results)
      } catch (error) {
        console.error(error)
      }
    }

    getMovies().catch(console.error)
  })

  const filterMovies = (start, end) => {
    setFilteredMovies(movies.filter(movie => (movie.release_date?.substring(0,4) >= start?.substring(0,4) && movie.release_date?.substring(5,7) >= start?.substring(5,7)) &&
    (movie.release_date?.substring(0,4) <= end?.substring(0,4) && movie.release_date?.substring(5,7) <= end?.substring(5,7))))
  }
  const seeMovies = () => {
    setFilteredMovies(movies);
  }
  const searchMovie = (search) => {
    setFilteredMovies(movies.filter(movie => (!movie.original_title ? movie.name.includes(search) : movie.original_title.includes(search))))
  }

  return (
    <div className="App">
      <Header seeMovies={seeMovies}/>
      <SearchBar searchMovie={searchMovie} />
      <Filter filterMovies={filterMovies}/>
      <Movies movies={filteredMovies.length > 0 ? filteredMovies : movies } />
    </div>
  );
}

export default App;
