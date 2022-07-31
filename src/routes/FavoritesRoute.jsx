import { useContext } from "react"
import { FavoriteContext } from "../contexts/favorites"
import MoviesAndSeries from "../components/movies_and_series/MoviesAndSeries";
import { ContainerTrending, ContentTrending } from "../styles/TrendingRoute";

function NotFavorites() {

    const styleNotFavorites = {
        textAlign: "center",
        color: "#42537a"
    }

    return (
        <h1 style={styleNotFavorites}>Nenhum Favorito</h1>
    )
}

export default function FavoritesRoute() {
    const { favorites } = useContext(FavoriteContext);

    return (
        <ContainerTrending>
            <h1>Favoritos</h1>

            {favorites.length == 0 ? <NotFavorites /> :
                <>
                    <ContentTrending>
                        {favorites && favorites.map((value) => {
                            return (
                                <MoviesAndSeries key={value.id} datas={value} />
                            )
                        })}
                    </ContentTrending>
                </>
            }
        </ContainerTrending>
    )
}