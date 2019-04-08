import React, {Component} from "react";

class ListProduct extends Component {
    constructor(props) {
        super(props);
        this.state=
            {
                data:[]
            };
        this.getData()
    }
    getData =()=>
    {
        fetch("/list")
            .then(data => data.json())
            .then(response => this.setState({data:response}));
    };
    render() {
        const mappedData = this.state.data.map((Product)=>
        {
            return(
                <p key={Product.productID}>
                    Identifaction: {Product.productID} Price: {Product.price} Quantity: {Product.quantity}
                </p>
            )
        });

        return (

            <div>
                {mappedData}
            </div>
        );
    }
}

export default ListProduct