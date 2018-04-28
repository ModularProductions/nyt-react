import React from "react";

export const FormButton = props => (
  <button {...props} className="btn btn-success">
    {props.children}
  </button>
);
