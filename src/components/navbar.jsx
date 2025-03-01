import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <div className='nav flex z-10 navbar-menu fixed w-[78.65vw] justify-between items-center px-10 py-2 border border-slate-200 shadow-md rounded-2xl  shadow-white '>
            <div ><Link to={'/'}><a href="#"><img className='w-[50px] h-[50px] rounded-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs0OWCsD60g34jIJKyrmKrLrHWWK3NQSWLVA&s" alt="" /></a></Link></div>
            <ol className='flex space-x-24 text-xl'>
                <li className=' hover:text-blue-800'><Link to={'/'}>Main</Link></li>
                <li className=' hover:text-blue-800'><Link to={'/skills'}>Skills</Link></li>
                <li className=' hover:text-blue-800'><Link to={'/projects'}>Projects</Link></li>
                <li className=' hover:text-blue-800'><a href='myresume.html' download={'myresume.html'}>CV</a></li>
            </ol>
        </div>
    )
}

export default Navbar