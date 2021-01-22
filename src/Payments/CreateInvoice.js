import React from 'react';
import { CreatePdf } from "./CreatePdf";
import "../Css/Invoice.css"

export default class CreateInvoice extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    CreateCard = (data) => {
        let card;

        if(data.type === "text"){
            card =
                `<div class="card" style={{height: "15rem"}}>
                    <div class="card-body">
                        <h5 class="card-title">Company data</h5>
                        <h6 class="card-subtitle mb-2 text-muted name">${data.name}</h6>
                        <h6 class="card-subtitle mb-2 text-muted city">${data.city}</h6>
                        <h6 class="card-subtitle mb-2 text-muted street">${data.street}</h6>
                        <h6 class="card-subtitle mb-2 text-muted postcode">${data.postcode}</h6>
                        <h6 class="card-subtitle mb-2 text-muted nip">${data.nip}</h6>
                    </div>
                </div>`
        } else if(data.type === "image"){
            card =
                `<div class="card" style={{height: "15rem"}}>
                    <img src=${data.image} alt="Card image cap" height="50px" width="100px">
                    <div class="card-body">
                        <h5 class="card-title">Image</h5>
                    </div>
                </div>`
        } else if(data.type === "product"){
            card =
                `<div class="card" style={{height: "15rem"}}>
                    <div class="card-body">
                        <h5 class="card-title">Product data</h5>
                        <h6 class="card-subtitle mb-2 text-muted name">${data.name}</h6>
                        <h6 class="card-subtitle mb-2 text-muted price">${data.price}</h6>
                        <h6 class="card-subtitle mb-2 text-muted amount">${data.amount}</h6>
                        <h6 class="card-subtitle mb-2 text-muted vat">${data.vat}</h6>
                    </div>
                </div>`
        }


        document.querySelector(".OrdersList").innerHTML += card;
    }

    componentDidMount() {
        document.querySelectorAll(".InnerForm").forEach(form => {
        form.addEventListener("submit", (e) => {
            e.preventDefault()

                if(form.className === "InnerForm text"){
                    let data = {
                        type : "text",
                        name: form[0].value,
                        city: form[1].value,
                        street: form[2].value,
                        postcode: form[3].value,
                        nip: form[4].value
                    }
                    this.CreateCard(data)
                    form.remove();
                } else if(form.className === "InnerForm image"){
                    let picture = document.querySelector('.picture')
                    let img = URL.createObjectURL(picture.files[0])

                    let data = {
                        type : "image",
                        image: img,
                    }
                    this.CreateCard(data)
                    form.remove();
                } else if(form.className === "InnerForm product"){
                    let data = {
                        type : "product",
                        name: form[0].value,
                        price: form[1].value,
                        amount: form[2].value,
                        vat: form[3].value
                    }
                    this.CreateCard(data)
                }

            })
        })
    }

    render(){
        const Pdf = new CreatePdf("Capri");

        const GoBack = () => {
            window.history.back()
        }

        return (
            <div className="container">
                <h2 className="header">Company data</h2>
                <button style={{background: "lightgreen", width: "190px"}} onClick={GoBack}><h4>Previous menu</h4></button>
                <div className="OrdersList"> </div>

                <div className="form InvoiceDataActive">

                    <form className="InnerForm text">
                        <h2>Create payment</h2>
                        <label htmlFor="BuyingCompanyName">Name</label>
                        <input type="text" name="BuyingCompanyName" id="BuyingCompanyName"/>

                        <label htmlFor="BuyingCompanyCity">City</label>
                        <input type="text" name="BuyingCompanyCity" id="BuyingCompanyCity"/>

                        <label htmlFor="BuyingCompanyStreet">Street</label>
                        <input type="text" name="BuyingCompanyStreet" id="BuyingCompanyStreet"/>

                        <label htmlFor="BuyingCompanyPostCode">Postcode</label>
                        <input type="text" name="BuyingCompanyPostCode" id="BuyingCompanyPostCode"/>

                        <label htmlFor="BuyingCompanyNIP">NIP</label>
                        <input type="text" name="BuyingCompanyNIP" id="BuyingCompanyNIP"/>

                        <button style={{marginLeft: "30%"}}>Create</button>

                    </form>

                    <form className="InnerForm image" style={{height: "10em"}}>
                        <label htmlFor="image">Add logo</label>
                        <input type="file" name="picture" className="picture"/>
                        <input type="submit"/>
                    </form>

                    <form className="InnerForm product">
                        <h2>Add product</h2>
                        <label htmlFor="Item2Data">Name</label>
                        <input type="text" name="Item2Data" id="Item2Data"/>

                        <label htmlFor="Item4Data">Price</label>
                        <input type="text" name="Item4Data" id="Item4Data"/>

                        <label htmlFor="Item3Data">Amount</label>
                        <input type="text" name="Item3Data" id="Item3Data"/>

                        <label htmlFor="Item5Data">Vat</label>
                        <input type="text" name="Item5Data" id="Item5Data"/>

                        <button style={{marginLeft: "23%"}}>Create</button>

                    </form>

                    <button onClick={Pdf.Submit}>Create invoice</button>
                </div>
                <div className="IframeInactive">
                    <iframe title="Invoice" id="pdf" style={{width: "100%", height: "90vh"}}> </iframe>
                </div>
            </div>
        )
    }
}