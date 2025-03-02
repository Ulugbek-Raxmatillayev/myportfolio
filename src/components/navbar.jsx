import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react'; // Ikonka uchun

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className='nav flex z-10 navbar-menu fixed w-[78.65vw] justify-between items-center px-10 py-2 border border-slate-200 shadow-md rounded-2xl shadow-white 
        max-w-[1024px]:px-6 max-w-[1024px]:py-1 max-w-[1024px]:w-[90vw] 
        max-w-[768px]:flex-col max-w-[768px]:w-full max-w-[768px]:p-4 
        max-w-[640px]:text-sm max-w-[640px]:space-x-2'>

            {/* Logo */}
            <div>
                <Link to={'/'}>
                    <img className='w-[50px] h-[50px] rounded-full max-w-[640px]:w-[40px] max-w-[640px]:h-[40px]'
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs0OWCsD60g34jIJKyrmKrLrHWWK3NQSWLVA&s" alt="Logo" />
                </Link>
            </div>

            {/* Kichik ekranda menyu tugmasi */}
            <button onClick={() => setIsOpen(true)} className='lg:hidden'>
                <Menu size={32} />
            </button>

            {/* O‘ng tomondan chiqadigan menyu */}
            {isOpen && (
                <div className='fixed top-0 right-0 h-full w-[60%] md:w-[50%] bg-slate-600 shadow-lg transform transition-transform duration-300 ease-in-out translate-x-0'>
                    <button onClick={() => setIsOpen(false)} className="absolute top-5 right-5 text-white">
                        <X size={32} />
                    </button>

                    <ol className="flex flex-col space-y-6 text-xl mt-16 px-10 text-white bg-slate-700">
                        <li className='hover:text-blue-300'><Link to={'/'} onClick={() => setIsOpen(false)}>Main</Link></li>
                        <li className='hover:text-blue-300'><Link to={'/skills'} onClick={() => setIsOpen(false)}>Skills</Link></li>
                        <li className='hover:text-blue-300'><Link to={'/projects'} onClick={() => setIsOpen(false)}>Projects</Link></li>
                        <li className='hover:text-blue-300'><a href='file:///C:/Users/ADMIN/Desktop/portfolio/src/assets/My%20resume.pdf' download={'file:///C:/Users/ADMIN/Desktop/portfolio/src/assets/My%20resume.pdf'} target='blank'>CV</a></li>
                    </ol>
                </div>
            )}

            {/* Katta ekranda oddiy menyu */}
            <ol className='hidden lg:flex space-x-24 text-xl 
            max-w-[1024px]:space-x-16 
            max-w-[768px]:flex-col max-w-[768px]:space-x-0 max-w-[768px]:space-y-4 
            max-w-[640px]:text-base max-w-[640px]:space-y-2'>
                <li className='hover:text-blue-800'><Link to={'/'}>Main</Link></li>
                <li className='hover:text-blue-800'><Link to={'/skills'}>Skills</Link></li>
                <li className='hover:text-blue-800'><Link to={'/projects'}>Projects</Link></li>
                <li className='hover:text-blue-300'><a href='/My resume.pdf' download={'/My resume.pdf'} target='blank'>CV</a></li>

            </ol>
        </div>
    );
}

export default Navbar;
