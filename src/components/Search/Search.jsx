import React from 'react'
import { useContext } from 'react'
import { SearchContext } from '../../contexts/SearchContext';
import styles from './search.module.scss'


const Search = () => {

    const {setPageNumber, setSearch} = useContext(SearchContext);

    return (
        <form className="d-flex justify-content-center gap-5 mb-5">
            <input
                onChange={(e) => {
                    setSearch(e.target.value);
                    setPageNumber(1);
                }} placeholder='Search for characters'
                type="text"
                className={`${styles.input}`}
            />
            <button className={`btn btn-primary fs-5 ${styles.btn}`}>Search</button>
        </form>
    )
}

export default Search