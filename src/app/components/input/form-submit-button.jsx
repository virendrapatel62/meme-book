import React from "react";

export default function FormSubmitButton(props) {
  return (
    <div className="form-input">
      <input type="submit" value={props.label} />
    </div>
  );
}
