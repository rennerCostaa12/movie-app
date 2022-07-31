import { useParams, Link } from "react-router-dom"
import Container from '@mui/material/Container';
import ButtonFavorites from "../components/buttonfavorites/ButtonFavorites";
import ModalComponent from "../components/modal/ModalComponent";
import CircularStatic from "../components/circularprogress/CircularProgress"
import ProfileNotfound from '../assets/profile_notfound.png'
import { useContext } from "react";
import { FavoriteContext } from "../contexts/favorites";
import { UsersThree, FilmSlate, TelevisionSimple, MonitorPlay } from "phosphor-react"

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
import { FreeMode, Navigation, Thumbs, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function DetailsTvRoute() {

    const { id_data } = useParams();

    const { favorites } = useContext(FavoriteContext)

    const { datasDetails, loading } = getDataDetailsApi('tv', id_data);
    const { creditsDetails } = getCreditsData('tv', id_data);
    const { datasImages } = getImagesMovies('tv', id_data);
    const { datasSimilar } = MoviesSimilar('tv', id_data);
    const { datasTrailer } = getTrailer('tv', id_data);

    const dollarConversion = Intl.NumberFormat('en-US');

    function moveScroll() {
        window.scroll(0, 0);
    }

    moveScroll()

    const isFavorites = favorites.some((data) => data.id == id_data);

    return (
        <ContainerDatas>
            <Container maxWidth="lg">
                {loading ? <h2 style={{ color: "#f1f1f1" }}>Loading</h2> : ""}
                <ContentDatas>
                    <div >
                        <PosterContent>
                            <img src={`https://image.tmdb.org/t/p/w300/${datasDetails.poster_path}`} alt="" />
                        </PosterContent>
                    </div>

                    <DescriptionDetails>
                        <VoteContent>
                            <CircularStatic Notes={datasDetails.vote_average} />
                        </VoteContent>

                        <h1>{datasDetails.original_name}</h1>
                        <h3>{datasDetails.tagline}</h3>

                        <ContentButtonsDescriptions>
                            <ButtonFavorites
                                datas={datasDetails}
                                titleButton={`${isFavorites ? 'Remove' : 'Add'} Favorite`}
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
                        <div>
                            {datasDetails.genres && datasDetails.genres.map((value, key) => {
                                return (
                                    <span key={key}>{value.name}</span>
                                )
                            })}
                        </div>
                    </DescriptionDetails>
                </ContentDatas>
                <ContentDetailsMovie>
                    <div>
                        <UsersThree size={40} />
                        Popularity: {dollarConversion.format(datasDetails.popularity)}
                    </div>
                    <div>
                        <FilmSlate size={32} />
                        Type: {datasDetails.type}
                    </div>
                    <div>
                        <TelevisionSimple size={32} />
                        Number Of Seasons: {datasDetails.number_of_seasons}
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
                                {datasImages.backdrops && datasImages.backdrops.map((value, key) => {
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
                        {creditsDetails.cast && creditsDetails.cast.map((value, key) => {
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
                                spaceBetween={50}
                                slidesPerGroup={4}
                                loop={true}
                                loopFillGroupWithBlank={true}
                                pagination={{
                                    clickable: true,
                                }}
                                navigation={true}
                                modules={[Pagination, Navigation]}
                                className="mySwiper"
                            >
                                {datasSimilar.results && datasSimilar.results.map((value, key) => {
                                    return (
                                        <SwiperSlide key={key}>
                                            <Link onClick={moveScroll} to={`/details_tv/${value.id}`}>
                                                <img src={`https://image.tmdb.org/t/p/w200/${value.poster_path}`} alt="" />
                                                <h3>{value.original_name}</h3>
                                            </Link>
                                        </SwiperSlide>
                                    )
                                })}
                            </Swiper>
                        </div>
                    </ContentMoviesSimilars>
                </ContainerImagesAndCasts>
            </Container>
        </ContainerDatas >
    )
}