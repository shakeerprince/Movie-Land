import { useEffect } from "react";
import MovieCard from "./MovieCard";
import './App.css';
import SearchIcon from './search.svg';
import { useState } from "react";
//5f9f425

const API_URL = 'http://www.omdbapi.com?apikey=5f9f425';
//const API_URL = 'https://api.consumet.org/movies/dramacool/{query}?page={number}';

//const API_URL = 'https://api.consumet.org/movies/dramacool';



const movie1 = {
    "Title": "Amazing Spiderman Syndrome",
    "Year": "2012",
    "imdbID": "tt2586634",
    "Type": "movie",
    "Poster": "N/A"
}
const App = () => {
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    
    const searchMovies = async(title)=>{
        const response = await fetch(`${API_URL}&s=${title}`)
        const data =  await response.json();

        setMovies(data.Search);
    }
        
    // const searchMovies = async (title, page = 1) => {
    //     const response = await fetch(`${API_URL}/${title}?page=${page}`);
    //     const data = await response.json();
    //     setMovies(data.results); // Adjust if the API structure differs
    // }
    

    useEffect(()=> {
        searchMovies('Superman')
    }, []);






 return(
   <div className="app">
    <h1>MovieLand</h1>

    <div className="search">
        <input
         placeholder="Search for Movies"
         value= {searchTerm}
         onChange={(e) => {setSearchTerm(e.target.value)}}
        />
        <img 
        src={SearchIcon}
        alt="search"
        onClick={() => searchMovies(searchTerm)}
        />
    </div>

    { movies?.length > 0
        ? (
            <div className="container">
                {movies.map((movie)=>(
                    <MovieCard movie={movie} />
                ))}

            </div>
        ) : (
            <div className="empty">
                <h2>No movies found</h2>
            </div>
        )}

    
   </div>
 );
}

export default App;