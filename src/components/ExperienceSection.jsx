
import "../styles/EducationSection.css";

export default function ExperienceSection({company,positionTitle,startDate,endDate,description,location}){
    return (
        <div className="educationSection">
           
            <div className="info">
               <div className="first">
                <p>{startDate}{startDate && endDate && " - "}{endDate}</p>
                <p>{location}</p>
               </div>
               <div>
                <p><b>{company}</b></p>
                <p>{positionTitle}</p>
                <p>{description}</p>
               </div>
            </div>
        </div>
    )
    }
    ExperienceSection.defaultProps={
        company:"",
        positionTitle:"",
        startDate:"",
        endDate:"",
        description:"",
        location:""
    }