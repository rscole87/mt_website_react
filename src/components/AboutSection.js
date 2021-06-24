import React from "react"
import { Link } from "react-router-dom"

function AboutSection() {
  return (
    <>
      <section id="about-section">
        <div className="wrapper">
          <div id="about-section-content">
            <div className="twoCol">
              <p className="body-copy">Marble Theory is a branding and design firm that helps companies put their best foot forward through refined design and stimulating visual creations. These creations build a unique brand experience for our clients which can be felt in all touch points.</p>

              <span className="accent-text">The look, the feel, the experience.</span>
            </div>

            <div className="twoCol">
              <h3>Collaborative Solutions to Creative Problems</h3>
              <Link to="/about-us">
                <button>About Us ></button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default AboutSection
