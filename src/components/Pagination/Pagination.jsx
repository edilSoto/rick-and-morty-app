import React from 'react'

const Pagination = ({ pageNumber, setPageNumber }) => {
    const next = () => { setPageNumber((x) => x + 1) };
    const prev = () => {
        if (pageNumber === 1) return;
        setPageNumber((x) => x - 1) };

    return (
        <div className="container d-flex justify-content-center gap-5 my-5">
            <div onClick={prev} className="button btn btn-primary">
                Prev
            </div>
            <div onClick={next} className="button btn btn-primary">
                Next
            </div>
        </div>
    )
};

export default Pagination