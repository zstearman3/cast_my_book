import React from "react"
import RoleCreator from "./RoleCreator"

const NewCast = (props) => {
  const book = props.book;
  const characters = props.characters;
  const actors = props.actors;
  
  return(
    <div className="page-container">
      <div className="cast-header">
        <h1>{ book.title }</h1>
        <h3>By { book.author } </h3>
        { characters.map((character, index) => {
          return(
            <RoleCreator
              key={character.name}
              character={character}
              actors={actors}
            />
          )
        })}
      </div>
    </div>
  )
}

export default NewCast