import React from 'react'
import Hero from './Hero'
import Projects from '../Work/Projects'


function Homepage() {
  return (
    <div>
        <Hero></Hero>
        <Projects></Projects>
        <div style={{ marginBottom: '10rem' }}></div>
        {/* <hr style={{ border: '1px solid #ffffff', margin: '1rem 15rem' }} /> */}
    </div>
  )
}

export default Homepage