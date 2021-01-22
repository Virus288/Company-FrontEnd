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
    amounts = [];
    prices = [];
    vats = [];
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
            SellerSignature3: {x: 38, y: 55, width: 100, height: 0.5, color: rgb(0.1, 0.1, 0.1), borderWidth: 0.5},

            // Buyer data
            Buyer: {x: this.width - 150, y: this.height - 100, size: this.HeaderFont, font: this.font},
            BuyingCompanyName: {x: this.width - 150, y: this.height - 125, size: this.BigFont, font: this.font},
            BuyingCompanyCity: {x: this.width - 150, y: this.height - 140, size: this.BigFont, font: this.font},
            BuyingCompanyStreet: {x: this.width - 150, y: this.height - 155, size: this.BigFont, font: this.font},
            BuyingCompanyPostCode: {x: this.width - 150, y: this.height - 170, size: this.BigFont, font: this.font},
            BuyingCompanyNIP: {x: this.width - 150, y: this.height - 185, size: this.BigFont, font: this.font},

            // Invoice number
            InvoiceNumber: {x: this.width - 150, y: this.height - 40, size: this.SmallFont, font: this.font},
            InvoiceSellData: {x: this.width - 150, y: this.height - 50, size: this.SmallFont, font: this.font},
            InvoicePaymentData: {x: this.width - 150, y: this.height - 60, size: this.SmallFont, font: this.font},
            InvoicePaymentType: {x: this.width - 150, y: this.height - 70, size: this.SmallFont, font: this.font},

            InvoiceSubmit: {x: 40, y: this.height - 490, size: this.HeaderFont, font: this.font},

            // Draw external lines higer part
            Items1Sqr: {x: 40, y: this.height - 230, width: this.width - 80, height: - 30, color: rgb(0.1, 0.1, 0.1), borderWidth: 0.5},
            Items2Sqr: {x: 40, y: this.height - 260, width: this.width - 80, height: - 30, color: rgb(0.1, 0.1, 0.1), borderWidth: 0.5},

            Items5Sqr: {x: 40, y: this.height - 290, width: this.width - 80, height: - 30, color: rgb(0.1, 0.1, 0.1), borderWidth: 0.5},
            Items6Sqr: {x: 40, y: this.height - 320, width: this.width - 80, height: - 30, color: rgb(0.1, 0.1, 0.1), borderWidth: 0.5},

            // Draw external lines lower part
            Items3Sqr: {x: this.width - 40, y: this.height - 350, width: - 140, height: - 50, color: rgb(0.1, 0.1, 0.1), borderWidth: 0.5},
            Items4Sqr: {x: this.width - 40, y: this.height - 350, width: - 140, height: - 25, color: rgb(0.1, 0.1, 0.1), borderWidth: 0.5},

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

            VatFirstData: {x: this.width - 174, y: this.height - 390, size: this.SmallFont, font: this.font},
            VatSecData: {x: this.width - 135, y: this.height - 390, size: this.SmallFont, font: this.font},
            VatThirdData: {x: this.width - 102, y: this.height - 390, size: this.SmallFont, font: this.font},
            VatFourthData: {x: this.width - 69, y: this.height - 390, size: this.SmallFont, font: this.font},

            // Type of data
            Item1Category: {x: 43, y: this.height - 250, size: this.SmallFont, font: this.font},
            Item2Category: {x: 65, y: this.height - 250, size: this.SmallFont, font: this.font},
            Item3Category: {x: 400, y: this.height - 250, size: this.SmallFont, font: this.font},
            Item4Category: {x: 440, y: this.height - 243, size: this.SmallFont, font: this.font},
            Item5Category: {x: 440, y: this.height - 253, size: this.SmallFont, font: this.font},
            Item6Category: {x: 480, y: this.height - 249, size: this.SmallFont, font: this.font},
            Item7Category: {x: 515, y: this.height - 243, size: this.SmallFont, font: this.font},
            Item8Category: {x: 515, y: this.height - 253, size: this.SmallFont, font: this.font},

            // Amount of data
            Item1Data: {x: 45, y: this.height - 278, size: this.SmallFont, font: this.font},
            Item2Data: {x: 65, y: this.height - 278, size: this.SmallFont, font: this.font},
            Item3Data: {x: 404, y: this.height - 278, size: this.SmallFont, font: this.font},
            Item4Data: {x: 444, y: this.height - 278, size: this.SmallFont, font: this.font},
            Item5Data: {x: 485, y: this.height - 278, size: this.SmallFont, font: this.font},
            Item6Data: {x: 523, y: this.height - 278, size: this.SmallFont, font: this.font},
        }
    }

    // Listen for text input
    ListenForText = () => {

        let number = 1;

        const Amounts = (data) => {
            this.amounts.push(data)
        }

        const Prices = (data) => {
            this.prices.push(data)
        }

        const Vats = (data) => {
           this.vats.push(data)
        }

        const Draw = (data, type) => {
            this.DrawText(data, type)
        }

        const Line = (type) => {
            this.DrawLine(type)
        }

        const Text = (data, type, amount) => {
            if(type !== "SellingCompanyNIP" && type !== "BuyingCompanyNIP") {
                this.page.drawText(data, {
                    x: this.heightData[type].x,
                    y: this.heightData[type].y - 30 * amount,
                    size: this.heightData[type].size,
                    font: this.heightData[type].font
                })
            }
        }

        const Line2 = (data, type) => {
            console.log(type)
            this.page.drawRectangle({
                x: this.heightData[type].x,
                y: this.heightData[type].y,
                width: this.heightData[type].width,
                height: this.heightData[type].height - 30 * data,
                borderColor: this.heightData[type].color,
                borderWidth: this.heightData[type].borderWidth,
            })
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

            const writeData = () => {
                for(let x = 0; x < this.length - 1; x++){
                    Text(this[x].value, this[x].id.trim(), number -1)
                }
            }

            if(number === 3) {
                Text(String(number), "Item1Data", number -1)
                Line("Items6Sqr")

                writeData()
                Text(String(this[1].value * this[2].value), "Item6Data", number -1)

                Amounts(this[2].value)
                Prices(this[1].value)
                Vats(`0.${this[3].value}`)

                Line2(2, "ItemsFirstLine")
                Line2(2, "ItemsSecondLine")
                Line2(2, "ItemsThirdLine")
                Line2(2, "ItemsFourthLine")
                Line2(2, "ItemsFifthLine")

            } else if(number === 2){
                Text(String(number), "Item1Data", number -1)
                Line("Items5Sqr")

                writeData()
                Text(String(this[1].value * this[2].value), "Item6Data", number -1)

                Amounts(this[2].value)
                Prices(this[1].value)
                Vats(`0.${this[3].value}`)

                Line2(1, "ItemsFirstLine")
                Line2(1, "ItemsSecondLine")
                Line2(1, "ItemsThirdLine")
                Line2(1, "ItemsFourthLine")
                Line2(1, "ItemsFifthLine")

            } else {
                Draw(String(number), "Item1Data")

                for(let x = 0; x < this.length - 1; x++){
                    Draw(this[x].value, this[x].id.trim())
                }
                Text(String(this[1].value * this[2].value), "Item6Data", number -1)

                Amounts(this[2].value)
                Prices(this[1].value)
                Vats(`0.${this[3].value}`)
            }

            for(let x = 0; x < this.length - 1; x++){
                this[x].value = ''
            }

            number += 1
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
        } else if(type === "SellingCompanyNIP" || type === "BuyingCompanyNIP"){
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
        this.DrawText("Seller:", "Seller")
        this.DrawText("Buyer:", "Buyer")

        this.DrawText("My Comapny", "SellingCompanyName")
        this.DrawText("My City", "SellingCompanyCity")
        this.DrawText("My street", "SellingCompanyStreet")
        this.DrawText("My PostCode", "SellingCompanyPostCode")
        this.DrawText("My NIP", "SellingCompanyNIP")

        let date = new Date()

        this.DrawText("Invoice number 11", "InvoiceNumber")
        this.DrawText(`Date of invoice: ${date.getDate() + ":" + date.getMonth() + 1 + ":" + date.getFullYear()}`, "InvoiceSellData")
        this.DrawText(`Date of payment: ${date.getDate() + ":" + date.getMonth() + 4 + ":" + date.getFullYear()}`, "InvoicePaymentData")
        this.DrawText("Method of payment: Transfer", "InvoicePaymentType")

        // Lines
        this.DrawLine("Items1Sqr");
        this.DrawLine("Items2Sqr");

        // Items related lines
        this.DrawLine("ItemsFirstLine");
        this.DrawLine("ItemsSecondLine");
        this.DrawLine("ItemsThirdLine");
        this.DrawLine("ItemsFourthLine");
        this.DrawLine("ItemsFifthLine");

        // Vat related data
        this.DrawLine("Items3Sqr");
        this.DrawLine("Items4Sqr");

        this.DrawLine("ItemsSixthLine");
        this.DrawLine("ItemsSeventhLine");
        this.DrawLine("ItemsEighthLine");

        this.DrawText("Netto", "VatFirstInto");
        this.DrawText("Price", "VatSecInto");
        this.DrawText("Amount", "VatThird1Into");
        this.DrawText("VAT", "VatThird2Into");
        this.DrawText("Brutto", "VatFourthInto");

        // Middle sqr
        this.DrawText("LP", "Item1Category");
        this.DrawText("Name", "Item2Category");
        this.DrawText("Amount", "Item3Category");
        this.DrawText("Price", "Item4Category");
        this.DrawText("Brutto", "Item5Category");
        this.DrawText("VAT", "Item6Category");
        this.DrawText("Amount ", "Item7Category");
        this.DrawText("Brutto ", "Item8Category");

        // Signatures
        this.DrawText("Seller signature", "SellerSignature1");
        this.DrawLine("SellerSignature3");

        // Draw vat related stuff

        // Wartość netto całego towaru
        let netto = 0;
        // Kwota vat
        let vat = 0;
        // Wartość brutto całego towaru
        let brutto = 0;

        for(let x=0;x< this.vats.length; x++){
            brutto += this.prices[x] * this.amounts[x]
        }
        vat = brutto * this.vats[0]
        netto = brutto - (brutto * this.vats[0])


        this.DrawText(String((netto).toFixed(2)), "VatFirstData")
        this.DrawText(String(this.vats[0]), "VatSecData")
        this.DrawText(String((vat).toFixed(2)), "VatThirdData")
        this.DrawText(String((brutto).toFixed(2)), "VatFourthData")

        document.getElementById('pdf').src = await this.pdfDoc.saveAsBase64({dataUri: true})
    }

}

export {
    CreatePdf
}