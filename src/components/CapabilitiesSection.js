import React from "react"
import IllustratorIcon from "../images/icons/ai-icon.png"
import PhotoshopIcon from "../images/icons/ps-icon.png"
import IndesignIcon from "../images/icons/id-icon.png"
import XdIcon from "../images/icons/xd-icon.png"

function CapabilitiesSection() {
  return (
    <>
      <section id="capabilities-section">
        <div className="wrapper">
          <div className="heading-div">
            <h3 className="heading-medium">Creative Capabilities</h3>
          </div>

          <div id="capabilities-div">
            <div className="capability-item">
              <h3 className="capability-heading">Graphic Design</h3>
            </div>

            <div className="capability-item center-item">
              <h3 className="capability-heading">Brand Identity</h3>
            </div>

            <div className="capability-item">
              <h3 className="capability-heading">Websites & Social Media</h3>
            </div>
          </div>

          <div className="section-overlap-div">
            <div id="technologies-div">
              <h3>Our team is proficient with...</h3>

              <div id="tools-div">
                <img src={IllustratorIcon} className="tools-icon" alt="Adobe Illustrator" />
                <img src={PhotoshopIcon} className="tools-icon" alt="Adobe Photoshop" />
                <img src={IndesignIcon} className="tools-icon" alt="Adobe InDesign" />
                <img src={XdIcon} className="tools-icon" alt="Adobe XD" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default CapabilitiesSection
