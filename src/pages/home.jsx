import React from 'react'
import Main from '../components/main';
import Skills from '../components/skills';
import Project from '../components/portfolio';
import Contact from '../components/contact';

function Home() {
 
  return (
    <div>
      {/* Main */}
      <Main/>

      {/* Skills */}
      <Skills/>

      {/* Projects */}
      <Project/>

      {/* Contact */}
      <Contact/>
    </div>  
  )
}

export default Home