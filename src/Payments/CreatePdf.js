import {PDFDocument, StandardFonts, rgb} from 'pdf-lib';

class CreatePdf {
    // Variables
    CompanyName;
    page;
    height;
    width;
    font;
    pdfDoc;
    heightData;
    // Predefined types of data
    SmallFont;
    BigFont;
    HeaderFont;
    ProductNumber;
    constructor(CompanyName){
        this.CompanyName = CompanyName;
        this.CreatePdf()
    }

    // Create pdf file
    async CreatePdf() {
        this.pdfDoc = await PDFDocument.create();

        this.font = await this.pdfDoc.embedFont(StandardFonts.TimesRoman)

        this.page = this.pdfDoc.addPage()
        const { width, height } = this.page.getSize()
        this.height = height;
        this.width = width;
        
        this.SmallFont = 10
        this.BigFont = 13
        this.HeaderFont = 15
        this.ProductNumber = 0

        this.ListenForText()
        this.ListenForimage()
        this.heightData = {
            // Logo
            Logo: {x: 40, y: this.height - 70, width: 52, height: 27},

            // Seller data
            Seller: {x: 40, y: this.height - 100, size: this.HeaderFont, font: this.font},
            SellingCompanyName: {x: 40, y: this.height - 125, size: this.BigFont, font: this.font},
            SellingCompanyCity: {x: 40, y: this.height - 140, size: this.BigFont, font: this.font},
            SellingCompanyStreet: {x: 40, y: this.height - 155, size: this.BigFont, font: this.font},
            SellingCompanyPostCode: {x: 40, y: this.height - 170, size: this.BigFont, font: this.font},
            SellingCompanyNIP: {x: 40, y: this.height - 185, size: this.BigFont, font: this.font},

            SellerSignature1: {x: 40, y: 45, size: this.SmallFont, font: this.font},
            SellerSignature2: {x: 70, y: 35, size: this.SmallFont, font: this.font},
            SellerSignature3: {x: 38, y: 55, width: 100, height: 0.5, color: rgb(0.1, 0.1, 0.1), borderWidth: 0.5},

            InvoiceNumber: {x: this.width - 150, y: this.height - 40, size: this.SmallFont, font: this.font},
            InvoiceSellData: {x: this.width - 150, y: this.height - 50, size: this.SmallFont, font: this.font},
            InvoicePaymentData: {x: this.width - 150, y: this.height - 60, size: this.SmallFont, font: this.font},
            InvoicePaymentType: {x: this.width - 150, y: this.height - 70, size: this.SmallFont, font: this.font},

            InvoiceSubmit: {x: 40, y: this.height - 490, size: this.HeaderFont, font: this.font},

            // Buyer data
            Buyer: {x: this.width - 150, y: this.height - 100, size: this.HeaderFont, font: this.font},
            BuyingCompanyName: {x: this.width - 150, y: this.height - 125, size: this.BigFont, font: this.font},
            BuyingCompanyCity: {x: this.width - 150, y: this.height - 140, size: this.BigFont, font: this.font},
            BuyingCompanyStreet: {x: this.width - 150, y: this.height - 155, size: this.BigFont, font: this.font},
            BuyingCompanyPostCode: {x: this.width - 150, y: this.height - 170, size: this.BigFont, font: this.font},
            BuyingCompanyNIP: {x: this.width - 150, y: this.height - 185, size: this.BigFont, font: this.font},

            // Draw external lines
            ItemsFirstSqr: {x: 40, y: this.height - 230, width: this.width - 80, height: - 30, color: rgb(0.1, 0.1, 0.1), borderWidth: 0.5},
            ItemsSecSqr: {x: 40, y: this.height - 260, width: this.width - 80, height: - 30, color: rgb(0.1, 0.1, 0.1), borderWidth: 0.5},

            ItemsThirdSqr: {x: this.width - 40, y: this.height - 350, width: - 140, height: - 50, color: rgb(0.1, 0.1, 0.1), borderWidth: 0.5},
            ItemsFourthSqr: {x: this.width - 40, y: this.height - 350, width: - 140, height: - 25, color: rgb(0.1, 0.1, 0.1), borderWidth: 0.5},

            // Draw internal lines
            ItemsFirstLine: {x: 40, y: this.height - 230, width: 20, height: - 60, color: rgb(0.1, 0.1, 0.1), borderWidth: 0.5},
            ItemsSecondLine: {x: 40, y: this.height - 230, width: 350, height: - 60, color: rgb(0.1, 0.1, 0.1), borderWidth: 0.5},
            ItemsThirdLine: {x: 40, y: this.height - 230, width: 390, height: - 60, color: rgb(0.1, 0.1, 0.1), borderWidth: 0.5},
            ItemsFourthLine: {x: 40, y: this.height - 230, width: 432, height: - 60, color: rgb(0.1, 0.1, 0.1), borderWidth: 0.5},
            ItemsFifthLine: {x: 40, y: this.height - 230, width: 470, height: - 60, color: rgb(0.1, 0.1, 0.1), borderWidth: 0.5},

            ItemsSixthLine: {x: this.width - 40, y: this.height - 350, width: - 35, height: - 50, color: rgb(0.1, 0.1, 0.1), borderWidth: 0.5},
            ItemsSeventhLine: {x: this.width - 40, y: this.height - 350, width: - 70, height: - 50, color: rgb(0.1, 0.1, 0.1), borderWidth: 0.5},
            ItemsEighthLine: {x: this.width - 40, y: this.height - 350, width: - 105, height: - 50, color: rgb(0.1, 0.1, 0.1), borderWidth: 0.5},

            // Vat related data
            VatFirstInto: {x: this.width - 173, y: this.height - 365, size: this.SmallFont, font: this.font},
            VatSecInto: {x: this.width - 142, y: this.height - 365, size: this.SmallFont, font: this.font},
            VatThird1Into: {x: this.width - 105, y: this.height - 361, size: this.SmallFont, font: this.font},
            VatThird2Into: {x: this.width - 103, y: this.height - 370, size: this.SmallFont, font: this.font},
            VatFourthInto: {x: this.width - 71, y: this.height - 365, size: this.SmallFont, font: this.font},

            VatFirstData: {x: this.width - 170, y: this.height - 390, size: this.SmallFont, font: this.font},
            VatSecData: {x: this.width - 132, y: this.height - 390, size: this.SmallFont, font: this.font},
            VatThirdData: {x: this.width - 97, y: this.height - 390, size: this.SmallFont, font: this.font},
            VatFourthData: {x: this.width - 67, y: this.height - 390, size: this.SmallFont, font: this.font},

            // Type of data
            ItemOneCategory: {x: 43, y: this.height - 250, size: this.SmallFont, font: this.font},
            ItemTwoCategory: {x: 65, y: this.height - 250, size: this.SmallFont, font: this.font},
            ItemThirdCategory: {x: 400, y: this.height - 250, size: this.SmallFont, font: this.font},
            ItemFourthCategory: {x: 440, y: this.height - 243, size: this.SmallFont, font: this.font},
            ItemFourth2Category: {x: 440, y: this.height - 253, size: this.SmallFont, font: this.font},
            ItemFifthCategory: {x: 480, y: this.height - 249, size: this.SmallFont, font: this.font},
            ItemSixthCategory: {x: 515, y: this.height - 243, size: this.SmallFont, font: this.font},
            ItemSeventhCategory: {x: 515, y: this.height - 253, size: this.SmallFont, font: this.font},

            // Amount of data
            ItemOneData: {x: 43, y: this.height - 280, size: this.SmallFont, font: this.font},
            ItemTwoData: {x: 65, y: this.height - 280, size: this.SmallFont, font: this.font},
            ItemThirdData: {x: 400, y: this.height - 280, size: this.SmallFont, font: this.font},
            ItemFourthData: {x: 440, y: this.height - 280, size: this.SmallFont, font: this.font},
            ItemFifthData: {x: 480, y: this.height - 280, size: this.SmallFont, font: this.font},
            ItemSixthData: {x: 515, y: this.height - 280, size: this.SmallFont, font: this.font},
        }
    }

