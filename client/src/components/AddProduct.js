import React, {Component} from "react"


export default class AddProduct extends Component
{


    //saves the data to the database prevents the default submition and submits server side
    submitData =(e) =>
    {
        e.preventDefault();
        fetch("/add",
            {
                method:"POST",
                headers:
                    {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                    },
                body: JSON.stringify({
                    productID: e.target.IDNumber.value,
                    price: e.target.Price.value,
                    quantity: e.target.Quantity.value,
                }),
            })
            .then(this.props.list)
    };

    render() {
        return (
            <div>
                <form onSubmit={this.submitData}>
                    <label htmlFor="IDNumber">Id Number:</label>
                    <input id={"IDNumber"} name={"IDNumber"} type="text"/>

                    <label htmlFor="Price" >Price:</label>
                    <input id={"Price"} name={"Price"} type="text"/>

                    <label htmlFor="Quantity">quantity:</label>
                    <input id={"Quantity"} name={"Quantity"} type="text"/>

                    <input type="submit"/>
                </form>
            </div>
        );
    }
}
