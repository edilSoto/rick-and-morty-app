import React from 'react'
import { handleMouseUp } from '../../helpers/handleMouseUp';

const FilterBtn = ({ name, hook, category, index }) => {

    return (
        <div>
            
            <div className="form-check">
                <input 
                className="form-check-input btn-check" 
                type="radio" 
                name={name} 
                id={category + index}
                />
                <label onMouseUp={(event) => handleMouseUp(hook, event)} className="btn btn-outline-primary" htmlFor={category + index}>
                        {category}
                    </label>
            </div>
        </div>
    )
}

export default FilterBtn