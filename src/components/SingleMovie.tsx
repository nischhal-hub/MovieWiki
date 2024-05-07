import React, { FC } from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../useFetch';

interface Genres{
  id:number;
  name:string;
}

const SingleMovie:FC = () => {
  const { id } = useParams();
  const queryStr = `/movie/${id}`
  const {loading, error, result} = useFetch(queryStr)
  const {backdrop_path,poster_path,adult,genres,original_language,original_title,overview,release_date,runtime,status,vote_average,production_companies} = result

  const renderArray = (array:any) => {
    if (!array) return null; // Return null if genres is not available
    return (
      <ul>
        {array.map((genre:any) => (
          <li key={genre.id}>{genre.name}</li>
        ))}
      </ul>
    );
  };

  return (
    <>
    <div className="background-img" style={{backgroundImage:`url(https://image.tmdb.org/t/p/w200${backdrop_path}`}}></div>
      <div className="single-container">
        <div className="movie-details">
          <div className="poster">
            <img src={`https://image.tmdb.org/t/p/w200${poster_path}`} alt={original_title} />
          </div>
          <div className="details-container">
            <div className="nav-links">
              <p><a href="">Home</a></p> 
              <p><a href="">Movies</a></p> 
              <p>{original_title}</p>
            </div>
            <h2 className='title' >{original_title}</h2>
            <p style={{marginLeft:"5px"}}>{`${vote_average?.toFixed(1)}`}/10</p>
            <div className="movie-item">
              <p>PG-13</p>
              <p>Movie</p>
              <p>{runtime} m</p>
            </div>
            <div className="controls">
              <button>Watch trailer</button>
              <button>Add to List</button>
            </div>
            <div className="overview">
              <p>{overview}</p>
            </div>
          </div>
        </div>
        <div className="extra-details">
            <p>Language:{original_language}</p>
            <p>Release date:{release_date}</p>
            <p>Duration:{runtime} min </p>
            <p>Geners: {renderArray(genres)}</p>
            <p>Production companies : {renderArray(production_companies)} </p>
            <p>Status: {status}</p>
        </div>
      </div>
    </>
  )
}

export default SingleMovie