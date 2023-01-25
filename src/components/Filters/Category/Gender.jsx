import React, { useState } from 'react'
import FilterBtn from '../FilterBtn'

const Gender = () => {

    const [genders, setGenders] = useState([
        "Female",
        "Genderless",
        "Male",
        "unknown",
    ]);

    return (
        <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    Gender
                </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    {genders.map(gender => (
                        <FilterBtn key={gender} category={gender} query={`gender=${gender}`} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Gender