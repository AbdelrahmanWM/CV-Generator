import html2pdf from 'html2pdf.js';

export default function downloadPDF(id){
    console.log("Downloading")
    const element=document.getElementById(id);
    html2pdf(element);
}