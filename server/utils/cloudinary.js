const cloudinary = require('cloudinary').v2;

// Return "https" URLs by setting secure: true
cloudinary.config({
  secure: true,
  api_key:"584993417487841",
  cloud_name:"duoomc1eo",
  api_secret:"J9lX30e1_ZdBLHBa6egaKOY1YRw",
}); 


module.exports=cloudinary;