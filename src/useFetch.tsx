import React, { FC, useEffect, useState } from 'react'
import axios from 'axios';
import { ErrObj,Movie, MovieDetails } from './interface';

// const url: string = "https://api.themoviedb.org/3/movie/now_playing?api_key=259cdbc836d938ec3d03bd4aad0b8b61&append_to_response=videos,images"
// const url1: string = "https://api.themoviedb.org/3/trending/movie/day?api_key=259cdbc836d938ec3d03bd4aad0b8b61&append_to_response=videos,images"

interface UseFetchResult {
  loading: boolean;
  error: ErrObj;
  result: Movie[] | any; 
}

const useFetch: (query: string) => UseFetchResult = (query: string) => {
  console.log(query)
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<ErrObj>({ show: false, msg: "" })
  const [result, setResult] = useState<Movie[]>([])
  const containsNumber = (str) => /\d/.test(str);
  const fetchMovies = async (url: string) => {
    try{
    const resp = await axios(url);
    //console.log(url)
    const data = resp.data;
    //console.log(data)
    //console.log(data.results)
      setLoading(false)
      if(containsNumber(query)){
      setResult(data)}
      else{
        setResult(data.results)
      }
  }
  catch(error:any){
    setError({ show: true, msg: `${error.response}` })
  }
  }
  useEffect(() => {
    fetchMovies(`https://api.themoviedb.org/3${query}?api_key=259cdbc836d938ec3d03bd4aad0b8b61`)

  }, [query])
  return { loading, error, result }
}

export default useFetch