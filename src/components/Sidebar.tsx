import React, { FC } from 'react'
import { Movie } from '../interface';
import { useGlobalContext } from '../context';
interface CardProps{
    item:Movie;
}
const Sidebar: FC<CardProps> = ({item}) => {
    const {id,poster_path, original_title,vote_average,overview, media_type} = item;
    const{openModal,setModalData} = useGlobalContext()
    const handleClick = ()=>{
        openModal();
        setModalData({id,poster_path, original_title, overview, vote_average,media_type});
    }
    return (
        <>
            <div className="sidebar-card shadow-xl" onClick={()=>handleClick()}>
                <div className="img">
                <img src={`https://image.tmdb.org/t/p/w185${poster_path}`} alt={original_title} />
                </div>
                <div className="textBox text-textDark">
                    <div className="textContent">
                        <p className="h1">{original_title}</p>
                        <span className="span">{vote_average?.toFixed(1)}/10</span>
                    </div>
                    <div>
                    </div></div></div>
        </>
    )
}

export default Sidebar