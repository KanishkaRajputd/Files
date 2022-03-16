const mongoose=require("mongoose");

const filesSchema=new mongoose.Schema({
name:{type:String,required:true},
profile:{type:String,required:false},
},
{
versionKey:false,
timestamps:true,
}
)


const Files=mongoose.model("files",filesSchema);


module.exports=Files;