import React from "react"
import Logo from "../images/MT-logo-02.png"

function IntroSection() {
  return (
    <>
      <section id="intro-section">
        <div className="wrapper">
          {/* <h1 id="intro-text">
            We are <span className="bold-weight">Marble Theory</span>...
          </h1> */}
          <img src={Logo} id="intro-logo" alt="Marble Theory Design" />
        </div>
      </section>
    </>
  )
}

export default IntroSection
