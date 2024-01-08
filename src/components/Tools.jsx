import downloadPDF from '../assets/downloadPDF'
import sampleData from '../assets/sampleData'
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import PostAddIcon from '@mui/icons-material/PostAdd';
import '../styles/Tools.css'

export default function Tools({setContainer}){
    return (
        <div id = 'buttons'>
           <button className="download" onClick={()=>downloadPDF('cv')}><PictureAsPdfIcon/><span>Download</span> </button>
           <button className="clear" onClick={()=>{setContainer({})}}><DeleteForeverIcon/><span>Clear Resume</span></button>
           <button className="load" onClick={()=>{setContainer(sampleData())}}><PostAddIcon/><span>Load Example</span></button>
        </div>
    )
}