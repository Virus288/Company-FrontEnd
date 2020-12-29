import {PDFDocument, StandardFonts} from 'pdf-lib'

class CreatePdf {
    page;
    height;
    width;
    timesRomanFont;
    fontSize;
    pdfDoc;
    constructor(CompanyName){
        this.CompanyName = CompanyName;
        this.CreatePdf();
    }

    async CreatePdf() {
        this.pdfDoc = await PDFDocument.create();
        this.timesRomanFont = await this.pdfDoc.embedFont(StandardFonts.TimesRoman)

        this.page = this.pdfDoc.addPage()
        const { width, height } = this.page.getSize()
        this.height = height;
        this.width = width;
        document.getElementById('pdf').src = await this.pdfDoc.saveAsBase64({dataUri: true});
        this.ListenForText()
    }

    ListenForText = () => {
        const Draw = (data) => {
            this.DrawText(data)
        }

        document.querySelector('.text').addEventListener('submit', function(e) {
            e.preventDefault()
            console.log("Listen for text");

            Draw(this[0].value)
        })
    }
    pdfDoc;

    DrawText = async (data) => {
        console.log(data)
        this.page.drawText(data, {
            x: 50,
            y: 100,
            size: 15,
            font: this.timesRomanFont
        })
        document.getElementById('pdf').src = await this.pdfDoc.saveAsBase64({dataUri: true});
    }

}

export {
    CreatePdf
}