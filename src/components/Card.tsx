import { FC, useState } from 'react'
import { Movie } from '../interface';
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../context';
import { FaStar} from "react-icons/fa";
import { FaThList,FaRegEye } from "react-icons/fa";
import { cn } from '../utils';
interface CardProps {
    item: Movie;
}

const Card: FC<CardProps> = ({ item }) => {
    const { id, backdrop_path, original_title, overview, release_date, vote_average, poster_path } = item;
    const { favList, setFavList } = useGlobalContext()
    const stars = Math.round(vote_average);
    const [noOfStars, setnoOfStars] = useState(stars);
    const handleClick = () => {
        console.log(checkRepeatItem(id))
        if (checkRepeatItem(id))
            return;
        else {
            const newList = { id: id, poster_path: poster_path, original_title: original_title }
            setFavList([...favList, newList])
        }
    }

    //! bad practise to do like this.
    // const renderStars = () => {
    //     let stars = []
    //     for (let i = 0; i <= 9; i++) {
    //         if (i <= noOfStars)
    //             stars.push(<img src={accentStar} alt="star" className='text-accent fill-current h-4 w-4' />)
    //         else
    //             stars.push(<img src={star} alt="star" className='text-accent fill-current h-4 w-4' />)
    //     }
    //     return stars
    // }
    const checkRepeatItem = (id: number) => {
        return favList.some(x => x.id === id)
    }
    return (
        <div className="card w-64 h-96 font-poppins shadow-2xl rounded-lg overflow-hidden border-primary border-solid hover:-translate-y-1 transition-transform .3s ease-linear">
            <div className="image_container w-64 h-36 relative overflow-clip text-ellipsis">
                {/* <div className="gradient w-64 h-36 absolute top-0 left-0 bg-gradient-to-t from-rgba(0, 46, 71, 1) to-rgba(102, 183, 162, 1) z-20"></div> */}
                <img className='w-full' src={`https://image.tmdb.org/t/p/w300${backdrop_path}`} alt={original_title} loading='lazy' />
                <div className="title font-playFair font-semibold text-textLight text-xl absolute bottom-0 left-0 w-full h-8">
                    <span>{original_title}</span>
                </div>

            </div>
            <div className='p-1'>
            <div className="rating flex justify-between p-1">
                <div className="flex text-textSecondary">
                    {
                        Array.from({ length: 10 }).map((_,i) => (<FaStar className={cn
                            (
                                i<=noOfStars && "text-accent",
                                
                            )}/>))
                    }
                   
                </div>
                <div className="ratings flex text-sm font-bold">
                    <p>{vote_average.toFixed(1)}/10</p>
                </div>
            </div>
            <p className='text-xs font-medium px-1'>Release date: {release_date}</p>
            <div className="overview overflow-hidden h-32">
                <h5 className='text-sm font-semibold'>Overview</h5>
                <p className='text-xs font-extralight'>{overview}</p>
            </div>
            <div className="action flex justify-between">
                <div className="rating">
                    <button className='bg-secondary whitespace-nowrap px-4 py-2 text-textDark text-xs rounded-lg hover:-translate-y-1 transition ease-in-out delay-150 m-2.5 flex align-center' onClick={()=>handleClick()}><FaThList className='mr-1'/> Add to list</button>
                </div>
                <Link className="bg-primary px-4 py-2 text-textLight text-xs rounded-lg hover:-translate-y-1 transition ease-in-out delay-150 m-2.5" to={`/movies/movie/${id}`}>
                    <span className='flex align-center'>View more</span>
                </Link>
            </div>
            </div>
            {/* <div className="size"
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
            </div> */}
        </div>
    )
}

export default Card