import { getDatasApi } from "../config/configApi"
import { ContainerTrending, ContentTrending } from "../styles/TrendingRoute";
import Tv from "../components/tv/Tv";
import PaginationItems from "../components/pagination/PaginationItems";
import Search from "../components/search/Search";
import { useState } from "react";

export default function TvRoute() {
    const [page, setPage] = useState(1);
    const { datas, loading } = getDatasApi('tv', page);

    return (
        <ContainerTrending>
            <Search pathRequisition="search_tv" />
            <h1>Tv</h1>
            {loading ? "Carregando" : ''}
            <ContentTrending>
                {datas.results && datas.results.map((value) => {
                    return (
                        <Tv key={value.id} datas={value} />
                    )
                })}
            </ContentTrending>
            <PaginationItems setPages={setPage} totalPages={datas.total_pages} />
        </ContainerTrending >
    )
}