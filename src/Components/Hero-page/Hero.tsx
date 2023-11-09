import { useState, useEffect } from 'react';
import {CircleFill, PlayCircleFill, ArrowRightCircleFill} from 'react-bootstrap-icons'

import './Hero.scss';


const Hero = (data: any) => {
    const GetMovieLength = (runtime: number) => {
        const hours = Math.floor(runtime / 60);
        const remainingMinutes = runtime % 60;

        return `${hours}h ${remainingMinutes}min`;
    }

    return (

    <section id="hero">
        <div className="hero-item">

            <div className="wrapper">
                <div className="content">
                    <img className='image1' src="/Images/No-way-home.png" alt="" />
                    <div className="item-tag">
                        <span>
                            Movie
                        </span>
                    </div>

                    <span className="item-name">
                        {data.data.title}
                    </span>

                    <ul className="item-list">
                        <li className="info-item">
                            {GetMovieLength(data.data.runtime)}
                        </li>

                        <li className="info-item">
                            {data.data.release_date.split('-')[0]}
                        </li>

                        {data.data.genres && data.data.genres.map((genre: any, index: number) => (
                        <li className="info-item" key={index}>
                            {genre.name}
                        </li>
                        ))}
                    </ul>

                    <p className="description">
                        {data.data.overview}
                    </p>

                    <div className="item-btns">
                        <a
                            href="https://www.youtube.com/watch?v=JfVOs4VSpmA"
                            className="item-btn"
                            rel='noreferrer nofollow noopener'
                            target='_blank'
                        >
                            {/* img */}

                            <span className="text">
                                Watch Trailer
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>

    );
}

export default Hero;