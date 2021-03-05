import React from "react"

const CharacterRow = (props) => {
  const character = props.character;
  
  return (
    <tr key={character.name}>
      <td>{character.name}</td>
      <td>{character.role}</td>
      <td>{character.gender}</td>
      <td>{character.age}</td>
      <td>{character.skin_color}</td>
      <td>{character.personality_type}</td>
    </tr>
  );
}

export default CharacterRow