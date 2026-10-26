const express= require("express");  //by deafault ejs ko require kr leta h
const app= express();
const path=require("path");  //path is a package whic use in view engine

app.use(express.static(path.join(__dirname,"public"))); // css ya js fie 

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views")); // views ka path show krn ki koshsh kr rhe h joki if hum bhr se bhi run kre toh ho jyega

// app.get("/",(req,res)=>{
//     res.render("home.ejs")
// });

// app.get("/rolldice",(req,res)=>{
//     res.render("rolldice.ejs");    // render means file ko bhejna
// });


//DATABASE SE DATA
// app.get("/rolldice",(req,res)=>{
//     let diceval = Math.floor(Math.random()*6)+1;
//     res.render("rolldice.ejs",{num:diceval});  //num h y ejs file maib variable h nd diceval ko as a second argument pass kr rhe h in the form of an object
// })                                             //key value ko same bhi rkh skte h dono jgh


// // app.get("/ig/:username",(req,res)=>{
// //       let {username}= req.params;
// //       res.render("instagram.ejs",{username});
// // });



// // backend k andr data aa gye toh usse kese render
// app.get("/ig/:username",(req,res)=>{
//     const instadata= require("./data.json");  //uss data ko require krn hoga
//     let {username} = req.params;
//     const data = instadata[username];
//     console.log(data);
   
//     res.render("instagram.ejs",{data:instadata[username]});
    
// });

const port =8080;

app.listen(port,()=>{
    console.log(`listening on port ${port}`);
})




