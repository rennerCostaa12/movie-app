import { useParams, Link } from "react-router-dom";
import Container from '@mui/material/Container';
import ButtonFavorites from "../components/buttonfavorites/ButtonFavorites";
import ModalComponent from "../components/modal/ModalComponent";
import CircularStatic from "../components/circularprogress/CircularProgress";
import ProfileNotfound from '../assets/profile_notfound.png';
import { useContext } from "react";
import { FavoriteContext } from "../contexts/favorites";
import { Ticket, Money, ClockClockwise, MonitorPlay } from "phosphor-react";

import {
    getDataDetailsApi,
    getCreditsData,
    getImagesMovies,
    MoviesSimilar,
    getTrailer
} from "../config/configApi";

//STYLED COMPONENTS
import {
    ContainerDatas,
    ContentBannerMovie,
    ContentDatas,
    PosterContent,
    DescriptionDetails,
    ContentButtonsDescriptions,
    ContentGenres,
    VoteContent,
    ContentDetailsMovie,
    ContainerImagesAndCasts,
    ContentActors,
    CardActor,
    NameActor,
    ContentSliderBackDrops,
    ContentMoviesSimilars
} from "../styles/DetailsRoute";

//SWIPER JS
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function DetailsMovieRoute() {
    const { id_data } = useParams();

    const { favorites } = useContext(FavoriteContext);

    const { datasDetails } = getDataDetailsApi('MoviesDetails', id_data);
    const { creditsDetails, loading } = getCreditsData('movies', id_data);
    const { datasImages } = getImagesMovies("Movies", id_data);
    const { datasSimilar } = MoviesSimilar("Movies", id_data);
    const { datasTrailer } = getTrailer('Movies', id_data);

    const dollarConversion = Intl.NumberFormat('en-US');

    const casts = []

    for (let x in creditsDetails.cast) {
        casts.push(creditsDetails.cast[x]);
    }

    function handleMoveScroll() {
        window.scroll(0, 0);
    }

    handleMoveScroll()

    const isFavorite = favorites.some((data) => data.id == id_data)


    return (
        <ContainerDatas>
            <ContentBannerMovie
                style={{
                    backgroundImage: `url("https://image.tmdb.org/t/p/original/${datasDetails.backdrop_path}")`
                }}

            />
            <Container style={{ position: "relative" }} maxWidth="lg">
                <ContentDatas>
                    <div >
                        <PosterContent>
                            <img src={`https://image.tmdb.org/t/p/w300/${datasDetails.poster_path}`} alt={datasDetails.original_title} />
                        </PosterContent>
                    </div >

                    <DescriptionDetails>
                        <VoteContent>
                            <CircularStatic Notes={datasDetails.vote_average} />
                        </VoteContent>

                        <h1>{datasDetails.original_title}</h1>
                        <h3>{datasDetails.tagline}</h3>

                        <ContentButtonsDescriptions>
                            <ButtonFavorites
                                datas={datasDetails}
                                titleButton={`${isFavorite ? "Remove" : "Add"} Favorites`}
                                sizeIcon={30}
                            />

                            <ModalComponent
                                icon={
                                    <>
                                        <MonitorPlay size={32} />
                                    </>
                                }
                                idVideo={
                                    datasTrailer.results && datasTrailer.results.length != 0 ?
                                        datasTrailer.results && datasTrailer.results[0].key : null} //if there are no videos
                            />
                        </ContentButtonsDescriptions>

                        <p>{datasDetails.overview}</p>

                        <h4>Genres</h4>
                        <ContentGenres>
                            {datasDetails.genres && datasDetails.genres.map((value, key) => {
                                return (
                                    <span key={key}>{value.name}</span>
                                )
                            })}
                        </ContentGenres>
                    </DescriptionDetails>
                </ContentDatas >
                <ContentDetailsMovie>
                    <div>
                        <Money size={40} />
                        Budget: ${dollarConversion.format(datasDetails.budget)}
                    </div>
                    <div>
                        <Ticket size={40} />
                        Revenue: {dollarConversion.format(datasDetails.revenue)}
                    </div>
                    <div>
                        <ClockClockwise size={40} />
                        Runtime: {datasDetails.runtime} Minutes
                    </div>
                </ContentDetailsMovie>

                <ContainerImagesAndCasts>
                    <ContentSliderBackDrops>
                        <h1>Gallery</h1>
                        <div>
                            <Swiper
                                pagination={{
                                    type: "progressbar",
                                }}
                                style={{
                                    "--swiper-navigation-color": "#DC143C",
                                    "--swiper-pagination-color": "#DC143C",
                                }}
                                navigation={true}
                                modules={[Pagination, Navigation]}
                                className="mySwiper">
                                {datasImages.backdrops && datasImages.backdrops.slice(0, 8).map((value, key) => {
                                    return (
                                        <SwiperSlide key={key}>
                                            <img src={`https://image.tmdb.org/t/p/original/${value.file_path}`} alt="" />
                                        </SwiperSlide>
                                    )
                                })}
                            </Swiper>
                        </div>
                    </ContentSliderBackDrops>

                    <h1>Casts</h1>
                    <ContentActors>
                        {loading && <p>Carregando...</p>}
                        {casts && casts.slice(0, 10).map((value, key) => {
                            return (
                                <CardActor key={key}>
                                    {value.profile_path != null ?
                                        <img src={`https://image.tmdb.org/t/p/w200/${value.profile_path}`} alt="" />
                                        :
                                        <img src={ProfileNotfound} />
                                    }
                                    <NameActor>{value.name}</NameActor>
                                    <span>{value.character}</span>
                                </CardActor>
                            )
                        })}
                    </ContentActors>

                    <ContentMoviesSimilars style={{ color: "#f1f1ff" }}>
                        <h1>Similars</h1>
                        <div>
                            <Swiper
                                style={{
                                    "--swiper-navigation-color": "#DC143C",
                                    "--swiper-pagination-color": "#DC143C",
                                }}
                                slidesPerView={4}
                                spaceBetween={30}
                                slidesPerGroup={4}
                                loop={true}
                                loopFillGroupWithBlank={true}
                                navigation={true}
                                modules={[Navigation]}
                                className="mySwiper"
                            >
                                {datasSimilar.results && datasSimilar.results.map((value, key) => {
                                    return (
                                        <SwiperSlide key={key}>
                                            <Link onClick={handleMoveScroll} to={`/details_movie/${value.id}`}>
                                                <img src={`https://image.tmdb.org/t/p/w200/${value.poster_path}`} alt="" />
                                                <h3>{value.original_title}</h3>
                                            </Link>
                                        </SwiperSlide>
                                    )
                                })}
                            </Swiper>
                        </div>
                    </ContentMoviesSimilars>
                </ContainerImagesAndCasts>
            </Container >
        </ContainerDatas >
    )
}