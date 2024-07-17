import React from 'react'
import './MovieList.css';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Card from '../Card/Card';
const MovieList = () => {
    const api = {
        key:"40c21f948212dfb2c5e743c484a3f51d",
        base:"https://api.themoviedb.org/3/movie/popular?api_key=&language=en-US"
    }
    const [movieList, setMovieList] = useState([]);
    
    const {type} = useParams();
    
    useEffect(()=>{
        getData();
    },[])

    useEffect(()=>{
        getData();
    },[type])

   
    const getData = ()=>{
        fetch(`https://api.themoviedb.org/3/movie/${type ? type: "popular"}?api_key=${api.key}&language=en-US`)
        .then(response => response.json())
        .then(data => setMovieList(data.results))
    }
  return (
    <div className='container'>
        <div className="list-name" style={{marginBottom:'20px'}}>{type ? type : "Popular".toUpperCase()}</div> 
        
            <div className="list-cards">
            { 
                movieList.length > 0 ?
                    movieList.map((movie)=>{
                        return <Card movie={movie}></Card>
                    })
                :
                ("Loading...")
            }
            </div>
    
    </div>
  )
}

export default MovieList
