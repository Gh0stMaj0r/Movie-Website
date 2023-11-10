import React, { useState, useEffect } from 'react'
import Hero from "../../Components/Hero-page/Hero"

import './Home.scss'
import Header from "../../Components/Header/Header"

const Home = () => {
    var [ heroData, setHeroData ] = useState();
    var [trendingData, setTrendingData] = useState();

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MGUzOTBjZjJlYmZjMjNiM2M0ZjM2MzhhMWE3OWE4YyIsInN1YiI6IjY1NGI0ZmMyNjdiNjEzMDBhZmM4Y2Q3OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.q7NL_TuimuDDSdkvmlPe1yjwsPuELwrydhGVbPbX-cM'
        }
    };

    useEffect(() => {
        const FetchHeroData = async () => {
            var query = 'Spider-man: No Way Home';

            try {
                const response = await fetch(`https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`, options);
                const searchResults = await response.json();
                const movieId = searchResults.results[0].id;
                const movieResponse = await fetch(`https://api.themoviedb.org/3/movie/${movieId}`, options);
                const data = await movieResponse.json();
                
                setHeroData(data);
            } catch (err) {
                console.error(err);
            }
        }

        const FetchMovieData = async () => {
            try {
                const response = await fetch('https://api.themoviedb.org/3/trending/movie/day?language=en-US', options);
                const fresh = await response.json();
                console.log(fresh);
                setTrendingData(fresh);
            } catch (err) {
                console.error(err);
            }
        }

        FetchHeroData();
        FetchMovieData();
    }, []);

    return (
        <>
        <Header/>
        
        {heroData && trendingData &&  <Hero data={heroData} trending={trendingData}/>}
        </>
    );
}
export default Home