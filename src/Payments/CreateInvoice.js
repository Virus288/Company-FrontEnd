import React from 'react';
import { CreatePdf } from "./CreatePdf";

export default class CreateInvoice extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    // ListenForimage = () => {
    //     document.querySelector('.image').addEventListener('change', function() {
    //         console.log(this.files[0])
    //         if(this.files[0].type !== 'image/png' &&this.files[0].type !== 'image/jpeg' && this.files[0].type !== 'image/jpg'){
    //             alert("Seems like you are trying to upload image which is not jpeg/jpg/png. Make sure that you upload file with correct format")
    //         } else {
    //             console.log(URL.createObjectURL(this.files[0]))
    //         }
    //     })
    // }
    //
    // ListenForText = () => {
    //     document.querySelector('.text').addEventListener('submit', function(e) {
    //         e.preventDefault()
    //
    //         createPdf(this[0].value)
    //     })
    // }
    //
    // async createPdf(data) {
    //     if(data){
    //         DrawText(data)
    //     }
    //     const pdfDoc = await PDFDocument.create();
    //     const timesRomanFont = await pdfDoc.embedFont(StandardFonts.TimesRoman)
    //
    //     const page = pdfDoc.addPage()
    //     const { width, height } = page.getSize()
    //     const fontSize = 30
    //
    //     const DrawText = () => {
    //         page.drawText(data, {
    //             x: 50,
    //             y: height - 40,
    //             size: fontSize,
    //             font: timesRomanFont
    //         })
    //     }
    //
    //     document.getElementById('pdf').src = await pdfDoc.saveAsBase64({dataUri: true});
    // }
    //
    componentDidMount() {
        // this.ListenForimage()
        // this.createPdf()
        // this.ListenForText()
    }

    render(){

        const Pdf = new CreatePdf("Capri");

        return (
            <div className="invoice">
                <h1>Create invoice</h1>
                <form className="text">
                    <label htmlFor="text">Add text</label>
                    <input type="text" name="text" className="text"/>
                    <input type="submit"/>
                </form>

                <form>
                    <label htmlFor="image">Add image</label>
                    <input type="file" name="image" className="image"/>
                </form>

                <iframe id="pdf" style={{width: "100%", height: "70vh"}}> </iframe>
            </div>
        )
    }
}