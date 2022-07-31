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

    const { datasDetails, loading } = getDataDetailsApi('movie', id_data);
    const { creditsDetails } = getCreditsData('movie', id_data);
    const { datasImages } = getImagesMovies('movie', id_data);
    const { datasSimilar } = MoviesSimilar('movie', id_data);
    const { datasTrailer } = getTrailer('movie', id_data);

    const dollarConversion = Intl.NumberFormat('pt-BR');

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
                {loading ? <h1 style={{ color: "#f1f1f1" }}>Aguarde</h1> : ""}
                <ContentDatas>
                    <div>
                        <PosterContent>
                            <img src={`https://image.tmdb.org/t/p/w300/${datasDetails.poster_path}`} alt={datasDetails.original_title} />
                        </PosterContent>
                    </div>

                    <DescriptionDetails>
                        <VoteContent>
                            <CircularStatic Notes={datasDetails.vote_average} />
                        </VoteContent>

                        <h1>{datasDetails.title}</h1>
                        <h3>{datasDetails.tagline}</h3>

                        <ContentButtonsDescriptions>
                            <ButtonFavorites
                                datas={datasDetails}
                                titleButton={`${isFavorite ? "Remover" : "Add"} Favoritos`}
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

                        <h4>Gêneros</h4>
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
                        Orçamento: R${dollarConversion.format(datasDetails.budget)}
                    </div>
                    <div>
                        <Ticket size={40} />
                        Arrecadação: {dollarConversion.format(datasDetails.revenue)}
                    </div>
                    <div>
                        <ClockClockwise size={40} />
                        Duração: {datasDetails.runtime} Minutos
                    </div>
                </ContentDetailsMovie>

                <ContainerImagesAndCasts>
                    <ContentSliderBackDrops>
                        <h1>Galeria</h1>
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

                    <h1>Elenco</h1>
                    <ContentActors>
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
                        <h1>Similares</h1>
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
                                breakpoints={{
                                    320: {
                                        width: 320,
                                        spaceBetween: 0,
                                        slidesPerView: 1,
                                        slidesPerGroup: 1
                                    },
                                    768: {
                                        width: 768,
                                        spaceBetween: 0,
                                        slidesPerView: 2,
                                        slidesPerGroup: 1
                                    },
                                    920: {
                                        width: 921,
                                        spaceBetween: 0,
                                        slidesPerView: 3,
                                        slidesPerGroup: 2
                                    },
                                    1200: {
                                        width: 1200,
                                        spaceBetween: 30,
                                        slidesPerView: 4,
                                        slidesPerGroup: 3
                                    }
                                }}
                            >
                                {datasSimilar.results && datasSimilar.results.map((value, key) => {
                                    return (
                                        <SwiperSlide key={key}>
                                            <Link onClick={handleMoveScroll} to={`/details_movie/${value.id}`}>
                                                <img src={`https://image.tmdb.org/t/p/w200/${value.poster_path}`} alt="" />
                                                <h3>{value.title}</h3>
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