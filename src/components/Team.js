import React from "react"
import KaitHeadshot from "../images/kait.jpg"
import KaraHeadshot from "../images/kara.jpeg"
import RodrickHeadshot from "../images/rodrick.jpeg"

function Team() {
  return (
    <>
      <div className="wrapper">
        <h1 className="page-heading">Our Theorists</h1>

        <div id="team-members-div">
          <div className="team-member">
            <img src={KaitHeadshot} alt="kaitlyn" className="portrait" />
            <h4 className="name">Kaitlyn Messinio</h4>
            <p className="bio">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>

          <div className="team-member">
            <img src={KaraHeadshot} alt="kara" className="portrait" />
            <h4 className="name">Kara Pelley</h4>
            <p className="bio">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>

          <div className="team-member">
            <img src={RodrickHeadshot} alt="rodrick" className="portrait" />
            <h4 className="name">Rodrick Coleman</h4>
            <p className="bio">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Team
