import React, { useEffect, useState } from 'react'
import './Home.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom';

import MovieList from '../../component/MovieList/MovieList';
const Home = () => {
    const api = {
        key:"40c21f948212dfb2c5e743c484a3f51d",
        base:"https://api.themoviedb.org/3/movie/popular?api_key=&language=en-US"
    }
    
    const[popularMoviesList, setPopularMoviesList] = useState([]);
    useEffect(()=>{
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${api.key}&language=en-US`)
        .then(response => response.json())
        .then(data => {
            console.log(data.results)
            setPopularMoviesList(data.results)
        })
        
    },[])
    
    
  return (
    <div className='home'>
        <div className="movie-poster">
            <Carousel className='carousel'
            showThumbs={false}
            autoPlay={true}
            transitionTime={3}
            infiniteLoop={true}
            showStatus={false}
            >
                {
                    popularMoviesList.map((movie)=>{
                        return <Link to={`movie/${movie.id}`}>
                         <div className='poster-image'>
                            <img src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} alt="movie-image" />
                        </div>
                        <div className="poster-data">
                        <div className="poster-info">
                            <div className="poster-title">
                                <span>{movie ? movie.original_title : ""}</span>
                            </div>
                            <div className="poster-release-date">
                                <span>{movie ? movie.release_date: ""}</span>
                                <span>{movie ? movie.vote_average : ""}
                                <i className='fas fa-star'></i>
                                </span>
                            </div>
   
                        </div>
                        <div className="poster-description">
                            {/* {movie ? movie.overview : ""} */}
                            {movie.overview.slice(0, 50)}
                        </div>
                        </div>
                        </Link>
                        
                    })
                }
            </Carousel>
           
        </div>
        <MovieList/>
    </div>
  )
}

export default Home
