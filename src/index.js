const express=require("express");

const filecontroler=require("./controllers/files.controler");
const connect=require("./configs/db");

const app=express();
app.use(express.json());
app.use("files",filecontroler);

app.listen(4848,async()=>{
    try{
await connect();
console.log("I am listening port 4888");
    }catch(err){
        console.log(err);
    }
})