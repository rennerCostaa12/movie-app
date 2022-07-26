import { getDataApi } from "../config/configApi"
import { ContainerTrending, ContentTrending } from "../styles/TrendingRoute";
import Tv from "../components/tv/Tv";
import PaginationItems from "../components/pagination/PaginationItems";
import { useState } from "react";
import { ValueSearchContext } from "../contexts/search";
import { useContext } from "react"
import Search from "../components/search/Search";

export default function TvRoute() {
    const [page, setPage] = useState(1);
    const { datas, loading } = getDataApi('Tv', page);

    const [ListTvSearch, setListTvSearch] = useState([]);

    return (
        <ContainerTrending>
            <Search typeSearch="tv" listsData={setListTvSearch} />


            {ListTvSearch.results && ListTvSearch.results.length > 0 ?

                <ContentTrending>
                    {ListTvSearch.results && ListTvSearch.results.map((value) => {
                        return (
                            <Tv key={value.id} datas={value} />
                        )
                    })}
                </ContentTrending>

                :

                loading ? "Aguarde"
                    :
                    <>
                        <h1>Tv</h1>
                        <ContentTrending>
                            {datas.results && datas.results.map((value) => {
                                return (
                                    <Tv key={value.id} datas={value} />
                                )
                            })}
                        </ContentTrending>

                        <PaginationItems setPages={setPage} />
                    </>
            }

        </ContainerTrending >
    )
}