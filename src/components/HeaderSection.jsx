import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';import { FaLinkedin } from "react-icons/fa";
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import '../styles/HeaderSection.css'
export default function HeaderSection({firstName,lastName,email,phoneNumber,address,linkedIn}){
return (
    <header>
        <h1>{`${firstName} ${lastName}`}</h1>
        <div className="info">
            {email && <span><EmailOutlinedIcon/>{email}</span>}
            {phoneNumber &&<span><LocalPhoneOutlinedIcon/>{phoneNumber}</span>}
            {address &&<span><HomeOutlinedIcon/>{address}</span>}
            {linkedIn&&<span><FaLinkedin/><a href={`${linkedIn}`}>LinkedIn</a></span>}
        </div>
    </header>
)
}
HeaderSection.defaultProps={
    firstName:"",
    lastName:"",
    email:"",
    phoneNumber:"",
    address:"",
    linkedIn:""
}