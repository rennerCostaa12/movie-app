import { useParams } from "react-router-dom";
import { getSearch } from "../config/configApi";
import { ContainerTrending, ContentTrending } from "../styles/TrendingRoute";
import Movies from "../components/movies/Movies";
import Search from "../components/search/Search";
import { useState } from "react";
import PaginationItem from "../components/pagination/PaginationItems";

export default function SearchRoutesMovies() {

    let params = useParams();
    const [page, setPage] = useState(1);

    const { dataSearch, loading } = getSearch("movie", params.value_search, page);

    return (
        <ContainerTrending> 
            <Search pathRequisition="search_movies"/>
            {loading ? <h2>Carregando</h2> : ''}
            {dataSearch && dataSearch.total_results == 0 ? 
            <h2 style={{textAlign: "center"}}> Filme Não Encontrado </h2> : ''}

            <ContentTrending>
                {dataSearch.results && dataSearch.results.map((value) => {
                    return (
                        <Movies key={value.id} datas={value} />
                )
                })}
            </ContentTrending>

            <PaginationItem setPages={setPage} totalPages={dataSearch.total_pages}/>
        </ContainerTrending>
    )
}