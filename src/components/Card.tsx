import React from 'react'
import { FC } from 'react'
import { Movie } from '../interface';
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../context';
import Favlist from './Mylist';
interface CardProps {
    item: Movie;
}
const Card: FC<CardProps> = ({ item }) => {
    const { id, backdrop_path, original_title, overview, release_date, vote_average,poster_path } = item;
    const {favList, setFavList} = useGlobalContext()
    const handleClick = ()=>{
        const newList = {id:id,poster_path:poster_path, original_title:original_title }
        setFavList([...favList, newList])
    }
    return (
        <div className="card">
            <div className="image_container">
                <img src={`https://image.tmdb.org/t/p/w200${backdrop_path}`} alt={original_title} />
            </div>
            <div className="title">
                <span>{original_title}</span>
            </div>
            <div className="size">
                <span>Release date: {release_date}</span>&nbsp; &nbsp; &nbsp;&nbsp;&nbsp;<span style={{ fontWeight: "800" }}>{vote_average?.toFixed(1)}/10</span><br />
                <span>Overview</span>
                <p>{overview}</p>
            </div>
            <div className="action">
                <div className="rating">
                    <button className='view-button' onClick={()=>handleClick()}>Add to list</button>
                </div>
                <Link className="view-button" to={`/movies/movie/${id}`}>
                    <span>View more</span>
                </Link>
            </div>
        </div>
    )
}

export default Card