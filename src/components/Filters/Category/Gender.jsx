import React, { useContext } from 'react'
import { searchContext } from '../../../contexts/SearchContext';
import FilterBtn from '../FilterBtn'

const Gender = () => {

    const {setGender} = useContext(searchContext);

    const genders= [
        "Female",
        "Genderless",
        "Male",
        "unknown",
    ];

    return (
        <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    Gender
                </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne">
                <div className="accordion-body">
                    {genders.map((gender, index) => (
                        <FilterBtn name={'gender'} key={index} index={index} category={gender} hook={setGender} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Gender