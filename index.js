const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/users/:name',(req,res)=>{
    res.send("Usuario: " + req.params.name)
})

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});