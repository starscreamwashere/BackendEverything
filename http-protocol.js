// http protocol

// yahi protocol hai ya ye vohi rule hai jisko follow kare bina aap
// internet pe kuch bhej nahi sakte , kuch mangaa nahi sakte

const http=require('http');

const server=http.createServer(function(req,res){
    res.end("hello world");
})

server.listen(3000);