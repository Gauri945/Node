// import express from 'express';
const express = require('express');
const app = express();
const PORT = 3000;

app.get('/api/info', (req, res) => {  //as a callback whwen a func call another function
  res.status.send({
    person_name: "John Doe",
    company_name: "TechNova",
     Post :" Senior Technical Trainer",
    company_image:"www.google.com"
  });
});

app.listen(PORT, () => {
  console.log(`API is running at http://localhost:${PORT}`);
});
