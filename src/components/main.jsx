import React, { useEffect, useRef } from 'react'
import Typed from 'typed.js';

function Main() {
    const typedElement = useRef(null);
    useEffect(() => {
        const typed = new Typed(typedElement.current, {
            strings: ["Front End is making web development", "Front End is web application creator", "Front End is web designer", "Front End is web site creator !"],
            typeSpeed: 80,
            backSpeed: 25,
        });

        return () => {
            typed.destroy(); // Komponent unmount bo'lganda Typed.js ni tozalaymiz
        };
    }, []);

    return (
        <div className=' h-[100vh] w-full mb-[4.3rem] pt-[4.3rem]'>
            <div className='home-menu shadow shadow-lg border-slate-500 border shadow-blue-500 flex justify-between items-center  p-10 h-[100vh] rounded-2xl'>
                <div className='flex flex-col gap-10'>
                    <h1 className='text-5xl font-bold tracking-wider leading-tight' >I'm Front End developer</h1>
                    <p className='text-lg text-slate-300' ref={typedElement}></p>
                </div>
                <div className='w-[50%]'>
                    <img className='width-50' src="https://blog.megaventory.com/wp-content/uploads/2022/09/Frontend-Intern-1024x1024.png" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Main