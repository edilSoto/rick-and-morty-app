import React from 'react'
import { useContext } from 'react';
import ReactPaginate from 'react-paginate'
import { searchContext } from '../../contexts/SearchContext';
import styles from './Pagination.module.scss'

const Pagination = ({ info }) => {

    const { setPageNumber } = useContext(searchContext);

    return (
        <ReactPaginate 
        className='pagination justify-content-center gap-2 my-4'
        pageCount={info?.pages}
        previousLabel='Prev'
        previousClassName='btn btn-primary'
        nextLabel='Next'
        nextClassName={`btn btn-primary text-decoration-none`}
        pageClassName='page-item'
        pageLinkClassName='page-link'
        activeClassName='active'
        onPageChange= {(event) => { setPageNumber(event.selected + 1) }}
        />
    )
};

export default Pagination