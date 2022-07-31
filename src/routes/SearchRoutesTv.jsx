import { useParams } from "react-router-dom";
import { getSearch } from "../config/configApi";
import { ContainerTrending, ContentTrending } from "../styles/TrendingRoute";
import Tv from "../components/tv/Tv";
import Search from "../components/search/Search";
import { useState } from "react";
import PaginationItem from "../components/pagination/PaginationItems";

export default function SearchRoutesTv() {

    let params = useParams();
    const [page, setPage] = useState(1);

    const { dataSearch, loading } = getSearch("tv", params.value_search, page);
    
    return (
        <ContainerTrending>
            <Search pathRequisition="search_tv" />
            {loading ? <h2>Carregando</h2> : ''}
            {dataSearch && dataSearch.total_results == 0 ?
                <h2 style={{ textAlign: "center" }}> TV Não Encontrado </h2> : ''}

            <ContentTrending>
                {dataSearch.results && dataSearch.results.map((value) => {
                    return (
                        <Tv key={value.id} datas={value} />
                    )
                })}
            </ContentTrending>

            <PaginationItem setPages={setPage} totalPages={dataSearch.total_pages} />
        </ContainerTrending>
    )
}