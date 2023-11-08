import React from 'react'

import './Home.scss'
import Header from "../../Components/Header/Header"
import {CircleFill, PlayCircleFill, ArrowRightCircleFill} from 'react-bootstrap-icons'

const Home = () => {
    return (
    <>
        <section className='landing'>
            <Header/>
            <div className='landing2'>
                <img className='image1' src="/Images/No-way-home.png" alt="" />
                <div className='landing3'>
                    <p>Action</p>
                    <CircleFill className='circle-icon'></CircleFill>
                    <p>Adventure</p>
                    <CircleFill className='circle-icon'></CircleFill>
                    <p>2h 28min</p>
                </div>
                <p className='landing-text'>
                    When a spell goes wrong, 
                    dangerous foes from other worlds start to appear, 
                    forcing Peter to discover what it truly means to be Spider-Man.
                </p>
                <div className='landing3'>
                    <button className='watch'><PlayCircleFill></PlayCircleFill> Watch Now</button>
                    <button className='info'><ArrowRightCircleFill></ArrowRightCircleFill> More Info</button>
                </div>
            </div>
        </section>
    </>
    );
}

export default Home;
