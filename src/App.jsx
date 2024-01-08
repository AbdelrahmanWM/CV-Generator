import { useState } from 'react'
import './App.css'
import Category from './components/Category'

import HeaderSection from './components/HeaderSection'
import EducationSection from './components/EducationSection'
import SectionContainer from './components/SectionContainer'
import SectionTitle from './components/SectionTitle'
import CV from './components/CV'
import ExperienceSection from './components/ExperienceSection'
import Tools from './components/Tools'
import sampleData from './assets/sampleData'
function App() {
 const [container,setContainer]=useState(sampleData());
function setContainerValues(type,obj){
  setContainer((prev)=>({...prev,[type]:obj}))
}

console.log("App.js"+JSON.stringify(container))
const personalInfo=flattenObject(container['Personal']).shift();
const educationalInfo=flattenObject(container['Education']);
const experienceInfo=flattenObject(container['Experience']);
  return (
    <>
    
    <div className="grid">
      
      <div className="tools">  
      <h1 id="main">CV Generator</h1>
   
       <Tools setContainer={setContainer}/>
      <Category type="Personal" multiple={false} setContainerValues={setContainerValues}/><br />
      <Category type="Education" setContainerValues={setContainerValues}/><br />
      <Category type="Experience" setContainerValues={setContainerValues}/>
      <p id="copyright">copyright &copy;2023 Abdel-Rahman</p>
      </div>
      <div className='cv' >
        <div id="cv">
       <CV >
        
          <HeaderSection {...personalInfo}/>
          
          {educationalInfo.length>0 && <SectionContainer>
          <SectionTitle title="Education"/>
          { 
          educationalInfo.map((object,index) =><EducationSection key={index} {...object}/>)
          }
          </SectionContainer>
          }
           {experienceInfo.length>0 && <SectionContainer>
          <SectionTitle title="Experience"/>
          { 
          experienceInfo.map((object,index) =><ExperienceSection key={index} {...object}/>)
          }
          </SectionContainer>
          }
       </CV>
       </div>
      

      </div>
      </div>
      
    </>
  )
}

export default App

function flattenObject(obj){
  let result=[]
  for(let key in obj)
     if(typeof obj[key]==='object'&&obj[key]!==null){
      result.push(obj[key]);

     }
     return result;

}

