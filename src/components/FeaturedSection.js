import React from "react"
import { Link } from "react-router-dom"

function FeaturedSection() {
  return (
    <>
      <section id="featured-projects-section">
        <div className="wrapper">
          <div className="heading-div">
            <h3 className="heading-medium">Featured Projects</h3>
            <Link to="/projects">
              <button>See all work ></button>
            </Link>
          </div>
        </div>

        <div id="featured-projects-div">
          <div id="project-thumb1" className="project-thumb"></div>
          <div id="project-thumb2" className="project-thumb"></div>
          <div id="project-thumb3" className="project-thumb"></div>
          <div id="project-thumb4" className="project-thumb"></div>
          <div id="project-thumb5" className="project-thumb"></div>
          <div id="project-thumb6" className="project-thumb"></div>
        </div>
      </section>
    </>
  )
}

export default FeaturedSection
