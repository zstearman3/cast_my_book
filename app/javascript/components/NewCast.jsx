import React from "react"
import RoleCreator from "./RoleCreator"

const NewCast = (props) => {
  const user = props.user;
  const book = props.book;
  const characters = props.characters;
  const actors = props.actors;
  const [cast, setCast] = React.useState([]);
  
  const handleUpdate = newRole => {
    if (newRole.actor === null) {
      return
    }
    let updatedCast = [...cast]
    updatedCast.push({
      actor_id: newRole.actor.id,
      character_id: newRole.character_id
    })
    setCast(updatedCast);
  }
  
  const handleSave = () => {
    if (user === null) {
      window.inProgressCast = cast;
    } else {
      delete window.inProgressCast;
      $.ajax({
        type: "POST",
        url: "/casts",
        data: {
          cast: {
            user_id: user.id,
            book_id: book.id,
          },
          roles: JSON.stringify(cast)
        }
      })
    }
  }
  
  return(
    <div className="page-container">
      <div className="cast-container col-md-8 offset-md-2">
        <div className="cast-header">
          <h1>{ book.title }</h1>
          <h3>By { book.author } </h3>
        </div>
        <div className="row">
          { characters.map((character, index) => {
            return(
              <RoleCreator
                key={character.name}
                character={character}
                actors={actors}
                handleCreate={handleUpdate}
              />
            )
          })}
        </div>
        <button className="save-button" onClick={handleSave}>Save</button>
      </div>
    </div>
  )
}

export default NewCast