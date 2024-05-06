import React from 'react'
import { FC } from 'react'
import { Movie } from '../interface';
import { Link } from 'react-router-dom';
interface CardProps{
    item:Movie;
}
const Card:FC<CardProps>= ({item}) => {
    const {id,backdrop_path,original_title,overview,release_date,vote_average} = item;
  return (
    <div className="card">
                <div className="image_container">
                    <img src={`https://image.tmdb.org/t/p/w200${backdrop_path}`} alt={original_title} />
                </div>
                <div className="title">
                    <span>{original_title}</span>
                </div>
                <div className="size">
                    <span>Release date: {release_date}</span> <br/>
                    <span>Overview</span>
                    <p>{overview}</p>
                </div>
                <div className="action">
                    <div className="rating">
                        <span>{vote_average.toFixed(1)}/10</span>
                    </div>
                    <Link className="view-button" to={`/movies/movie/${id}`}>
                        <span>View more</span>
                    </Link>
                </div>
            </div>
  )
}

export default Card