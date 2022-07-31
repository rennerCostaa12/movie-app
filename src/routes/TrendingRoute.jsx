import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { ContainerTrending, ContentTrending, ContentSliderMovies, ContentDescriptionSlider } from "../styles/TrendingRoute"
import MoviesAndSeries from "../components/movies_and_series/MoviesAndSeries";
import CircularProgress from '@mui/material/CircularProgress';
import { getTrendings } from "../config/configApi";

import "swiper/css";
import "swiper/css/navigation";

export default function TrendingRoute() {
    const { datasTrending, loading } = getTrendings('all', 'week');

    console.log(datasTrending)

    return (
        <ContainerTrending>

            {loading ?
                <div style={{ textAlign: "center" }}>
                    <CircularProgress color="secondary" />
                </div>
                : ""
            }
            <ContentSliderMovies>
                <div>
                    <Swiper
                        style={{
                            "--swiper-navigation-color": "#DC143C",
                        }}
                        navigation={true}
                        modules={[Navigation]}
                        className="mySwiper">
                        {datasTrending.results && datasTrending.results.slice(0, 5).map((value, key) => {
                            return (
                                <SwiperSlide key={key}>

                                    <img src={`https://image.tmdb.org/t/p/original/${value.backdrop_path}`} alt="" />
                                    <ContentDescriptionSlider>
                                        <h1>{value.media_type == "movie" ? value.title : value.original_name}</h1>
                                        {value.overview.length > 250 ?
                                            <p>{value.overview.substring(0, 250)}...</p> :
                                            <p>{value.overview}</p>}
                                    </ContentDescriptionSlider>
                                </SwiperSlide>
                            )
                        })}
                    </Swiper>
                </div>
            </ContentSliderMovies>

            <h1>Em altas da semana</h1>
            <ContentTrending>
                {datasTrending.results && datasTrending.results.map((value) => {
                    return (
                        <MoviesAndSeries key={value.id} datas={value} />
                    )
                })}
            </ContentTrending>


        </ContainerTrending>
    )
}