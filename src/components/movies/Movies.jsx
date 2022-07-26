import ButtonFavorites from "../buttonfavorites/ButtonFavorites"
import { FilmStrip } from "phosphor-react";
import { CardMovie } from "../../styles/TrendingRoute";
import { Link } from "react-router-dom";

export default function Movies({ datas }) {

    return (
        <CardMovie>
            <ButtonFavorites
                datas={datas}
                sizeIcon={30}
                colorIcon="#f1f1f1"
            />
            <Link to={`/details_movie/${datas.id}`}>
                <img src={`https://image.tmdb.org/t/p/w500/${datas.poster_path}`} alt={datas.title} />
                <div>
                    <div>
                        <FilmStrip size={32} />
                        movie
                    </div>
                    <div>
                        {datas.release_date.substring(0, 4)}
                    </div>
                </div>

                <h3>{datas.title}</h3>
            </Link>
        </CardMovie>
    )
}