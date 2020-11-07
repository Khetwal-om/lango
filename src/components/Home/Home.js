import React from 'react'
import Instructors from '../Instructors/Instructors'

import './Home.css'
import laptop from '../../img/heroImage.svg'

const Home = () => {
    return (
        <>
        <div className="shallow">
            <div className="home container">
                <div className="home__stark">Learn english with  FLASHCARDS!</div>
                <div className="home__picture"><img src={laptop} alt=""/></div>
            </div>
            <div className="margin-top-bottom-small"></div>        
        </div>
        <div className="margin-top-bottom-small"></div>
        <div className="margin-top-bottom-small"></div>

        <div className="heading-two explore__instructors">
            Explore Instructors
        </div>
        <Instructors />


        <div className="margin-top-bottom-small"></div>

        </>
    )
}

export default Home
