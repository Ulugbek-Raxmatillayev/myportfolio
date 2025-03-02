import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Skills() {
  const progress = 97;
  const progress2 = 91;
  const progress3 = 34;
  const langprogress = 51;
  const langprogress2 = 25;
  const langprogress3 = 94;

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className='border border-slate-600 flex flex-col lg:flex-row justify-around shadow shadow-xl shadow-blue-500 skills-menu w-full rounded-2xl p-10 min-h-screen 
      md:flex-col md:items-center md:gap-10 sm:p-6 sm:pt-16 sm:gap-6'>
      <div className='border-b-2 lg:border-b-0 lg:border-r-2 w-full lg:mr-10 pb-10 lg:pb-0 sm:border-b-0 sm:border-r-0 sm:pb-6'>
        <h2 data-aos="zoom-in" data-aos-duration="2000" className='text-xl text-center text-green-200 pb-5 cursor-pointer'>Technical Skills</h2>
        <div data-aos="fade-up-right" data-aos-duration="2000">
          {[{ name: "HTML", progress: progress, color: "bg-[#7FFF00]" },
            { name: "CSS", progress: progress2, color: "bg-[#A0C800]" },
            { name: "Javascript", progress: progress3, color: "bg-[#ff5f25]" }].map((skill, index) => (
              <div key={index} className='mb-5'>
                <h3 className='pb-5 font-bold text-orange-300'>{skill.name}</h3>
                <div className="w-full bg-gray-300 rounded-full h-8 shadow-lg overflow-hidden relative">
                  <div className={`h-full ${skill.color} text-white text-sm font-bold flex items-center justify-center transition-all duration-500 ease-out`} style={{ width: `${skill.progress}%` }}>
                    {skill.progress}%
                  </div>
                </div>
              </div>
          ))}
        </div>
      </div>
      <div className='w-full' data-aos="zoom-in" data-aos-duration="2000">
        <h2 className='text-xl text-center text-slate-200 pb-5 cursor-pointer'>Language Skills</h2>
        <div data-aos="fade-up-left" data-aos-duration="2000">
          {[{ name: "English", progress: langprogress, color: "bg-[#FF8C00]" },
            { name: "Russia", progress: langprogress2, color: "bg-[#FF4500]" },
            { name: "Uzbek", progress: langprogress3, color: "bg-[#7FFF00]" }].map((skill, index) => (
              <div key={index} className='mb-5'>
                <h3 className='pb-5 font-bold text-blue-500'>{skill.name}</h3>
                <div className="w-full bg-gray-300 rounded-full h-8 shadow-lg overflow-hidden relative">
                  <div className={`h-full ${skill.color} text-white text-sm font-bold flex items-center justify-center transition-all duration-500 ease-out`} style={{ width: `${skill.progress}%` }}>
                    {skill.progress}%
                  </div>
                </div>
              </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
