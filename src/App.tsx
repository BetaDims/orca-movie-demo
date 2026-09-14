import { movies } from './data/movies'
import './App.css'

function App() {
  return (
    <main>
      <h1>Movies</h1>
      <ul className="movie-list">
        {movies.map((movie) => (
          <li key={movie.id}>
            <span className="movie-title">{movie.title}</span>
            <span className="movie-status">
              {movie.watched ? 'Watched' : 'Unwatched'}
            </span>
          </li>
        ))}
      </ul>
    </main>
  )
}

export default App
