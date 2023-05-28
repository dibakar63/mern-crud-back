const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const tournamentSchema=new Schema({
    name:{
        type:String,
        required:true
    },
    image:{
        type:String,

    },
    start:{
        type:String,required:true
    },
    end:{
        type:String,
        required:true
    },
    list:{type:String,
    required:true},
    status:{
        type:String,
        
    }
})
module.exports=mongoose.model('Tournament',tournamentSchema)