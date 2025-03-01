import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

function Project() {
    const [data, setData] = useState([]);
    const location = useLocation(); // Hozirgi sahifani olish

    function fetchAPI() {
        axios.get('https://api.github.com/users/Ulugbek-Raxmatillayev/repos')
            .then((response) => {
                console.log(response.data);
                setData(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    useEffect(() => {
        fetchAPI();
    }, []);

    // Agar `/projects` sahifasida bo‘lsa hamma data chiqadi, aks holda faqat 4 tasi
    const visibleData = location.pathname === "/projects" ? data : data.slice(0, 4);

    return (
        <div className='overflow-hidden overflow-y-scroll project-menu grid grid-cols-4 gap-10 w-full rounded-2xl p-10 pt-20 h-[100vh]'>
            <h2 className='absolute top-14 text-center left-[43%] text-4xl cursor-pointer'>
                {"My Portfolio".split("").map((char, index) => (
                    <span key={index} className='hover:text-6xl tracking-wide'>{char === " " ? "\u00A0" : char}</span>
                ))}
            </h2>

            {visibleData.map((item, index) => (
                <div key={index} className='rounded-3xl p-5 git-card h-[50vh] border border-slate-200 shadow shadow-2xl shadow-blue-500 mt-24'>
                    <img className='ml-16 mb-5 w-20 h-20 rounded-full' src={item.owner.avatar_url} alt="" />
                    <p className='ml-5 mb-3'>{item.owner.login}</p>
                    <h2 className='ml-5 truncate text-xl font-semibold' title={item.name}>{item.name}</h2>
                    <div className='flex justify-between'>
                        <a href={item.homepage ? item.homepage : 'https://google.com'} target='blank' className='border cursor-pointer border-slate-300 px-3 py-3 rounded-2xl hover:bg-white hover:text-black'>🔗</a>
                        <a href={`https://github.com/${item.full_name}`} target='blank' className='border cursor-pointer border-slate-300 hover:bg-transparent hover:text-white px-3 py-3 rounded-2xl bg-white text-black'>Open Git</a>
                    </div>
                </div>
            ))}

            {/* Show More tugmasi faqat Home Page da ko‘rinadi */}
            {location.pathname !== "/projects" && (
                <Link to={'/projects'} className='absolute left-[47%] bottom-16 border px-10 py-3 rounded-xl'>
                    Show More
                </Link>
            )}
        </div>
    );
}

export default Project;
