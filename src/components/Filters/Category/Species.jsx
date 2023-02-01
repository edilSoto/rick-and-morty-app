import React from 'react'
import { useContext } from 'react';
import { searchContext } from '../../../contexts/SearchContext';
import FilterBtn from '../FilterBtn';

const Species = () => {

    const {setSpecies} = useContext(searchContext);

    const species = [
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
    ];

    return (
        <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    Species
                </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" >
                <div className="accordion-body">
                    {species.map((specie, index) => (
                        <FilterBtn name={'specie'} key={index} category={specie} index={index} hook={setSpecies}/>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Species