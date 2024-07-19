import React, { useState } from 'react'
import Card from '../../component/Card/Card'
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import './SearchPage.css';


const SearchPage = () => {
    const getMovieData = ()=>{
        const movieData = localStorage.getItem("movies-data")
    
        if (movieData) {
            return JSON.parse(localStorage.getItem("movies-data"))
        } else {
            return []
        }
    }
    const [inputData, setInputData] = useState('');
    const [userMovieData, setUserMovieData] = useState(getMovieData());
   
    const searchMovie = (event)=>{
        
        if (event.key === "Enter") {
            
            fetch(`https://api.themoviedb.org/3/search/movie?query=${inputData ? inputData : ""}&api_key=40c21f948212dfb2c5e743c484a3f51d`)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                console.log(data.results);
                setUserMovieData(data.results);
          })   
        }    
    }

    const handleClick = ()=>{
        fetch(`https://api.themoviedb.org/3/search/movie?query=${inputData ? inputData : ""}&api_key=40c21f948212dfb2c5e743c484a3f51d`)
            .then(response => response.json())
            .then(data => {
                console.log(data.results);
                setUserMovieData(data.results);
            })
    }

    const formHandler = (event)=>{
        event.preventDefault();
    }
    
    useEffect(()=>{
        window.localStorage.setItem("movies-data", JSON.stringify(userMovieData))
    },[userMovieData])

  return (
    <div>
        <div className="movie-search">
            <form action="" onSubmit={formHandler}>
            <input type="text" placeholder='Search Movies' typeof='submit' value={inputData} required  onChange={e=>setInputData(e.target.value)} onKeyPress={searchMovie}/>
            <button onClick={handleClick}>Search</button>
            </form>
        </div>
       
        <div className='movie-data'>
           
            {   
                userMovieData.map((movie)=>{ 
                    return movie.poster_path ?
                     <Card movie={movie}/>
                    :
                    ("")
                })
            }
        </div>
        
    </div>
  )
}

export default SearchPage
