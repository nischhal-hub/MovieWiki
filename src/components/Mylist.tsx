
import { useGlobalContext } from '../context'
import { Favlist } from '../interface';
import { Link } from 'react-router-dom';
import { MdDelete } from "react-icons/md";
import Popup from './Popup';
const Mylist = () => {
    const { favList, setFavList,setPopUp,popUp} = useGlobalContext();

    const handleRemove = (id: number) => {
        let newFavList = favList.filter(item => item.id !== id)
        setFavList(newFavList)
            setPopUp({visible:true, type:"delete",msg:"Movie deleted."})
    }
  
    return (
        <>
        {popUp.visible && <Popup />}
            <div className="mylist">
                <h2 className='font-playFair text-2xl font-semibold '>My list</h2>
                <div className="mylist-container">
                    {favList.length === 0 ? (<h2>Add item to list.</h2>) :
                        (favList.map((item: Favlist, index: number) => {
                            const { id, poster_path, original_title } = item;
                            return (
                                <div className="mylist-card-container font-poppins shadow-md" key={index}>
                                    <div key={id} className="mylist-card bg-secondary">
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
                                        <button className='bg-deleteRed text-textLight px-2 py-1 rounded-md' onClick={() => handleRemove(id)}><MdDelete /></button>
                                        <button><Link className='bg-primary text-textLight px-2 py-1 rounded-md' to={`/movies/movie/${id}`}>View more</Link></button>
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