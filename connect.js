const mongoose=require('mongoose');
const connectDB=async()=>{
try {
    let connect=await mongoose.connect('mongodb+srv://dibakardey63:1r28OwcgbtFwpJXN@recipes.rglhoml.mongodb.net/tournamnet');
    console.log(`mongoose connected `)
} catch (error) {
   console.log(error) 
}
}

module.exports=connectDB;