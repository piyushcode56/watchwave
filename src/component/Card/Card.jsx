import React, { useEffect, useState } from 'react'
import Skeleton, {SkeletonTheme} from 'react-loading-skeleton';
import './Card.css';
import { Link } from 'react-router-dom';
const Card = ({movie}) => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(()=>{
        setTimeout(()=>{
            setIsLoading(false)
        }, 1500)
    },[])
  return (
    <>
    {
        isLoading?
        <div className='card'>
            <SkeletonTheme color="#202020" highlightColor='#444'>
                <Skeleton height={300} duration={2}/>
            </SkeletonTheme>
        </div>
        :
        
        <Link to={`/movie/${movie.id}`}>
            <div className="card-container">
                <div className="card">
                    <div className="card-image">
                        <img src={`https://image.tmdb.org/t/p/original${movie && movie.poster_path}`} alt="" />
                    <div className="card-info">
                        <div className="card-title">{movie.original_title}</div>
                        <div className="card-runtime">
                            {movie.release_date}
                            <span className='card-rating'>{movie.vote_average}
                            <i className='fas fa-star'></i>
                            </span>
                             
                        </div>
                        <div className="card-description">
                            {movie.overview.slice(0, 118) + "..."}
                        </div>
                    </div>
                    </div>
                    
                </div>
                
            </div>
        </Link>
    }
    </>
  )
}

export default Card
