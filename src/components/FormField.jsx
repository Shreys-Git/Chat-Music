import React from "react";
import "../styles/stylesheets.css";
const FormField = ({
  labelName,
  type,
  name,
  placeholder,
  value,
  handleChange,
}) => (
  <div>
    <div>
      <label htmlFor={name}>{labelName}</label>
    </div>
    <input
      type={type}
      id={name}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
      className="prompt"
      required
    />
  </div>
);

export default FormField;
