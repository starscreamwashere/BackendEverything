//fundamentals of js:
//arrays and objects
//async js coding
//foreach map filter indexOf find
//foreach ~ har ek ke liye

var arr=[1,2,3,4];
arr.forEach(function(val){
    console.log(val*10);
});//arr ke har ek value ko 10 se multiply krdo

//map -> naya array banaake deta hai
var newarr=arr.map(function(val){
    return val*10;
})

console.log(newarr);

//filter -> sirf vohi values dega jo conditions ko satisfy karega
 var third=arr.filter(function(val){
    if (val>2){
        return true;
    }
 })
 console.log(third);

 //find -> array mai kuch bhi dhundneka tareeka find hai aur ye pehle aanevala banda dhundke dega




 //indexOf se aap search kroge kisi bhi member ko array mai
 