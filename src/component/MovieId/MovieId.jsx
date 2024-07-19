import React from 'react'
import './MovieId.css';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Card from '../Card/Card';
import YouTube from 'react-youtube';
const MovieId = () => {
    const api = {
        key:"40c21f948212dfb2c5e743c484a3f51d",
        base:"https://api.themoviedb.org/3/movie/popular?api_key=&language=en-US"
    }
    const [movieData, setMovieData] = useState([]);
    const [video, setVideo] = useState([]);

    const {id} = useParams();
    
    useEffect(()=>{
        getMovieData();
    },[id])

    const getMovieData = ()=>{
        fetch(`https://api.themoviedb.org/3/movie/${id ? id : "Data is not fetched."}?api_key=${api.key}&language=en-US`)
        .then(response => response.json())
        .then(data => {
          console.log(data)
          setMovieData(data);
        })
    }
    const fetchVideo = ()=>{
      fetch(`https://api.themoviedb.org/3/movie/${id ? id : "data is not fetched"}/videos?api_key=${api.key}&language=en-US`)
      .then(response => response.json())
      .then(data => {
        console.log(data.results);
        setVideo(data.results);
      })
    }
    useEffect(()=>{
      fetchVideo()
      
    },[])

    const opts = {
      height: '200',
      width: '300'
    };

    
    
  return (
    <div className='movie'>
      <div className="movie-backdrop-image">
        <img src={`https://image.tmdb.org/t/p/original${movieData.backdrop_path}`} alt="" />
      </div>
      <div className="movie-detail">
        <div className="movie-detail-left">
          <div className="movie-poster">
            <img src={`https://image.tmdb.org/t/p/original${movieData.poster_path}`} alt="" />
          </div>
        </div>

        <div className="movie-detail-right">
          <div className="movie-title">
            <h3>{movieData ? movieData.original_title : ""}</h3>
            <p>{movieData.tagline}</p>
          </div>
          <div className="movie-rating">
            <span>{movieData.vote_average}
            <i className='fas fa-star'></i>
            </span>
            <span>({movieData.vote_count} Votes)</span>
          </div>
          <div className="runtime">
            <h3>{movieData.runtime} mins</h3>
          </div>
          <div className="release-date">
            <span>Release Date: {movieData.release_date}</span>
          </div>
          <div className="genre">
            {
              movieData && movieData.genres
              ?
              movieData.genres.map((genre)=>{
                return <span className='genre-name' key={genre.id}>{genre.name}</span>
              })
              :('')
            }
          </div>
          <div className="movie-overview">
            <h3>Synopsis</h3>
            <span>{movieData.overview}</span>
          </div>
          
          
          <div className="movie-video">
            {
              video.map(movie=>{
                if (movie.name.includes("Official Trailer")){
                  return <YouTube opts={opts} videoId={movie.key}/>
                } else {
                  return ""
                }
              })
            }
            
          </div>
         
          
      </div>
      
        </div>
        <div className="useful-links">
          <h2>Useful Links</h2>
          <div className="homepage-link"><a href={movieData.homepage} target='_blank'>Homepage</a>
          <i className="newTab fas fa-external-link-alt"></i></div>
          <div className="imdb-link"><a href={"https://www.imdb.com/title/" + movieData.imdb_id} target='_blank'>IMDB</a>
          <i className="newTab fas fa-external-link-alt"></i>
          </div>
        </div>
        <div className="companies-name"><h3>Production Companies</h3></div>
        <div className="production-companies">
          {
            movieData && movieData.production_companies
            ?
            movieData.production_companies.map((companies)=>{
                return companies.logo_path ?
                 <span className='company-detail' key={companies.id}>
                <img src={"https://image.tmdb.org/t/p/original" + companies.logo_path} alt="" />
                <span>{companies.name}</span>
              </span>
              :
              ("");
            })
            :
            ("")
          }
        </div>
        
    </div>
  )
}

export default MovieId
