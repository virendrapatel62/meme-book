import React from "react";

export default function TextInput(props) {
  return (
    <div className="form-input">
      <label htmlFor="">{props.label}</label>
      <input type="text" name={props.name} placeholder={props.placeholder} />
    </div>
  );
}
