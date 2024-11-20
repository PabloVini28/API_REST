const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000; 

app.get('/',(req,res)=>{
  res.send("Olá mundo");
})

app.listen(PORT,()=>{
  console.log(`server rodando na porta ${PORT}`);
});