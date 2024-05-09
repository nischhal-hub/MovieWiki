
import { useGlobalContext } from '../context'
import { Favlist } from '../interface';
import { Link } from 'react-router-dom';
const Mylist = () => {
    const { favList, setFavList } = useGlobalContext();

    const handleRemove = (id: number) => {
        let newFavList = favList.filter(item => item.id !== id)
        setFavList(newFavList)
        
    }
  
    return (
        <>
            <div className="mylist">
                <h2>My list</h2>
                <div className="mylist-container">
                    {favList.length === 0 ? (<h2>Add item to list.</h2>) :
                        (favList.map((item: Favlist, index: number) => {
                            const { id, poster_path, original_title } = item;
                            return (
                                <div className="mylist-card-container" key={index}>
                                    <div key={id} className="mylist-card">
                                        <div className="mylist-img">
                                            <img src={`https://image.tmdb.org/t/p/w185${poster_path}`} alt={original_title} />
                                        </div>
                                        <div className="mylist-textBox">
                                            <div className="mylist-textContent">
                                                <p className="h1">{original_title}</p>
                                            </div>
                                            <div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mylist-btns">
                                        <button onClick={() => handleRemove(id)}>Remove</button>
                                        <button><Link to={`/movies/movie/${id}`}>View more</Link></button>
                                    </div>
                                </div>
                            )
                        }))}

                </div>
            </div>
        </>
    )
}

export default Mylist