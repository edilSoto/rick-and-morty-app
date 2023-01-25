import React, { useState } from 'react'
import FilterBtn from '../FilterBtn'

const Status = () => {

    const [statuses, setStatuses] = useState([
        "Alive",
        "Dead",
        "unknown"
    ]);
    


    return (
        <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    Status
                </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    {statuses.map(status => (
                        <FilterBtn key={status} category={status} query={`status=${status}`} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Status