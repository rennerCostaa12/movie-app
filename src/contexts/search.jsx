import { createContext, useState } from "react";

export const ValueSearchContext = createContext()


export function SearchContextProvider({ children }) {

    const [valueSearch, setValueSearch] = useState('')
    const [resultSearch, setResultSearch] = useState([])

    return (
        <ValueSearchContext.Provider
            value={
                {
                    valueSearch,
                    setValueSearch,
                    resultSearch,
                    setResultSearch
                }
            }
        >
            {children}
        </ValueSearchContext.Provider>
    )
}