    // Listen for text input
    ListenForText = () => {

        const Draw = (data, type) => {
            this.DrawText(data, type)
        }

        const LP = () => {
            this.ProductNumber ++
        }

        document.querySelector('.text').addEventListener('submit', function(e) {
            e.preventDefault()

            for(let x = 0; x < this.length - 1; x++){
                Draw(this[x].value, this[x].id.trim())
                this[x].value = '';
            }
        })

        document.querySelector('.product').addEventListener('submit', function(e) {
            e.preventDefault()

            let data = []

            for(let x = 0; x < this.length - 1; x++){
                data.push(this[x].value)
                this[x].value = '';
            }
            Draw(data, "product")
            LP()
        })


    }

    // Draw text
    DrawText = async (data, type) => {

        if(type !== "SellingCompanyNIP" && type !== "BuyingCompanyNIP") {
            this.page.drawText(data, {
                x: this.heightData[type].x,
                y: this.heightData[type].y,
                size: this.heightData[type].size,
                font: this.heightData[type].font
            })
        } else {
            this.page.drawText("NIP: " + data, {
                x: this.heightData[type].x,
                y: this.heightData[type].y,
                size: this.heightData[type].size,
                font: this.heightData[type].font
            })
        }
    }

    // Listen for image input
    ListenForimage = () => {

        const Draw = (Img) => {
            this.DrawImage(Img)
        }

        const FetchImage = async (data) => {
            const Bytes = await fetch(data).then((res) => res.arrayBuffer());
            const Img = await this.pdfDoc.embedPng(Bytes);
            Draw(Img)
        }

        document.querySelector('.picture').addEventListener('change', function() {
            console.log(this.files)
            if(this.files[0] !== undefined){
                if(this.files[0].type !== 'image/png' &&this.files[0].type !== 'image/jpeg' && this.files[0].type !== 'image/jpg'){
                    alert("Seems like you are trying to upload image which is not jpeg/jpg/png. Make sure that you upload file with correct format")
                } else {
                    FetchImage(URL.createObjectURL(this.files[0]))
                }
            }
        })
    }

