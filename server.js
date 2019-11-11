const express = require('express');
const app = express();

const players = require('./players');

//allows us to access js/css/images if in an public directory
app.use(express.static('public'));

app.get('/',(req,res)=>{
    res.sendFile(__dirname + "/index.html");
});

app.get('/api/players',(req,res)=>{
    res.send(players);
});

const port = process.env.PORT || 3000;

app.listen(port,()=>{
    console.log(`listening on port ${port}...`);
});