import ButtonFavorites from "../buttonfavorites/ButtonFavorites"
import { FilmStrip, Television } from "phosphor-react";
import { CardMovie } from "../../styles/TrendingRoute";
import { Link } from "react-router-dom";

export default function MoviesAndSeries({ datas }) {
    return (
        <CardMovie>
            <ButtonFavorites
                datas={datas}
                sizeIcon={30}
                colorIcon="#f1f1f1"
            />
            <Link to={`/${datas.media_type == "movie" ? 'details_movie' : 'details_tv'}/${datas.id}`}>
                <img src={`https://image.tmdb.org/t/p/w500/${datas.poster_path}`} alt={datas.title} />
                <div>
                    <div>
                        {
                            datas.media_type == "movie" ?
                                <>
                                    <FilmStrip size={32} />
                                    {datas.media_type}
                                </> :
                                <>
                                    <Television size={32} />
                                    {datas.media_type}
                                </>
                        }
                    </div>
                    <div>
                        {
                            datas.media_type == "movie" ?
                                datas.release_date.substring(0, 4) :
                                datas.first_air_date.substring(0, 4)
                        }
                    </div>
                </div>

                <h3>{datas.media_type == "movie" ? datas.title : datas.original_name}</h3>
            </Link>
        </CardMovie>
    )
}