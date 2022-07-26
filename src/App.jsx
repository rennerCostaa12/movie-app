import { Route, Routes } from "react-router-dom"
import FavoritesRoute from "./routes/FavoritesRoute"
import TvRoute from "./routes/TvRoute"
import TrendingRoute from "./routes/TrendingRoute"
import MoviesRoute from "./routes/MoviesRoute"
import DetailsMovieRoute from "./routes/DetailsMovieRoute"
import DetailsTvRoute from "./routes/DetailsTvRoute"
import Navigation from "./components/navigation/Navigation"
import GlobalStyle from "./styles/GlobalStyle"
import Search from "./components/search/Search"
import { FavoritesContextProvider } from "./contexts/favorites"
import { SearchContextProvider } from "./contexts/search"


function App() {
  return (
    <div>
      <GlobalStyle />
      <FavoritesContextProvider>
        <SearchContextProvider>
          <Navigation />
          <Routes>
            <Route path="details_tv/:id_data" element={<DetailsTvRoute />} />
            <Route path="details_movie/:id_data" element={<DetailsMovieRoute />} />
            <Route path="tv" element={<TvRoute />} />
            <Route path="movies" element={<MoviesRoute />} />
            <Route path="favorites" element={<FavoritesRoute />} />
            <Route path="/" element={<TrendingRoute />} />
          </Routes>
        </SearchContextProvider>
      </FavoritesContextProvider>
    </div>
  )
}

export default App
