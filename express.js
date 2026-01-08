//Express js framework

//Introduction to Express js
//express js ek npm package hai
//framework->
//manages everything from receiving the request to giving back the response


//Setting up basic express application
const express=require('express')

const app = express()

// app.get(route,requestHandler)


//Routing
app.get("/",function(req,res){
    res.send("hi there");
})

app.get("/profile",function(req,res){
    res.send("your profile"); 
})
// app.get('/', (req, res) => {
//   res.send('Hello World')
// })

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
})

//Middleware -> Routes ke pehle aata hai middleware
//Kisi route pe jaane se pehle koi task perform krvana ho , to woh kaam
//middleware ka hota hai
//jb bhi server request accept krta hai , aur uske route ke pahuchne ke beech mai agar aap usse rokte ho aur kuch perform krvate ho then wo element middleware kehlata hai


//Request and Response Handling
//Error Handling