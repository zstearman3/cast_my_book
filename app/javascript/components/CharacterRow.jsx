import React from "react"

const CharacterRow = (props) => {
  const character = props.character;
  
  return (
    <tr key={character.name}>
      <td>{character.name}</td>
      <td>{character.role}</td>
      <td>{character.gender}</td>
      <td>{character.age_range}</td>
      <td>{character.skin_color}</td>
      <td>{character.hair_color}</td>
      <td>{character.body_type}</td>
      <td>{character.personality_type}</td>
      <td><button>Remove</button></td>
    </tr>
  );
}

export default CharacterRow