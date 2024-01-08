/* eslint-disable react/prop-types */
import { useState } from "react";
import "../styles/CategorySection.css";
import InputField from "./InputField";

export default function CategorySection({ inputFields, deleteSection ,setCategoryValues, id}) { 

    const names=inputFields.map(inputField => inputField.name);
    let sectionValues={};
    names.forEach(name => sectionValues[name]="");
  const [expanded, setExpanded] = useState(true);
  const [title, setTitle] = useState("");
  const [sectionInputValues,setSectionInputValues]=useState({});
//   console.log(sectionInputValues);
  function setSectionValues(e){
    let propertyName=e.target.name;
    let propertyValue=e.target.value;
    let obj={...sectionInputValues,[propertyName]:propertyValue,}
      setSectionInputValues((prev)=> ({...prev,[propertyName]:propertyValue,}));
      setCategoryValues(id,obj)
    //   console.log(id);
      

  }
  return (
    <div className={`CategorySection ${expanded ? "open" : ""}`}>
      {!expanded && <h4 onClick={() => setExpanded(true)}>{title}</h4>}
      <div className={expanded ? "" : "hidden"}>
        {inputFields.map((inputField, index) => (
          <InputField
            key={index}
            {...inputField}
            setSectionTitle={index == 0 ? setTitle : null}
            setSectionValues={setSectionValues}
          />
        ))}
        <div className="buttons">
          <button
            style={{ width: "100%" }}
            className="save"
            onClick={() => {
              setExpanded(false);
              setTitle(title === "" ? "Anonymous" : title);
            }}
          >
            save
          </button>
          {typeof deleteSection == "function" && <button
            style={{ width: "100%" }}
            className="delete"
            onClick={deleteSection}
          >
            delete
          </button>}
        </div>
      </div>
    </div>
  );
}
