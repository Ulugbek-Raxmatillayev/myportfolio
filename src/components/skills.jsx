import React from 'react'

function Skills() {
  const progress = 97
  const progress2 = 91
  const progress3 = 84
  const langprogress = 51
  const langprogress2 = 25
  const langprogress3 = 94
  return (
    <div className='border border-slate-600 flex justify-around shadow shadow-xl shadow-blue-500 skills-menu w-full rounded-2xl p-10 pt-20 h-[100vh]'>
      <div className='border-r-2 w-full mr-10'>
        <h2 className='text-xl text-center text-green-200 pb-5 cursor-pointer'>
          <span className='tracking-wide hover:text-3xl'>T</span>
          <span className='tracking-wide hover:text-3xl'>e</span>
          <span className='tracking-wide hover:text-3xl'>ch</span>
          <span className='tracking-wide hover:text-3xl'>n</span>
          <span className='tracking-wide hover:text-3xl'>i</span>
          <span className='tracking-wide hover:text-3xl'>c</span>
          <span className='tracking-wide hover:text-3xl'>a</span>
          <span className='tracking-wide hover:text-3xl'>l</span>
          <span className='tracking-wide hover:text-3xl'>&nbsp;</span>
          <span className='tracking-wide hover:text-3xl'>S</span>
          <span className='tracking-wide hover:text-3xl'>k</span>
          <span className='tracking-wide hover:text-3xl'>i</span>
          <span className='tracking-wide hover:text-3xl'>l</span>
          <span className='tracking-wide hover:text-3xl'>l</span>
          <span className='tracking-wide hover:text-3xl'>s</span>
        </h2>
        <div>
          <h3 className='pb-5 font-bold text-orange-300 [text-shadow:_0_2px_4px_yellow] shadow-yellow-300'>HTML</h3>
          <div className="w-full mb-5 max-w-md bg-gray-300 rounded-full h-8 shadow-lg overflow-hidden relative">
            <div
              className="h-full bg-gradient-to-r bg-[#7FFF00] to-purple-500 text-white text-sm font-bold flex items-center justify-center transition-all duration-500 ease-out"
              style={{ width: `${progress}%` }}
            >
              {progress}%
            </div>
          </div>
        </div>
        <div>
          <h3 className='pb-5 font-bold text-blue-300 [text-shadow:_0_2px_4px_blue]'>CSS</h3>
          <div className="w-full mb-5 max-w-md bg-gray-300 rounded-full h-8 shadow-lg overflow-hidden relative">
            <div
              className="h-full bg-gradient-to-r  bg-[#A0C800] to-purple-500 text-white text-sm font-bold flex items-center justify-center transition-all duration-500 ease-out"
              style={{ width: `${progress2}%` }}
            >
              {progress2}%
            </div>
          </div>
        </div>
        <div>
          <h3 className='pb-5 font-bold text-yellow-300 [text-shadow:_0_2px_4px_orange]'>Javascript</h3>
          <div className="w-full mb-5 max-w-md bg-gray-300 rounded-full h-8 shadow-lg overflow-hidden relative">
            <div
              className="h-full bg-gradient-to-r bg-[#C7A317] to-purple-500 text-white text-sm font-bold flex items-center justify-center transition-all duration-500 ease-out"
              style={{ width: `${progress3}%` }}
            >
              {progress3}%
            </div>
          </div>
        </div>
      </div>
      <div className='w-full'>
        <h2 className='text-xl text-center text-slate-200 pb-5 cursor-pointer'>
          <span className='tracking-wide hover:text-3xl'>L</span>
          <span className='tracking-wide hover:text-3xl'>a</span>
          <span className='tracking-wide hover:text-3xl'>ng</span>
          <span className='tracking-wide hover:text-3xl'>u</span>
          <span className='tracking-wide hover:text-3xl'>a</span>
          <span className='tracking-wide hover:text-3xl'>g</span>
          <span className='tracking-wide hover:text-3xl'>e</span>
          <span className='tracking-wide hover:text-3xl'>&nbsp;</span>
          <span className='tracking-wide hover:text-3xl'>S</span>
          <span className='tracking-wide hover:text-3xl'>k</span>
          <span className='tracking-wide hover:text-3xl'>i</span>
          <span className='tracking-wide hover:text-3xl'>l</span>
          <span className='tracking-wide hover:text-3xl'>l</span>
          <span className='tracking-wide hover:text-3xl'>s</span>
        </h2>
        <div>
          <h3 className='pb-5 font-bold text-blue-500 [text-shadow:_0_2px_4px_blue] shadow-yellow-300'>English</h3>
          <div className="w-full mb-5 max-w-md bg-gray-300 rounded-full h-8 shadow-lg overflow-hidden relative">
            <div
              className="h-full bg-gradient-to-r bg-[#FF8C00] to-purple-500 text-white text-sm font-bold flex items-center justify-center transition-all duration-500 ease-out"
              style={{ width: `${langprogress}%` }}
            >
              {langprogress}%
            </div>
          </div>
        </div>
        <div>
          <h3 className='pb-5 font-bold text-white [text-shadow:_0_2px_4px_slate]'>Russia</h3>
          <div className="w-full mb-5 max-w-md bg-gray-300 rounded-full h-8 shadow-lg overflow-hidden relative">
            <div
              className="h-full bg-gradient-to-r  bg-[#FF4500] to-purple-500 text-white text-sm font-bold flex items-center justify-center transition-all duration-500 ease-out"
              style={{ width: `${langprogress2}%` }}
            >
              {langprogress2}%
            </div>
          </div>
        </div>
        <div>
          <h3 className='pb-5 font-bold text-green-400 [text-shadow:_0_2px_4px_lightgreen]'>Uzbek</h3>
          <div className="w-full mb-5 max-w-md bg-gray-300 rounded-full h-8 shadow-lg overflow-hidden relative">
            <div
              className="h-full bg-gradient-to-r bg-[#7FFF00] to-purple-500 text-white text-sm font-bold flex items-center justify-center transition-all duration-500 ease-out"
              style={{ width: `${langprogress3}%` }}
            >
              {langprogress3}%
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills