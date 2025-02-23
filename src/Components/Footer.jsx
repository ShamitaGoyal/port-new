import React from 'react'
import '../Components/footer.css'

function Footer() {
  return (
  <div id="footer-section">
    <div class="date"><h4>122024</h4></div>
    <a href="https://github.com/ShamitaGoyal" target="_blank"><div class="elem"><h4>Github</h4></div></a>
    {/* <a href="https://drive.google.com/file/d/1DK4iLaLvz47Ff2bADmGqbyBJegi0MPIN/view?usp=sharing" target="_blank"><div class="elem"><h4>Resume</h4></div></a> */}
    <a href="https://mail.google.com/mail/?view=cm&fs=1&to=goyal.shamita4@gmail.com" target="_blank"><div class="elem"><h4>Contact Me</h4></div></a>
    <a href="https://www.linkedin.com/in/shamita-goyal-46323b250/" target="_blank"><div class="elem"><h4>LinkedIn</h4></div></a>
</div>
  )
}

export default Footer