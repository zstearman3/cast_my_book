import React from "react"
import FormField from "./common/FormField"
import CharacterRow from "./CharacterRow"
import NewCharacterRow from "./NewCharacterRow"

const NewBook = (props) => {
  const [author, setAuthor] = React.useState(null);
  const [title, setTitle] = React.useState(null);
  const [characters, setCharacters] = React.useState([]);
  
  const handleSubmit = () => {
    $.ajax({
      type: "POST",
      url: "/books",
      data: {
        book: {
          author: author,
          title: title
        },
        characters: JSON.stringify(characters)
      }
    })
  }
  
  const addCharacter = (newCharacter) => {
    let currentCharacters = [...characters, newCharacter]
    setCharacters(currentCharacters)
  }
  
  return(
    <div className="page-container">
      <div className="form-container">
        <h1>Create a book</h1>
        <FormField
          title="Title"
          callback={setTitle}
        />
        <FormField
          title="Author"
          callback={setAuthor}
        />
        <h3>Characters</h3>
        <table className="characters-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Role</th>
              <th>Gender</th>
              <th>Age</th>
              <th>Skin Color</th>
              <th>Hair Color</th>
              <th>Body Type</th>
              <th>Personality</th>
            </tr>
          </thead>
          <tbody>
            { characters.map((character, index) => {
              return(
                <CharacterRow character={character} key={index}/>
              )
            })}
            <NewCharacterRow callback={addCharacter} />
          </tbody>
        </table>
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
}

export default NewBook