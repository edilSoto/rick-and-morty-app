import React from 'react'

const FilterBtn = ({category, query}) => {
    return (
        <div>
            <div className="form-check">
                <input 
                className="btn-check" 
                type="radio" 
                name="flexRadioDefault" 
                id={category}
                />
                <label  className="btn btn-outline-primary" htmlFor={category}>
                        {category}
                    </label>
            </div>
        </div>
    )
}

export default FilterBtn