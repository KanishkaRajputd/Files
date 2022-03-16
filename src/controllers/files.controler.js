const express=require("express");
const router = require("../../../file-uploads/src/controllers/user.controllers");

const Files=require("../models/files.model");

const upload=require("../middleware/upload");

const route=express.Router();



router.get("",async(req,res)=>{
    try {
        const users = await Files.find().lean().exec();
    
        return res.status(200).send(users);
      } catch (err) {
        return res.status(500).send({ message: err.message });
      }
})

router.post("",upload.single("profile"),async(req,res)=>{
try{
const file=await Files.create({
    name:req.body.name,
    prfile:req.file.path
})
return res.status(200).send(file);
}catch(err){
    return res.status(500).send({ message: err.message });
}

})

router.post("/multiple", upload.any("profilePic"), async (req, res) => {
    try {
      const filePaths = req.files.map((file) => {
        return file.path;
      });
  
      const user = await Files.create({
        name: req.body.name,
        profile: filePaths,
      });
  
      return res.status(200).send(user);
    } catch (err) {
      return res.status(500).send({ message: err.message });
    }
  });

  module.exports=router;