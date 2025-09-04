import css from './MovieGrid.module.css';
import type { Movie } from '../../types/movie';
 
interface MovieGridProps {
  onSelect: () => void;
  movies: Movie[]; 
}

export default function MovieGrid({onSelect, movies}: MovieGridProps) {
    return (
        <ul className={css.grid}>
  {movies.map(el =>  <li key={el.id}>
    <div className={css.card}>
      <img 
		    className={css.image} 
		    src={`https://image.tmdb.org/t/p/w500${el.poster_path}`} 
		    alt={el.title}
		    loading="lazy" 
		  />
              <h2 className={css.title}>{el.title}</h2>
    </div>
  </li>)}
</ul>
    )
}