import React from 'react'

const Footer = () => {
  return (
    <footer>

    <div className="social-links">

    <a className="social-icons" href="#"><i class="fa-brands fa-google"></i></a>
    <a className="social-icons" href="#"><i class="social-icon fa-brands fa-facebook-f"></i></a>
    <a className="social-icons" href="#"><i class="social-icon fa-brands fa-twitter"></i></a>
    <a className="social-icons" href="#"><i class="social-icon fa-brands fa-instagram"></i></a>


    {/* <div class="downloads col-lg-6">
          <button class="btn btn-dark btn-lg download-button" type="button"> <i class="fa-brands fa-apple"></i> Download</button> <br />
          <button class="btn btn-danger btn-lg download-button" type="button"> <i class="fa-brands fa-google-play"></i> Download</button>
    </div> */}

    <p className="copyright">© Copyright NarrowLinks 2022</p>

    </div>
    </footer>
  )
}

export default Footer