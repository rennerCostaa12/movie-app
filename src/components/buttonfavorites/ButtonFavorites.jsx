import { FavoriteContext } from "../../contexts/favorites"
import { useContext } from "react"
import { BookmarkSimple, Bookmarks } from "phosphor-react"
import Button from "@mui/material/Button";

export default function ButtonFavorites({ datas, titleButton, sizeIcon, colorIcon }) {

    const { favorites, setFavorites } = useContext(FavoriteContext);

    function handleFavorites() {
        setFavorites([...favorites, datas]);
    }

    function handleDesfavorites() {
        setFavorites(favorites.filter((data) => data.id !== datas.id));
    }

    const isFavorite = favorites.some((data) => data.id == datas.id)

    return (
        <div>
            <Button
                onClick={() => isFavorite ? handleDesfavorites() : handleFavorites()}
                title="favorite"
            >
                {isFavorite ?
                    <Bookmarks size={sizeIcon} color={colorIcon} weight="bold" />
                    :
                    <BookmarkSimple size={sizeIcon} color={colorIcon} weight="bold" />
                }
                {titleButton}
            </Button>
        </div>
    )
}