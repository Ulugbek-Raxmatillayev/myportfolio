import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Main() {
    useEffect(() => {
        AOS.init();
    }, []);

    const typedElement = useRef(null);
    useEffect(() => {
        const typed = new Typed(typedElement.current, {
            strings: [
                "Front End is making web development",
                "Front End is web application creator",
                "Front End is web designer",
                "Front End is web site creator!"
            ],
            typeSpeed: 80,
            backSpeed: 25,
        });

        return () => {
            typed.destroy(); 
        };
    }, []);

    return (
        <div className='min-h-screen w-full pt-[4.3rem]'>
            <div className='home-menu flex justify-between items-center p-10 h-[100vh] rounded-2xl border border-slate-500 shadow-lg shadow-blue-500 
                max-lg:grid max-lg:grid-cols-1 max-lg:h-auto'>

                <div data-aos="fade-right" data-aos-duration="2000" className='flex flex-col gap-10'>
                    <h1 className='max-sm:text-3xl  text-5xl font-bold tracking-wider leading-tight'>I'm Front End developer</h1>
                    <p className='text-lg text-slate-300' ref={typedElement}></p>
                </div>

                <div data-aos="fade-left" data-aos-duration="2000" className='w-[50%] max-lg:w-full flex justify-center'>
                    <img className='w-1/2 max-lg:w-[80%]' src="https://blog.megaventory.com/wp-content/uploads/2022/09/Frontend-Intern-1024x1024.png" alt="" />
                </div>

            </div>
        </div>
    );
}

export default Main;
