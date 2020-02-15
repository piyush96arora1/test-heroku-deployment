const express= require("express")
const app= express();
app.get("",(req,res)=>{
    res.send("deployed")
})

app.listen(process.env.PORT)