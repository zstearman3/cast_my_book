import React from "react"

const SearchBar = (props) => {
  const [input, setInput] = React.useState(null);
  const [filteredItems, setFilteredItems] = React.useState(null);
  const items = props.items;
  const handleInputChange = (search) => {
    const newInput = search.toLowerCase()
    setInput(newInput);
    let itemList = items.filter(
      (member) => {
        return member.title.toLowerCase().indexOf(newInput) !== -1
      }
    )
    setFilteredItems(itemList);
  } 
  return (
    <div className="main-search">
      <input className="search-bar"
        placeholder={"Search Books"}
        onChange={() => handleInputChange(event.target.value)}
      />
    </div>
  );
}

export default SearchBar