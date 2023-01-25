import { useState } from "react";
import { createContext } from "react";



export const SearchContext = createContext();

export const SearchContextProvider = (props) => {

    const [pageNumber, setPageNumber] = useState(1);
    const [search, setSearch] = useState('');
    const [species, setSpecies] = useState('');
    const [gender, setGender] = useState('');
    const [status, setStatus] = useState('');

    return (
        <SearchContext.Provider value={{
            pageNumber, setPageNumber,
            search, setSearch,
            species, setSpecies,
            gender, setGender,
            status, setStatus
        }}>{props.children}</SearchContext.Provider>
    )
}