    // Draw image
    DrawImage = async (Img) => {
        this.page.drawImage(Img, {
            x: this.heightData.Logo.x,
            y: this.heightData.Logo.y,
            width: this.heightData.Logo.width,
            height: this.heightData.Logo.height,
        })
    }

    // Draw lines
    DrawLine = async (type) => {

        this.page.drawRectangle({
            x: this.heightData[type].x,
            y: this.heightData[type].y,
            width: this.heightData[type].width,
            height: this.heightData[type].height,
            borderColor: this.heightData[type].color,
            borderWidth: this.heightData[type].borderWidth,
        })
    }

    // Submit and create page
    Submit = async () => {
        // Data
        document.querySelector(".InvoiceDataActive").classList.toggle("InvoiceDataInactive")
        document.querySelector(".InvoiceDataActive").classList.toggle("InvoiceDataActive")

        // Iframe
        document.querySelector(".IframeInactive").classList.toggle("IframeActive")
        document.querySelector(".IframeInactive").classList.toggle("IframeInactive")

        // Pre Input
        this.DrawText("Sprzedawca:", "Seller")
        this.DrawText("Nabywca:", "Buyer")

        this.DrawText("Capri", "SellingCompanyName")
        this.DrawText("Debno Polskie", "SellingCompanyCity")
        this.DrawText("Krucza 8", "SellingCompanyStreet")
        this.DrawText("63-900 Rawicz", "SellingCompanyPostCode")
        this.DrawText("699 116 44 43", "SellingCompanyNIP")

        this.DrawText("Faktura VAT numer 11", "InvoiceNumber")
        this.DrawText("Data wystawnienia: 30.12.2020", "InvoiceSellData")
        this.DrawText("Termin zaplaty: 30.03.2021", "InvoicePaymentData")
        this.DrawText("Sposob zaplaty: Przelew", "InvoicePaymentType")

        // Lines
        this.DrawLine("ItemsFirstSqr");
        this.DrawLine("ItemsSecSqr");

        // Items related data
        this.DrawLine("ItemsFirstLine");
        this.DrawLine("ItemsSecondLine");
        this.DrawLine("ItemsThirdLine");
        this.DrawLine("ItemsFourthLine");
        this.DrawLine("ItemsFifthLine");

        // Vat related data
        this.DrawLine("ItemsThirdSqr");
        this.DrawLine("ItemsFourthSqr");

        this.DrawLine("ItemsSixthLine");
        this.DrawLine("ItemsSeventhLine");
        this.DrawLine("ItemsEighthLine");

        this.DrawText("Netto", "VatFirstInto");
        this.DrawText("Stawka", "VatSecInto");
        this.DrawText("Kwota", "VatThird1Into");
        this.DrawText("VAT", "VatThird2Into");
        this.DrawText("Brutto", "VatFourthInto");

        // Predefined data
        this.DrawText("LP", "ItemOneCategory");
        this.DrawText("Nazwa produktu", "ItemTwoCategory");
        this.DrawText("Ilosc", "ItemThirdCategory");
        this.DrawText("Cena", "ItemFourthCategory");
        this.DrawText("brutto", "ItemFourth2Category");
        this.DrawText("VAT", "ItemFifthCategory");
        this.DrawText("Wartosc ", "ItemSixthCategory");
        this.DrawText("brutto ", "ItemSeventhCategory");

        // Signatures
        this.DrawText("Podpis wystawiajacego", "SellerSignature1");
        this.DrawText("fakture", "SellerSignature2");
        this.DrawLine("SellerSignature3");
        document.getElementById('pdf').src = await this.pdfDoc.saveAsBase64({dataUri: true})
    }

}

export {
    CreatePdf
}