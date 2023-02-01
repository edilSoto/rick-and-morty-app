import React from 'react'
import Gender from './Category/Gender'
import Status from './Category/Status'
import Species from './Category/Species'

const Filters = () => {
  return (
    <div className='col-3'>
      <div className="text-center fw-bold fs-4 mb-2">Filter</div>

      <div style={{ cursor: 'pointer' }} onClick={() => window.location.reload()} className="text-center text-primary text-decoration-underline mb-2">Clear Filters</div>

      <div className="accordion open" id="accordionExample">
        <Gender />
        <Status />
        <Species />
      </div>

    </div >
  )
}

export default Filters