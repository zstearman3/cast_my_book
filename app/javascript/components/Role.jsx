import React from "react"

const Role = (props) => {
  const role = props.role;
  return(
    <div className="role-container">
      <div className="character-container col-md-6">
        <h2>{role.character}</h2>
      </div>
      <div className="actor-container col-md-6">
        <h3>Played by {role.actor.name}</h3>
        <img className="role-image" src={role.actor.picture_url} />
      </div>
    </div>
  )
}

export default Role