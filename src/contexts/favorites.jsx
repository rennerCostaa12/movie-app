import { createContext, useState } from "react";

export const FavoriteContext = createContext();

export function FavoritesContextProvider({ children }) {
    const [favorites, setFavorites] = useState([]);

    return (
        <FavoriteContext.Provider value={{ favorites, setFavorites }}>
            {children}
        </FavoriteContext.Provider>
    )
}