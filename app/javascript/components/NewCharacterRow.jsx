import React from "react"
import Dropdown from "./common/Dropdown"

const NewCharacterRow = (props) => {
  const callback = props.callback;
  const [newCharacter, setNewCharacter] = React.useState({"name": ""});
  
  const updateCharacter = (field, value) => {
    let updatedCharacter = Object.assign(newCharacter)
    updatedCharacter[field] = value
    setNewCharacter(updatedCharacter)
  }
  
  const addCharacter = () => {
    callback(newCharacter)
    setNewCharacter({"name": ""})
    $(".character-input").val("")
  }
  
  return(
    <tr>
      <td><input 
        className="character-input"
        onChange={() => updateCharacter("name", event.target.value)}/>
      </td>
      <td><Dropdown 
        field="role"
        extraClasses="character-input"
        options={["Main Character", "Supporting Character", "Minor Character"]}
        onChange={updateCharacter}/>
      </td>
      <td><Dropdown 
        field="gender"
        extraClasses="character-input"
        options={["Male", "Female"]}
        onChange={updateCharacter}/>
      </td>
      <td><Dropdown 
        field="age"
        extraClasses="character-input"
        options={["Child", "Teen", "Young Adult", "Middle Aged", "Old Adult"]}
        onChange={updateCharacter}/>
      </td>
      <td><Dropdown 
        field="skin_color"
        extraClasses="character-input"
        options={["Light", "Medium", "Dark"]}
        onChange={updateCharacter}/>
      </td>
      <td><Dropdown 
        field="personality_type"
        extraClasses="character-input"
        options={["Funny", "Heroic", "Dramatic", "Evil"]}
        onChange={updateCharacter}/>
      </td>
      <td><button onClick={addCharacter}>Add</button></td>
    </tr>
  )
}

export default NewCharacterRow