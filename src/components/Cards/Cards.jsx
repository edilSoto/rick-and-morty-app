import React from 'react'
import styles from "./Cards.module.scss"

const Cards = ({ results }) => {

    let display;
    let styleClass;

    if (results) { 
        display = results.map(elem => {

            (elem.status === "Dead") ? styleClass = 'bg-danger' :
            (elem.status === "Alive") ? styleClass = 'bg-success':
            (elem.status === "unknown") ? styleClass = 'bg-secondary' : styleClass = 'bg-secondary' 

            return (
                <div key={elem.id} className='mb-4 col-4 position-relative'>
                    <div className={styles.cards}>
                        <img src={elem.image} alt={elem.name} className={`${styles.img} img-fluid`}/>
                        <div className= {`${styles.p10} content`}>
                            <div className="fs-4 fw-bold mb-4">
                                {elem.name}
                            </div>
                            <div className="">
                                <div className="fs-6">
                                    Last location:
                                </div>
                                <div className="fs-5">
                                    {elem.location.name}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={`${styles.badge} position-absolute badge ${styleClass}`}>
                        {elem.status}
                        </div>
                </div>
            )
        });
    }
    else {
        display = "No characters found"
    }

    return (
        <>{display}</>
    )
}

export default Cards