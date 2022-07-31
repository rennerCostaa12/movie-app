import { getDatasApi } from "../config/configApi"
import { ContainerTrending, ContentTrending } from "../styles/TrendingRoute";
import Movies from "../components/movies/Movies";
import { useState } from "react";
import PaginationItem from "../components/pagination/PaginationItems";
import Search from "../components/search/Search";

export default function MoviesRoute() {
    const [page, setPage] = useState(1);
    const { datas, loading } = getDatasApi('movie', page);

    return (
        <ContainerTrending>
            <Search pathRequisition="search_movies" />
            <h1>Movies</h1>
            {loading ? "Loading" : ''}
            <ContentTrending>
                {datas.results && datas.results.map((value) => {
                    return (
                        <Movies key={value.id} datas={value} />
                    )
                })}
            </ContentTrending>
            <PaginationItem setPages={setPage} totalPages={datas.total_pages} />
        </ContainerTrending>
    )
}