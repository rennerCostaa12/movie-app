import { createContext, useState, useEffect } from "react";

export const FavoriteContext = createContext();

export function FavoritesContextProvider({ children }) {
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        const valueStorage = localStorage.getItem("favorites_movies")
        const valueFormated = JSON.parse(valueStorage)

        if(valueFormated != null){
            setFavorites(valueFormated);
        }

    }, [])

    return (
        <FavoriteContext.Provider value={{ favorites, setFavorites }}>
            {children}
        </FavoriteContext.Provider>
    )
}