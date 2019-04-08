var express = require('express');
var router = express.Router();
var ProductCollection = require("../models/ProductSchema");
/* GET home page. */
router.get('/', function(req, res, next) {
  res.send("Welcome to the pit")
});

// router.get("/DummyData",(req,res)=>
// {
//   var data =
//       [
//         {productID:1 ,price:"300" ,quantity:1 },
//         {productID: 2,price:"50.24" ,quantity:5 },
//         {productID:3 ,price:"0.02" ,quantity: 1000},
//       ];
//
//   ProductCollection.create(data,(errors,results)=>
//   {
//     if(errors) res.send(errors);
//     else res.send(results)
//   })
// });

//gets a complete list of all the products
router.get("/list",(req,res)=>
{
  ProductCollection.find((errors,results)=>
  {
    if(errors) res.send(errors);
    else res.send(results);
  })
});

//adds a new product to the database
router.post("/add",(req,res)=>
{
  ProductCollection.create({productID: req.body.productID,price: req.body.price, quantity: req.body.quantity},(errors,results)=>
  {
    if(errors) res.send(errors);
    else res.send("Created: " + results);
  });
});

//deletes one item from the database via id number
router.delete("/delete",(req,res)=>
{
  ProductCollection.findOneAndDelete({productID: req.body.productID},(errors)=>
  {
    if(errors)res.send(errors);
    else res.send("the deed is done.");
  })
});

module.exports = router;
