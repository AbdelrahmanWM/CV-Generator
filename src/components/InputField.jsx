/* eslint-disable react/prop-types */
import "../styles/InputField.css";
import { useState } from "react";
export default function InputField({
  title,
  recommended = false,
  placeholder = "",
  required = false,
  setSectionTitle,
  size = "full",
  type = "input",
  setSectionValues,
  name
}) {
  const [inputValue, setInputValue] = useState("");
//   console.log("InputField Created");

  return (
    <div className={`InputField ${size}`}>
      <label>
        <p>
          {title}{" "}
          {recommended ||
            (required && <span>{required ? "required" : "recommended"}</span>)}
        </p>
        {type === "input" && (
          <input
            type="text"
            onChange={(e) => {
                // console.log("name"+e.name)
              setInputValue(e.target.value);
              if (setSectionTitle) setSectionTitle(e.target.value);
              setSectionValues(e);
            }}
            required={required ? true : false}
            placeholder={placeholder}
            value={inputValue}
            name={name}
          />
        )}
        {type === "textarea" && (
          <textarea
            onChange={(e) => {
              setInputValue(e.target.value);
              setSectionValues(e);
            }}
            required={required ? true : false}
            placeholder={placeholder}
            value={inputValue}
            name={name}
          />
        )}
      </label>
    </div>
  );
}
