 const express = require("express");   
 const app = express();   // it is basically a function
//  console.log(app);

 let port=8080;     // it is use for making custom server
 app.listen(port,()=>{            //server start ho jyega listen se
        console.log(`app is listening on port ${port}` );
 });

//  app.use((req,res)=>{         //app.use hr trike ki req ko accpt krega like get post etc...
//     console.log(req);
//      console.log("request receive");     //all response is in same route or same page
//      res.send("this is a basic response");
//  });



app.get("/",(req,res)=>{
     res.send("you contact root path");
});
app.get("/apple",(req,res)=>{
     res.send("you contact Apple");
});                                 //for different route
app.get("/search",(req,res)=>{
     res.send("you contact Search");
});
app.get("/*",(req,res)=>{
     res.send("THis path doesnot exit");
});



   //custom page(PATH PARAMETERSS)

//    app.get("/",(req,res)=>{
//       res.send("I'm a root path");
//    })

// app.get("/:username/:id",(req,res)=>{    
//   let {username,id}= req.params;
//   res.send(`welcome to the page of ${username}`);
// });




//Queryy String

// app.get("/search",(req,res)=>{
//     let {q}=(req.query);   //all query which is associated with request
//     res.send(`search result for : ${q}`);
// });                                    //we send like this http://localhost:8080/search?name=gauri&age=25









