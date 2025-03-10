import React from 'react'
import vid from '../../assets/imgs/vid1.mp4'
import '../Video/vid.css';



function Vid() {
  return (
    <div className="vid1-section">
    <video src={vid} autoPlay loop muted/>
  </div>
  )
}

export default Vid