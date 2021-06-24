import React from "react"

function Project(props) {
  return (
    <div id={props.id} className="project">
      <div className="overlay">
        <h3 className="project-title">{props.name}</h3>
        <p className="project-description">{props.description}</p>
      </div>
    </div>
  )
}

export default Project
