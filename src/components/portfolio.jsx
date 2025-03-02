import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';


function Project() {
    useEffect(() => {
        AOS.init();
    }, [])
    const [data, setData] = useState([]);
    const navigate = useNavigate(''); // Sahifalarni o‘tkazish
    const location = useLocation(); // Hozirgi sahifani olish
    const [isLoad, setIsLoad] = useState(true);
    function fetchAPI() {
        axios.get('https://api.github.com/users/Ulugbek-Raxmatillayev/repos')
            .then((response) => {
                console.log(response);
                setData(response.data);
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => {
                setIsLoad(false)
            })

    }

    useEffect(() => {
        fetchAPI();
    }, []);

    // Agar `/projects` sahifasida bo‘lsa hamma data chiqadi, aks holda faqat 4 tasi
    const visibleData = location.pathname === "/projects" ? data : data.slice(0, 4);

    return (
        <div className='relative overflow-y-scroll project-menu grid  max-xl:grid-cols-2 max-md:grid-cols-1 gap-10 w-full rounded-2xl p-10 pt-20 h-[100vh]'>
            {location.pathname === "/projects" && (
                <button onClick={() => navigate('/')} className='fixed cursor-pointer z-50 flex items-center gap-3 border px-3 py-2 bg-slate-400 rounded-xl top-[100px] left-[45px]'>
                    <span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-box-arrow-left" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M6 12.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-1 0v-2A1.5 1.5 0 0 1 6.5 2h8A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 5 12.5v-2a.5.5 0 0 1 1 0z" />
                        <path fill-rule="evenodd" d="M.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L1.707 7.5H10.5a.5.5 0 0 1 0 1H1.707l2.147 2.146a.5.5 0 0 1-.708.708z" />
                    </svg></span>
                    <span>Back</span>
                </button>
            )}
            <h2 data-aos="flip-up" data-aos-duration="2000" className='absolute max-md:text-2xl max-md:left-[30%] top-14 text-center left-[43%] text-4xl cursor-pointer'>
                {"My Portfolio".split("").map((char, index) => (
                    <span key={index} className='hover:text-6xl tracking-wide'>{char === " " ? "\u00A0" : char}</span>
                ))}
            </h2>

            {!isLoad ? visibleData.map((item, index) => (
                    <div key={index} className='rounded-3xl p-5 git-card h-[50vh] border border-slate-200 shadow shadow-2xl shadow-blue-500 mt-[4rem]'>
                        <img className='ml-16 mb-5 w-20 h-20 rounded-full' src={item.owner.avatar_url} alt="" />
                        <p className='ml-5 mb-3'>{item.owner.login}</p>
                        <h2 className='ml-5 truncate text-xl font-semibold' title={item.name}>{item.name}</h2>
                        <div className='flex justify-between'>
                            <a href={item.homepage ? item.homepage : 'https://google.com'} target='blank' className='projes-btn border cursor-pointer border-slate-300 px-3 py-3 rounded-2xl hover:bg-white hover:text-black'>🔗</a>
                            <a href={`https://github.com/${item.full_name}`} target='blank' className='projes-btn   border cursor-pointer border-slate-300 hover:bg-transparent hover:text-white px-3 py-3 rounded-2xl bg-white text-black'>Open Git</a>
                        </div>
                    </div>
            )) : (<div role="status" className='absolute top-[50%] left-[48%]'>
                <svg aria-hidden="true" className="w-10 h-10 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                </svg>
                <span className="sr-only">Loading...</span>
            </div>)}

            {/* Show More tugmasi faqat Home Page da ko‘rinadi */}
            {location.pathname !== "/projects" && (
                <Link to={'/projects'} className='absolute left-[50%] max-xl:left-[39%] max-sm:left-[1%] max-md:left-[29%] max-md:w-[200px] show-btn bottom-16 border px-10 py-3 rounded-xl'>
                    Show More
                </Link>
            )}
        </div>
    );
}

export default Project;
