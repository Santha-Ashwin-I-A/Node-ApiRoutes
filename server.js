const express = require("express");
const data = require("./model/data");
const bodyParser = require("body-parser");

const app = express();

const PORT = process.env.PORT || 4000;

app.get("/",(req,res)=>{
    res.send(data);
})

app.get("/:id",(req,res)=>{
    const id = req.params.id;
    const findById = data.product.find((item)=>  item.Id === id) 
    console.log(findById)
    res.send(findById)
});
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded())

// parse application/json
app.use(bodyParser.json())

app.put("/:id",(req,res)=>{
    const id = req.params.id;
    const dataUp = req.body;
    const findById = data.product.find((item)=>  item.Id === id) 
    findById.Name = dataUp.data.Name;
    res.send(data);
})

app.post("/add",(req,res)=>{
    const {Id,Name} = req.body;
    data.product.push({Id,Name})
    res.send(data);
})

app.delete("/:id",(req,res)=>{
    const id = req.params.id;
    const delData= data.product.findIndex((item)=> item.Id === id);
    data.product.splice(delData,1)
    res.send(data);
})

app.listen(PORT,(req,res)=>{
    console.log(`Port Started on http://localhost:${PORT}`);
})