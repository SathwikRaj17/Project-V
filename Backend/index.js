import express from "express"

const app=express();

const port=process.env.PORT || 3000;

app.listen(port,(req,res)=>{
console.log(`Listening on port ${port}`)
})
