import { useState, useEffect } from 'react';
import {CircleFill, PlayCircleFill, ArrowRightCircleFill, StarFill} from 'react-bootstrap-icons'

import './Hero.scss';


const Hero = (data: any, trending: any) => {
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
                        <div className="hero-rating">
                            <StarFill color="orange"></StarFill>
                           {data.data.vote_average.toFixed(1)} / 10
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="trending">
            <h1>Latest & Trending</h1>
            <div className="trending-movies">
            {data.trending.results.slice(0,5).map ((item: any, index: number) => (
                <div className="movies">
                    <img className="movie-image" src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} alt=""/>
                    <div className="movie-overlay">
                        <h3 className="movie-title">{item.title}</h3>
                    <div className="hero-rating">
                        <StarFill color="orange"></StarFill>
                        <span>{item.vote_average.toFixed(1)}/10</span>
                    </div>
                    <div>
                        
                    </div>
                    </div>
                </div>
            ))}
            </div>
        </div>

        <div className="upcoming">
            <h1>2024 Upcoming Movies</h1>
            <div className="upcoming-movies">
                <div className='upcoming-row'>
            {data.upcoming.results.slice(0,5).map ((item: any, index: number) => (
                <div className="movies">
                    <img className="movie-image" src={`https://image.tmdb.org/t/p/w500/${item.backdrop_path}`} alt=""/>
                    <div className="movie-overlay">
                        <h3 className="movie-title">{item.title}</h3>
                    <div className="hero-rating">
                        <span>{item.release_date}</span>
                    </div>
                    </div>
                </div>
            ))}
            </div>
            <div className='upcoming-row'>
            {data.upcoming.results.slice(5,10).map ((item: any, index: number) => (
                <div className="movies">
                    <img className="movie-image" src={`https://image.tmdb.org/t/p/w500/${item.backdrop_path}`} alt=""/>
                    <div className="movie-overlay">
                        <h3 className="movie-title">{item.title}</h3>
                    <div className="hero-rating">
                        <span>{item.release_date}</span>
                    </div>
                    </div>
                </div>
            ))}
            </div>
            </div>
        </div>

        <div className="movie-layout">
            <h1>Now in theaters</h1>
            <div className="row-movies">
            {data.nowplaying.results.slice(1,6).map ((item: any, index: number) => (
                <div className="movies">
                    <img className="movie-image" src={`https://image.tmdb.org/t/p/w500/${item.backdrop_path}`} alt=""/>
                    <div className="movie-overlay">
                        <h3 className="movie-title">{item.title}</h3>
                    <div className="hero-rating">
                        <StarFill color="orange"></StarFill>
                        <span>{item.vote_average.toFixed(1)}/10</span>
                    </div>
                    </div>
                </div>
            ))}
            </div>
        </div>
    </section>

    );
}

export default Hero;