import { useState } from "react";
import "../styles/Category.css";
import CategorySection from "./CategorySection";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";
import data from "../data/CategoryData.js";
let counter=1;
// eslint-disable-next-line react/prop-types
export default function Cotegory({ type, multiple = true ,setContainerValues}) {
    const [sectionTitle, setSectionTitle] = useState("");
  const [expanded, setExpanded] = useState(false);
//   const [childrenCounter,setChildrenCounter]=useState(0);
  const [children, setChildren] = useState([ 
  !multiple?<CategorySection
    key={counter++}
    id={counter++}
    inputFields={data[type]}
    title={sectionTitle}
    deleteSection={multiple?deleteSection:null}
    // setSectionValues={setSectionValues}
    setCategoryValues={setCategoryValues}
  />:null
]);
  const names=data[type].map(inputField => inputField.name);
  let sectionValues={};
  names.forEach(name => sectionValues[name]="");
const [categoryInputValues,setCategoryInputValues]=useState({})

function setCategoryValues(id,obj){
  let doubleObj={...categoryInputValues,[id]:obj}
  setCategoryInputValues((prev)=> ({...prev,[id]:obj}));
  setContainerValues(type,doubleObj);
}
// console.log("From App.js")
// console.log("Category Created: "+JSON.stringify(categoryInputValues));
function deleteSection(e) {
    setChildren(children.filter((child) => child.title != e.target.title));
  }


  return (
    <div className={`Category ${expanded ? "open" : ""}`}>
      <div className="description">
        <h3>{type}</h3>
        <button onClick={() => setExpanded(!expanded)}>
          <ExpandMoreOutlinedIcon fontSize="large" />
        </button>
      </div>
      <div className={`Category-Sections ${expanded ? "" : "hidden"}`}>
        {children}
        
     
        {
        multiple &&
         (
          <button
            className="addChildren"
            onClick={() =>{
              
              
              setChildren([
                ...children,
                <CategorySection
                  key={counter++}
                  id={counter++}
                  inputFields={data[type]}
                  title={sectionTitle}
                  deleteSection={deleteSection}
                //   setSectionValues={setSectionValues}
                setCategoryValues={setCategoryValues}
                />,
              ]);
            
            }
            }
          >
            +
          </button>
        )}
      </div>
    </div>
  );
}
