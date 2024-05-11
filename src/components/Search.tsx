
import { ChangeEvent, useState, useEffect } from 'react'
import axios from 'axios'

import Card from './Card'
import { Movie } from '../interface'

const Search = () => {
    const [input, setInput] = useState<string>("")
    const [query, setQuery] = useState("")
    const [result, setResult] = useState<Movie[]>([])
    const [isLoading, setIsLoading] = useState(true)

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value)
    }
    const handleClick = () => {
        const searchQuery = `/search/movie?api_key=259cdbc836d938ec3d03bd4aad0b8b61&query=${input}&page=1`
        setQuery(searchQuery)
    }
    const fetchTrending = async (query: string) => {
        setIsLoading(true);
        try {
            const response = await axios(`https://api.themoviedb.org/3${query}`);
            const data = response.data;
            setResult(data.results);
            setIsLoading(false);
            //console.log(data)
        }
        catch (error: any) {
            console.log(error.response);
        }
    }
    useEffect(() => {
        //fetchMovies();
        fetchTrending(query);
    }, [query])
    return (
        <>
            <div className="search-container">
                <div className="search-input-holder">
                    <div className="search">
                        <input placeholder="Search..." type="text" value={input} onChange={(e) => handleChange(e)} />
                        <button type="submit" onClick={() => handleClick()}>Go</button>
                    </div>
                </div>
                <div className="search-result  border-2 border-solid border-black">
                   
                    {isLoading ? (<div className="preloader"></div>) : (<div className="grid_container">
                        {result?.length === 0 ? (<p>No searches found. Try another</p>) :
                            (result?.map((item: Movie, index: number) => (
                                <div key={index} className="grid_item">
                                    <Card item={item} />
                                </div>)
                            ))}
                    </div>)}
                    
                </div>
            </div>
        </>
    )
}

export default Search