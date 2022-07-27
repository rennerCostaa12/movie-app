import { getDataApi } from "../config/configApi"
import { ContainerTrending, ContentTrending } from "../styles/TrendingRoute";
import Movies from "../components/movies/Movies";
import { useState } from "react";
import PaginationItem from "../components/pagination/PaginationItems";
import Search from "../components/search/Search";

export default function MoviesRoute() {
    const [page, setPage] = useState(1);
    const { datas, loading } = getDataApi('Movies', page);
    const [ListMoviesSearch, setListMoviesSearch] = useState([]);

    return (
        <ContainerTrending>
            <Search typeSearch="movie" listsData={setListMoviesSearch} />

            <h1>Movies</h1>
            {ListMoviesSearch.results && ListMoviesSearch.results.length > 0 ?
                <ContentTrending>
                    {ListMoviesSearch.results && ListMoviesSearch.results.map((value) => {
                        return (
                            <Movies key={value.id} datas={value} />
                        )
                    })}
                </ContentTrending>
                :
                loading ? "Aguarde"
                    :
                    <>
                        <ContentTrending>
                            {datas.results && datas.results.map((value) => {
                                return (
                                    <Movies key={value.id} datas={value} />
                                )
                            })}
                        </ContentTrending>
                        <PaginationItem setPages={setPage} />
                    </>
            }

        </ContainerTrending>
    )
}