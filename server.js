const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

const port = 3000;

app.get('/',(req,res)=>{
    res.send("<h1>Hello There</h1>");
});

app.get('/users',(req,res) =>{
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
    const result = a + b;
    res.send(result.toString());
});


app.listen(port, (req,res)=>{
    console.log(`Running on port number ${port}`);
});


