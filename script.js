// //fundamentals of js:
// //arrays and objects
// //async js coding
// //foreach map filter indexOf find
// //foreach ~ har ek ke liye

// var arr=[1,2,3,4];
// arr.forEach(function(val){
//     console.log(val*10);
// });//arr ke har ek value ko 10 se multiply krdo

// //map -> naya array banaake deta hai
// var newarr=arr.map(function(val){
//     return val*10;
// })

// console.log(newarr);

// //filter -> sirf vohi values dega jo conditions ko satisfy karega
//  var third=arr.filter(function(val){
//     if (val>2){
//         return true;
//     }
//  })
//  console.log(third);

//  //find -> array mai kuch bhi dhundneka tareeka find hai aur ye pehle aanevala banda dhundke dega




//  //indexOf se aap search kroge kisi bhi member ko array mai




//  //object-> {key:"value",key:"value",key:"value",......} 
//  var obj={
//     name:"dash",
//     age:28,
//     key:"value"
//  }

// //  obj.age=23;
// //  console.log(obj.age);
// Object.freeze(obj);
// obj.age=30;
// console.log(obj.age);

// //like you can use arr.length to find no. of elements in an array , similarly u can use
// // functionname.length to find legth of a function
// // the ans of that would be the no. of parameters of that function
// //this is because in JS , function is also an object at the end of the day

async function abcd(){
     var blob=await fetch('https://randomuser.me/api/');
     var res=await blob.json();
     console.log(res); 
}
abcd();

//jo code line by line chalta ho , wo asynchronous
//jo bhi code async nature ka ho usko side stack mai bhejo and agle code ko chalao jo bhi sync nature ka ho,jb bhi
// saara sync code chal jaye tab check karo ki async code chala hai
// ya nahi and agar wo complete hua ya nahi
// and agar wo complete hua ho to usey main stack mai lao and usko chalao
