import { Route, Routes } from "react-router-dom"
import FavoritesRoute from "./routes/FavoritesRoute"
import TvRoute from "./routes/TvRoute"
import TrendingRoute from "./routes/TrendingRoute"
import MoviesRoute from "./routes/MoviesRoute"
import DetailsMovieRoute from "./routes/DetailsMovieRoute"
import DetailsTvRoute from "./routes/DetailsTvRoute"
import SearchRoutesMovies from "./routes/SearchRoutesMovies"
import SearchRoutesTv from "./routes/SearchRoutesTv"
import RouteNotFound from "./routes/RouteNotFound"
import Navigation from "./components/navigation/Navigation"
import GlobalStyle from "./styles/GlobalStyle"
import { FavoritesContextProvider } from "./contexts/favorites"


function App() {
  return (
    <div>
      <GlobalStyle />
      <FavoritesContextProvider>
        <Navigation />
        <Routes>
          <Route path="details_tv/:id_data" element={<DetailsTvRoute />} />
          <Route path="details_movie/:id_data" element={<DetailsMovieRoute />} />
          <Route path="tv" element={<TvRoute />} />
          <Route path="movies" element={<MoviesRoute />} />
          <Route path="favorites" element={<FavoritesRoute />} />
          <Route path="search_movies/:value_search" element={<SearchRoutesMovies />} />
          <Route path="search_tv/:value_search" element={<SearchRoutesTv />} />
          <Route path="*" element={<RouteNotFound />} />
          <Route path="/" element={<TrendingRoute />} />
        </Routes>
      </FavoritesContextProvider>
    </div>
  )
}

export default App
