import { useState } from "react";
import { createContext } from "react";



export const searchContext = createContext();

export const SearchContext = ({children}) => {

    const [pageNumber, setPageNumber] = useState(1);
    const [search, setSearch] = useState('');
    const [species, setSpecies] = useState('');
    const [gender, setGender] = useState('');
    const [status, setStatus] = useState('');

    return (
        <searchContext.Provider value={{
            pageNumber, setPageNumber,
            search, setSearch,
            species, setSpecies,
            gender, setGender,
            status, setStatus
        }}>{children}</searchContext.Provider>
    )
}