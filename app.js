const express=require('express');
//const cors=require('cores')
const connectDB=require('./connect.js')
const router=require('./routes/routes')
const app=express();
const cors=require('cors')



app.use(express.json());
app.use(cors())
app.use('/tournaments',router);
connectDB()
   
app.listen(4000,(req,res)=>{
    
    console.log('Server is running')
})
