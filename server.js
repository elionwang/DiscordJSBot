const express = require('express');
const server = express();



server.all('/', (req, res)=>{
    res.send(`Bot status: \nonline`)
})
function keepAlive(){
    server.listen(3000, ()=>{
      console.log("The server is ready!")});
}
module.exports = keepAlive;