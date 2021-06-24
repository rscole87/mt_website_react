import React from "react"
import { Link } from "react-router-dom"

function Footer() {
  return (
    <>
      <footer>
        <div className="wrapper">
          <div className="footer-col">
            <h5 className="footer-heading">Contact</h5>
            <span className="footer-contact-info">Marble Theory Design, LLC</span>
            <span className="footer-contact-info">P.O. Box 12345 St.Petersburg, FL 33712</span>
            <span className="footer-contact-info bold-weight">727.555.5555</span>
          </div>

          <div className="footer-col">
            <h5 className="footer-heading">Info</h5>
            <ul id="footer-menu">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about-us">About Us</Link>
              </li>
              <li>
                <Link to="/team">Theorists</Link>
              </li>
              <li>
                <Link to="/projects">Projects</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h5 className="footer-heading">Social</h5>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
