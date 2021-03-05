import React from "react"
import FormField from "./common/FormField"

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
        }
      }
    })
  }
  
  const addCharacter = () => {
    let current_characters = [...characters]
    current_characters.push({name: "Harry Potter"})
    setCharacters(current_characters)
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
              <th>Personality</th>
            </tr>
          </thead>
          <tbody>
            { characters.map((character, index) => {
              return(
                <tr>
                  <td>{character.name}</td>
                </tr>
              )
            })}
            <tr className="new-character-row">
              <td><input placeholder="Name"/></td>
              <td><button onClick={addCharacter}>Add</button></td>
            </tr>
          </tbody>
        </table>
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
}

export default NewBook