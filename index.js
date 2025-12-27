const express=require("express");
const app=express();
const isciler = [
  { id: 1, name: "Ali", age: 25 },
  { id: 2, name: "Veli", age: 30 },
  { id: 3, name: "Murad", age: 22 }
];

app.get('/',(req,res)=>{
    res.send(isciler)
})

app.listen(3000,()=>{
    console.log("Server calisir.")
})