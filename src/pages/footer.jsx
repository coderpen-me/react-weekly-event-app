import React, { Component } from 'react';
import '../css/coderpen.css';

class Footers09 extends Component {
  render() {
    return <footer className="" style={{ "background-image": "url(./static/assets/header.png)" }}>
      <div className="container text-white">
        <div className="row align-items-top text-center">
          <div className="col-12 col-sm-6 col-md-4 col-lg-3 text-sm-left">
            <h3><strong>Company</strong></h3>
            <nav className="nav flex-column text-white">
              <a className="nav-link active text-white" href="">about us</a>
              <a className="nav-link text-white" href="">contact</a>
              <a className="nav-link text-white" href="">costs & billing</a>
            </nav>
          </div>

          <div className="col-12 col-sm-6 col-md-4 col-lg-3 mt-5 mt-sm-0 text-sm-left">
            <h3><strong>Help</strong></h3>
            <nav className="nav flex-column text-white">
              <a className="nav-link active text-white" href="">Privacy Policy</a>
              <a className="nav-link text-white" href="">how it works</a>
              <a className="nav-link text-white" href="">support</a>
              <a className="nav-link text-white" href="">trust & safety</a>
            </nav>
          </div>

          <div className="col-12 col-sm-6 col-md-4 col-lg-3 mt-5 mt-sm-0 text-sm-left">
            <h3><strong>Legalities</strong></h3>
            <nav className="nav flex-column text-white">
              <a className="nav-link active text-white" href="">privacy</a>
              <a className="nav-link text-white" href="">terms and conditions</a>
              <a className="nav-link text-white" href="">code of condust</a>
            </nav>
          </div>

          <div className="col-12 col-lg-3 text-lg-left mt-4 mt-lg-0">
            <h3><strong>Follow Us</strong></h3>
            <p className="lead">
              <a href="" className="mx-1"><img className="footer-icons" src="./static/assets/social_facebook.png" /></a>
              <a href="" className="mx-1"><img className="footer-icons" src="./static/assets/social_linkedin.png" /></a>
              <a href="" className="mx-1"><img className="footer-icons" src="./static/assets/social_twitter.png" /></a>
              <a href="" className="mx-1"><img className="footer-icons" src="./static/assets/social_youtube_default.png" /></a>
            </p>
          </div>
        </div>

        <div className="row mt-3">
          <div className="col text-center">
            © Conrati 2018. All Rights Reserved
      </div>
        </div>
      </div>
    </footer>

  }
}

export default Footers09