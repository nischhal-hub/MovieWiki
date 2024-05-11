import { useGlobalContext } from '../context'
import { useState } from 'react';
import { Link } from 'react-router-dom'
import { cn } from '../utils';
import { FaStar} from "react-icons/fa";

const Modal = () => {
  const { isModalOpen, closeModal, modalData } = useGlobalContext()
  const { id, poster_path, original_title, overview, vote_average, media_type } = modalData;
  const stars = Math.round(vote_average);
  const [noOfStars, setnoOfStars] = useState(stars);
  return (
  //   {cn(
  //     "fixed",
  //     "top-0",
  //     "bottom-0",
  //     "w-full",
  //     "h-full",
  //     "grid",
  //     "place-items-center",
  //     "bg-primary",
  //     isModalOpen && "visible",
  //     isModalOpen && "opacity-10",
  //     isModalOpen && "z-40"
  // )}
    <div className={isModalOpen?"modal-overlay show-modal":"modal-overlay"}>
      <div className="modal-container relative bg-primary text-textLight">
        <button className='close-modal-btn absolute top-5' onClick={closeModal}>X</button>
        <h2 className='font-playFair font-bold text-2xl text-center my-3'>{original_title}</h2>
        <div className='modal-details'>
          <div className="modal-img">
            <img src={`https://image.tmdb.org/t/p/w185${poster_path}`} alt={original_title} />
          </div>
          <div className="modal-right-container">
            <div className="modal-overview mx-2 my-3">
              <p className='font-poppins font-light text-sm'>{overview}</p>
            </div>
            <div className="rating flex justify-start py-2">
                <div className="flex">
                   {Array.from({length:10}).map((_,i)=>(<FaStar key={i} className={cn(
                    i<=noOfStars && 'text-accent'
                   )}/>))}
                </div>
                <div className="ratings flex text-sm font-bold px-4">
                    <p>{vote_average.toFixed(1)}/10</p>
                </div>
            </div>
            <div className="modal-controls">
              <p className='bg-accent font-poppins h-8 text-textDark px-2 py-1 rounded-md'>{media_type}</p>
              <button className='bg-secondary text-textDark font-poppins px-4 py-2'><Link to={`/movies/movie/${id}`}>More details</Link></button>
            </div>
          </div>
        </div>


      </div>
    </div>
  )
}

export default Modal