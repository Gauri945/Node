const express=require("express");
const app=express();
const port=8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());




app.post("/register", (req, res) => {
    console.log("POST data:", req.body); // Should log { user: '...', password: '...' }
    const { user, password } = req.body;
    res.send(`POST request received. Welcome ${user}!`);
});


app.get("/register", (req, res) => {
    console.log(req.query);
    const { user, password } = req.query;
    res.send(`GET request received. Welcome ${user}!`);
});





// app.get("/register",(req,res)=>{
//     res.send("Standard get request");
// });

// app.post("/register",(req,res)=>{
//     res.send("Standard Post request");
// });




app.listen(port,()=>{
    console.log(`listening at port ${port}`);

});