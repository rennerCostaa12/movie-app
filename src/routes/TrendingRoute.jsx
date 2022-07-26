import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { ContainerTrending, ContentTrending, ContentSliderMovies } from "../styles/TrendingRoute"
import { getDataApi } from "../config/configApi";
import MoviesAndSeries from "../components/movies_and_series/MoviesAndSeries";
import CircularProgress from '@mui/material/CircularProgress';
import { ValueSearchContext } from "../contexts/search";
import { useContext } from "react";

import "swiper/css";
import "swiper/css/navigation";

export default function TrendingRoute() {

    const { valueSearch, valueSelect } = useContext(ValueSearchContext);
    const { datas, loading } = getDataApi('Trending');

    return (
        <ContainerTrending>
            {loading ?
                <div style={{ textAlign: "center" }}>
                    <CircularProgress color="secondary" />
                </div>
                :
                <>
                    <ContentSliderMovies>
                        <div>
                            <Swiper
                                style={{
                                    "--swiper-navigation-color": "#DC143C",
                                }}
                                navigation={true}
                                modules={[Navigation]}
                                className="mySwiper">
                                {datas.results && datas.results.slice(0, 5).map((value, key) => {
                                    return (
                                        <SwiperSlide key={key}>
                                            <img src={`https://image.tmdb.org/t/p/original/${value.backdrop_path}`} alt="" />
                                            <h1>{value.media_type == "movie" ? value.title : value.original_name}</h1>
                                            <p>{value.overview}</p>
                                        </SwiperSlide>
                                    )
                                })}
                            </Swiper>
                        </div>
                    </ContentSliderMovies>

                    <h1>Trending</h1>
                    <ContentTrending>
                        {datas.results && datas.results.map((value) => {
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