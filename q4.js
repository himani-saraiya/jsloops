// let n=require("readline-sync")
// var num=n.questionInt("enter number   ")
// for (let i=1;i<=10;i++) {
//     multi=num*i;
//     console.log(num + " *" + i + "=" + multi)
// }

let n=require("readline-sync")
var num=n.questionInt("enter number   ")
var i=1;
while (i<=10){
    console.log(num + " *" + i + "=" + num*i)
    i++   
}