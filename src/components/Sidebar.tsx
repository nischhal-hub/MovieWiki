import React, { FC } from 'react'
import { Movie } from '../interface';

interface CardProps{
    item:Movie;
}
const Sidebar: FC<CardProps> = ({item}) => {
    const {poster_path, original_title,vote_average} = item;
    return (
        <>
            <div className="sidebar-card">
                <div className="img">
                <img src={`https://image.tmdb.org/t/p/w185${poster_path}`} alt={original_title} />
                </div>
                <div className="textBox">
                    <div className="textContent">
                        <p className="h1">{original_title}</p>
                        <span className="span">{vote_average.toFixed(1)}/10</span>
                    </div>
                    <div>
                    </div></div></div>
        </>
    )
}

export default Sidebar