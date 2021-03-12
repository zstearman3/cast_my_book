import React from "react"

const SearchBar = (props) => {
  const [input, setInput] = React.useState(null);
  const onFilter = props.onFilter;
  const items = props.items;
  const title = props.title;
  const handleInputChange = (search) => {
    const newInput = search.toLowerCase()
    setInput(newInput);
    let itemList = [];
    if (newInput) {
      itemList = items.filter(
        (member) => {
          return member.search_value.toLowerCase().indexOf(newInput) !== -1
        }
      )
    }
    onFilter(itemList);
  } 
  return (
    <div className="main-search">
      <input className="search-bar"
        placeholder={"Search " + title}
        onChange={() => handleInputChange(event.target.value)}
      />
    </div>
  );
}

export default SearchBar