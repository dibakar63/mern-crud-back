const mongoose=require('mongoose');

  const connectDB=async()=>{
    try {
        await mongoose.connect('mongodb+srv://dibakardey63:S8oNncTxdBeqntKE@recipes.rglhoml.mongodb.net/tournamnet');
        console.log("db connected")
    } catch (error) {
        console.log(error)
    }
 }
 module.exports=connectDB
