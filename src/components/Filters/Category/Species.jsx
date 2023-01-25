import React, { useEffect, useState } from 'react'
import FilterBtn from '../FilterBtn';

const Species = () => {

    const [species, setSpecies] = useState([
        "Alien",
        "Animal",
        "Cronenberg",
        "Disease",
        "Human",
        "Humanoid",
        "Mythological Creature",
        "Poopybutthole",
        "Robot",
        "unknown",
    ]);

    return (
        <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    Species
                </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    {species.map(specie => (
                        <FilterBtn key={specie} category={specie} query={`species=${specie}`}/>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Species