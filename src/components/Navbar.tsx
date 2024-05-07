
import { FC } from 'react'
import { Outlet,Link} from 'react-router-dom'


const Navbar: FC = () => {
    return (
        <>
            <div className='header'>
                <div className="navlogo">
                    <button>=</button>
                    <h2>MW.</h2>
                </div>
                <div className="navlinks">
                   <p> <Link to={'/'}>Home</Link></p>
                   <p><Link to={'/movies'}>Movie</Link></p>
                   <p><Link to={'/tvshows'}>TV shows</Link></p>
                   <p>My list</p>
                </div>
                <div className="navcontrols">
                    <button>Search</button>
                    <button>Login</button>
                </div>
            </div>
            <Outlet/>
        </>
    )
}

export default Navbar