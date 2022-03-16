const path=require("path");
const multer=require("multer");
const req=require("express/lib/request");


const storage = multer.diskStorage({
    destination: function (req, file, callback) {
      callback(null,path.join(__dirname, '/my-uploads'));
    },
    filename: function (req, file, callback) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      callback(null, uniqueSuffix + "-"+ file.originalname)
    }
  })
  
  function fileFilter (req, file, callback) {

    // The function should call `cb` with a boolean
    // to indicate if the file should be accepted
  if(file.mimetype=="image/jpeg" ||file.mimetype=="image/png"){
    // To reject this file pass `false`, like so:
    callback(null, true)
  }
  else {
    // To accept the file pass `true`, like so:
    callbackb(null, false);
  }
  
  };





  const options={
storage,
fileFilter,
limits:{
    fileSize:1024 * 1024 * 5,
},
}
  
const uploads=multer(options);
module.exports=uploads;