import ButtonFavorites from "../buttonfavorites/ButtonFavorites"
import { Television } from "phosphor-react";
import { CardMovie } from "../../styles/TrendingRoute";
import { Link } from "react-router-dom";

export default function Tv({ datas }) {
    return (
        <CardMovie>
            <ButtonFavorites
                datas={datas}
                sizeIcon={30}
                colorIcon="#f1f1f1"
            />
            <Link to={`/details_tv/${datas.id}`}>
                <img src={`https://image.tmdb.org/t/p/w500/${datas.poster_path}`} alt={datas.title} />
                <div>
                    <div>
                        <Television size={32} />
                        tv
                    </div>
                    <div>
                        {/*datas.first_air_date.substring(0, 4)*/}
                    </div>
                </div>

                <h3>{datas.original_name}</h3>
            </Link>
        </CardMovie>
    )

}