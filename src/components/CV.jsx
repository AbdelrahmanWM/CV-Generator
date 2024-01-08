import '../styles/CV.css'
export default function CV({children}){
    const childrenArray=[...children];
    return(
        <div className="CV">
            {childrenArray.shift()}
        <div className="content">
        {
            childrenArray
         }
        </div>
        </div>
    )
}