import ButtonFavorites from "../buttonfavorites/ButtonFavorites"
import { FilmStrip, Television } from "phosphor-react";
import { CardMovie } from "../../styles/TrendingRoute";
import { Link } from "react-router-dom";

export default function MoviesAndSeries({ datas }) {

    const datesRelease = new Date(datas.release_date);
    const firstAirDate = new Date(datas.first_air_date);

    const isMovie = "release_date" in datas;

    return (
        <CardMovie>
            <ButtonFavorites
                datas={datas}
                sizeIcon={30}
                colorIcon="#f1f1f1"
            />
            <Link to={`/${isMovie ? 'details_movie' : 'details_tv'}/${datas.id}`}>
                <img src={`https://image.tmdb.org/t/p/w500/${datas.poster_path}`} alt={datas.title} />
                <div>
                    <div>
                        {
                            isMovie ?
                                <>
                                    <FilmStrip size={32} />
                                    filme
                                </> :
                                <>
                                    <Television size={32} />
                                    tv
                                </>
                        }
                    </div>
                    <div>
                        {
                            isMovie ?
                                datesRelease.getFullYear()
                                :
                                firstAirDate.getFullYear()
                        }
                    </div>
                </div>

                <h3>{isMovie ? datas.title : datas.name}</h3>
            </Link>
        </CardMovie>
    )
}