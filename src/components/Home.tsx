import { FC, useEffect, useState } from "react"
import axios from "axios"
import Card from "./Card"
import Sidebar from "./Sidebar"
import { ErrObj } from "../interface"
import { Movie } from "../interface"
import { useGlobalContext } from "../context"
import Modal from "./Modal"
const Home: FC = () => {
    //const [time, setTime] = useState<string>('day')

    const { loading, error, result,isModalOpen } = useGlobalContext();
    //*this is for top rated sidebar
    const [trendingMov, setTrendingMov] = useState<Movie[]>([])
    const [isLoading, setIsLoading] = useState<Boolean>(true)
    const [errorHome, setErrorHome] = useState<ErrObj>({ show: false, msg: "" })

    const url1: string = "https://api.themoviedb.org/3/trending/movie/day?api_key=259cdbc836d938ec3d03bd4aad0b8b61&append_to_response=videos,images"
    const fetchTrending = async () => {
        try {
            const response = await axios(url1);
            const data = response.data;
            setTrendingMov(data.results);
            setIsLoading(false);
            //console.log(data)
        }
        catch (error: any) {
            console.log(error.response);
            setErrorHome({ show: true, msg: `${error.response}` })
        }
    }
    useEffect(() => {
        //fetchMovies();
        fetchTrending();
    }, [])
    

    return (
        <>
            <div className="container">
                <div className="main">
                    <h4>Movies</h4>
                    <div className="grid_container">
                        {result.map((item: Movie, index: number) => (
                            <div key={index} className="grid_item">
                                <Card item={item} />
                            </div>)
                        )
                        }
                    </div>
                </div>
                {isModalOpen && <Modal />}
                
                <div className="sidebar">
                    <h4>Top rated</h4>
                    {trendingMov.map((item: Movie, index: number) => (
                        <Sidebar key={index} item={item} />
                    ))}
                </div>
            </div>
        </>
    )
}

export default Home