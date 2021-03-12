import React from "react"
import SearchBar from "./common/SearchBar"
import Role from "./Role"

const RoleCreator = (props) => {
  const character = props.character;
  const actors = props.actors;
  const [filteredActors, setFilteredActors] = React.useState([]);
  const [role, setRole] = React.useState(
    { 
      character: character.name,
      actor: null 
    });
    
  const setActor = (actor) => {
    setRole(role => {
      return {...role, actor: actor}
    });
  }
  
  if (role.actor == null) {
    return(
      <div className="new-role-container">
        <p>{character.name}</p>
        <SearchBar
          title="Actors"
          items={actors}
          onFilter={setFilteredActors}
        />
        <div className="search-results">
          { filteredActors.slice(0, 10).map((actor, index) => {
            return(
              <div className="row" key={index + actor.name}>
                <button
                   onClick={() => setActor(actor)} 
                   className="search-result"
                >
                  {actor.name}
                </button>
              </div>
            )
          })}
        </div>
      </div>
    )
  } else {
    return (
      <Role 
        role={role}
      />
    )
  }
}

export default RoleCreator