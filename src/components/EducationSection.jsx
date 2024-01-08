
import "../styles/EducationSection.css";

export default function EducationSection({school,location,degree,startDate,endDate,description}){
    return (
        <div className="educationSection">
           
            <div className="info">
               <div className="first">
                <p>{startDate}{startDate && endDate && " - "}{endDate}</p>
                <p>{location}</p>
               </div>
               <div>
                <p><b>{school}</b></p>
                <p>{degree}</p>
                <p>{description}</p>
               </div>
            </div>
        </div>
    )
    }
    EducationSection.defaultProps={
        school:"",
        degree:"",
        startDate:"",
        endDate:"",
        description:"",
        location:""
    }