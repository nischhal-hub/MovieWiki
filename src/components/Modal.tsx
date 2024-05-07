import React from 'react'
import { useGlobalContext } from '../context'
import { Link } from 'react-router-dom'
const Modal = () => {
  const { isModalOpen, openModal, closeModal, modalData } = useGlobalContext()
  const { id,poster_path, original_title, overview, vote_average, media_type } = modalData;
  return (
    <div className={`${isModalOpen ? "modal-overlay show-modal" : "modal-overlay"}`}>
      <div className="modal-container">
        <button className='close-modal-btn' onClick={closeModal}>X</button>
        <h2>{original_title}</h2>
        <div className='modal-details'>
          <div className="modal-img">
            <img src={`https://image.tmdb.org/t/p/w185${poster_path}`} alt={original_title} />
            <p>{vote_average?.toFixed(1)}/10</p>
          </div>
          <div className="modal-right-container">
            <div className="modal-overview">
              <p>{overview}</p>
            </div>
            <div className="modal-controls">
              <p>{media_type}</p>
              <button><Link to={`/movies/movie/${id}`}>More details</Link></button>
            </div>
          </div>
        </div>


      </div>
    </div>
  )
}

export default Modal