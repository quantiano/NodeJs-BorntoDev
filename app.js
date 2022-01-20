const express = require('express');
const debug = require('debug')('app');
const morgan = require('morgan');
const app = express();
const port = 3000;
const path = require('path'); 

app.use(morgan('combined'));
app.use(express.static(path.join(__dirname,'/public/')))

app.get("/",(req,res)=>{

    res.send('Hello World 123');

})

app.listen(port, ()=>{
    console.log('listening on port %d', port);
})