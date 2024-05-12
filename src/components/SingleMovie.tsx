import { FC, useState } from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../useFetch';
import { useGlobalContext } from '../context';
import { Link } from 'react-router-dom';
import { FaStar} from "react-icons/fa";
import {cn} from '../utils'
import Popup from './Popup';
interface Genres{
  id:number;
  name:string;
}

const SingleMovie:FC = () => {
  const { id } = useParams();
  const queryStr = `/movie/${id}?api_key=259cdbc836d938ec3d03bd4aad0b8b61`
  const {loading, error, result} = useFetch(queryStr)
  const {backdrop_path,poster_path,adult,genres,original_language,original_title,overview,release_date,runtime,status,vote_average,production_companies} = result
  const {favList, setFavList, setPopUp,popUp} = useGlobalContext()
  const stars = Math.round(vote_average);
  const [noOfStars, setnoOfStars] = useState(stars);
  // const renderArray = (array:any) => {
  //   if (!array) return null; // Return null if genres is not available
  //   return (
  //     <ul>
        
  //     </ul>
  //   );
  // };

  const handleClick=(id:number)=>{

    const newList = {id:id,poster_path:poster_path, original_title:original_title }
        setFavList([...favList, newList])
        setPopUp({visible:true, type:"add",msg:"Movie added to the list."})
  }
  if(loading)
    return(<div className="preloader"></div>)
  return (
    <>
    {popUp.visible && <Popup />}
    <div className="background-img" style={{backgroundImage:`url(https://image.tmdb.org/t/p/w200${backdrop_path}`}}></div>
      <div className="absolute top-28 w-100 h-4/5 text-textLight flex justify-center items-center bg-transparentBg">
        <div className="movie-details flex">
          <div className="poster w-1/4">
            <img src={`https://image.tmdb.org/t/p/w300${poster_path}`} alt={original_title} />
          </div>
          <div className="details-container w-3/4 ml-6">
            <div className="nav-links font-poppins">
              <p><Link className='underline hover:text-accent transition .3s ease-linear' to={"/"}>Home</Link></p> 
              <p>.</p>
              <p><Link className='underline hover:text-accent transition .3s ease-linear' to={'/'}>Movies</Link> </p>
              <p>.</p>
              <p>{original_title}</p>
            </div>
            <h2 className='title font-playFair font-bold text-4xl'>{original_title}</h2>
            <div className="rating flex justify-start p-1">
                <div className="flex">
                    {
                        Array.from({ length: 10 }).map((_,i) => (<FaStar key={i} className={cn
                            (
                                i<=noOfStars && "text-accent",
                                
                            )}/>))
                    }
                   
                </div>
                <div className="ratings flex text-sm font-bold pl-3">
                    <p>{vote_average.toFixed(1)}/10</p>
                </div>
            </div>
            <div className="movie-item font-poppins">
              <p className='bg-primary p-1'>PG-13</p>
              <p className='bg-secondary p-1 text-textDark'>Movie</p>
              <p className='bg-accent p-1 text-textDark'>{runtime} m</p>
            </div>
            <div className="controls font-poppins">
              <button className='bg-secondary text-textDark px-4 py-2'>Watch trailer</button>
              <button className='bg-accent text-textDark px-4 py-2 hover:-translate-y-1 transition .3s ease-linear' onClick={()=>handleClick(Number(id))}>Add to List</button>
            </div>
            <div className="overview font-poppins">
              <p>{overview}</p>
            </div>
          </div>
        </div>
        <div className="extra-details font-poppins">
            <p>Language: <span className='uppercase font-semibold'>{original_language}</span></p>
            <p>Release date: <span className='font-semibold'>{release_date}</span> </p>
            <p>Duration: <span className='uppercase font-semibold'>{runtime} min</span></p>
            <p>Geners: </p>
            <div className='flex'>{genres?.map((genre:any) => (
          <li className='list-none bg-accent text-textDark px-1 py-2 m-1 text-sm font-light first-of-type:ml-0' key={genre.id}>{genre.name}</li>
        ))}</div>
            <p>Production companies :  </p>
            <div className='flex'>{production_companies?.map((genre:any) => (
          <li className='list-none bg-accent text-textDark px-1 py-2 m-1 text-sm font-light first-of-type:ml-0' key={genre.id}>{genre.name}</li>
        ))}</div>
            <p>Status: <span className='uppercase font-semibold'>{status}</span> </p>
        </div>
      </div>
    </>
  )
}

export default SingleMovie