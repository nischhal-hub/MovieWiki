
import { FC } from 'react'
import { Outlet, Link } from 'react-router-dom'


const Navbar: FC = () => {
    return (
        <>
            <div className='header flex justify-between items-center mt-4 mx-9 mb-7'>
                <div className="navlogo">
                    <button className='hidden'>=</button>
                    <h2 className='text-4xl font-playFair font-semibold'>M<span className='text-textLight bg-primary p-1 rounded-md'>Wiki<span className='text-accent'>.</span></span></h2>
                </div>
                <div className="navlinks flex text-textDark font-poppins font-normal items-center ">
                    <p className='relative m-2.5'><Link to={'/'} className='anchorline text-textDark hover:text-slate-500'>Home</Link></p>
                    <p className='relative m-2.5'><Link to={'/movies'} className='anchorline text-textDark hover:text-slate-500 '>Movie</Link></p>
                    <p className='relative m-2.5'><Link to={'/tvshows'} className='anchorline text-textDark hover:text-slate-500'>TV shows</Link></p>
                    <p className='relative m-2.5'><Link to={'/mylist'} className='anchorline text-textDark hover:text-slate-500'>My list</Link></p>
                </div>
                <div className="navcontrols  font-poppins">
                    <button className='bg-secondary-500 px-4 py-2 text-textDark rounded-lg hover:-translate-y-1 transition ease-in-out delay-150 m-2.5'><Link to={'/search'}>Search</Link></button>
                    <button className='bg-primary px-4 py-2 text-textLight rounded-lg hover:-translate-y-1 transition ease-in-out delay-150 m-2.5'>Login</button>
                </div>
            </div>
            <Outlet />
        </>
    )
}

export default Navbar