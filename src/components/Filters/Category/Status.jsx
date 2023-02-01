import React, { useContext } from 'react'
import { searchContext } from '../../../contexts/SearchContext';
import FilterBtn from '../FilterBtn'

const Status = () => {

    const { setStatus } = useContext(searchContext);

    const statuses = [
        "Alive",
        "Dead",
        "unknown"
    ];



    return (
        <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    Status
                </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" >
                <div className="accordion-body">
                    {statuses.map((status, index) => (
                        <FilterBtn name={'status'} key={index} index={index} category={status} hook={setStatus} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Status