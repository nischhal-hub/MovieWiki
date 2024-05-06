import React from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useGlobalContext } from '../context';
import useFetch from '../useFetch';
const SingleMovie = () => {
  const { id } = useParams();
  const queryStr = `/movie/${id}`
  const {loading, error, result} = useFetch(queryStr)
  return (
    <>
    <div className="background-img" style={{backgroundImage:`url(https://image.tmdb.org/t/p/w200${result.poster_path}`}}></div>
      <div className="single-container">
        <div className="movie-details">
          <div className="poster">
            <img src="https://image.tmdb.org/t/p/w200/zDi2U7WYkdIoGYHcYbM9X5yReVD.jpg" alt="" />
          </div>
          <div className="details-container">
            <div className="nav-links">
              <p><a href="">Home</a></p> 
              <p><a href="">Movies</a></p> 
              <p>Title</p>
            </div>
            <h2 className='title' >{result.original_title}</h2>
            <div className="movie-item">
              <p>PG-13</p>
              <p>Type</p>
              <p>Running minutes</p>
            </div>
            <div className="controls">
              <button>Watch trailer</button>
              <button>Add to List</button>
            </div>
            <div className="overview">
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime iste illo natus explicabo! Repellat perspiciatis veritatis velit vitae obcaecati! In voluptatem quod magni aliquam nemo fuga. Cupiditate ducimus quo quibusdam obcaecati rerum deserunt ab iusto delectus minus tempora autem est cumque quaerat aut quam, dolorem sed. Necessitatibus excepturi fugiat voluptatibus molestiae repellat repellendus, magni eos rem ullam asperiores in, libero neque, porro sit esse fugit explicabo deserunt! Libero, cupiditate sunt? Itaque quibusdam repellendus odit sed rerum ab! Odio quos sunt quidem adipisci quasi, tempora soluta repellendus ipsa magnam est deserunt dignissimos rem omnis saepe maiores provident ut, dolorem voluptate veritatis?</p>
            </div>
          </div>
        </div>
        <div className="extra-details">
            <p>Language: </p>
            <p>Release date: </p>
            <p>Duration: </p>
            <p>----------</p>
            <p>Geners: </p>
            <p>----------</p>
            <p>Production companies : </p>
            <p>Producers: </p>
        </div>
      </div>
    </>
  )
}

export default SingleMovie