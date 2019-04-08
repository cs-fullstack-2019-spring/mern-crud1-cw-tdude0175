import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom"
import './App.css';
import AddProduct from "./components/AddProduct";

class App extends Component {

    //gathers data to render inside state as a collection
    constructor(props) {
        super(props);
        this.state=
            {
                data:[]
            };
        //calls the function to render automatically when the page is rendered
        this.getData()
    }
    //function to gather the list of data
    getData =()=>
    {
        fetch("/list")
            .then(data => data.json())
            .then(response => this.setState({data:response}));
    };

    //function to delete an item by routing to the delete endpoint and using the id to delete the item
    deleteData =(e)=>
    {
        fetch("/delete",
            {
                method: "DELETE",
                headers:
                    {
                        'Accept': 'application/json',
                        'Content-type': 'application/json'
                    },
                body: JSON.stringify({
                    productID: e.target.id,
                    }
                )

            })
    };

    render() {
        //saving the products to list out to a variable
        const mappedData = this.state.data.map((Product)=>
        {
            return(
                <p key={Product.productID}>
                    Identifaction: {Product.productID} Price: {Product.price} Quantity: {Product.quantity}
                    <a href="/delete" id={Product.productID} onClick={this.deleteData}>Delete</a>
                </p>
            )
        });
    return (
        <div>
          <Router>
              <p>
              <Link  to={"/addition"}>Add Product</Link>
              </p>
              <p>
                  <Link  to={"/"}>Home</Link>
              </p>
              <Route exact path={"/addition"} list={this.getData} component={AddProduct}/>
          </Router>
            {mappedData}
        </div>
    );
  }
}

export default App;
