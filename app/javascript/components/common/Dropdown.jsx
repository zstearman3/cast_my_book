import React from "react"

const Dropdown = (props) => {
  const extraClasses = props.extraClasses;
  const field = props.field;
  const options = props.options;
  const onChange = props.onChange;
  return(
    <select className={extraClasses} name={field} 
            onChange={() => onChange(field, event.target.value)}>
      <option></option>
      { options.map((option, index) => {
        return(
          <option value={option}>{option}</option>
        )
      })}
    </select>
  );
}

export default Dropdown