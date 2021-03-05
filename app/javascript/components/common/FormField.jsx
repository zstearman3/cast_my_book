import React from "react"

const FormField = (props) => {
  const title = props.title;
  const callback = props.callback;
  
  return(
    <div className="field-container">
      <input className={"form-control"}
             id={title.toLowerCase() + "-field"}
             placeholder={title}
             onChange={() => callback(event.target.value)}
      />
    </div>
  );
}

export default FormField