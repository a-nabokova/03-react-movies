import { useState } from 'react';
import css from './App.module.css';
import SearchBar from '../SearchBar/SearchBar';
import type { Movie } from '../../types/movie';
import fetchMovies from '../../services/movieService';
import MovieGrid from '../MovieGrid/MovieGrid';

 
function App() {

  const [movies, setMovies] = useState<Movie[]>([]); 
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  
  const handleMovieSearch = async (searchValue: string) => {
     try {
     const resMovies = await fetchMovies(searchValue); 
     
     setMovies(resMovies); 
 } catch  {
   setError(true);
 }
  };
 
  return (
    <>
      <div className={css.app}>
        <SearchBar onSubmit={handleMovieSearch} />
         
        <MovieGrid movies={movies}  />
      </div>
    </>
  )
}

export default App
