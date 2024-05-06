
import { FC } from 'react'
import { Outlet } from 'react-router-dom'


const Navbar: FC = () => {
    return (
        <>
            <div className='header'>
                <div className="navlogo">
                    <button>=</button>
                    <h2>MW.</h2>
                </div>
                <div className="navlinks">
                    <p>Home</p>
                    <p>Movies</p>
                    <p>TV Series</p>
                    <p>Most popular</p>
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