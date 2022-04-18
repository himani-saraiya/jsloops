let n=require("readline-sync")
var num=n.questionInt("enter number   ")
var i=num
var result=0
var s=String(i).length;
while (i>0){
	var digit=i%10
	result=result+digit**s
	i=Math.floor(i/10)
}
if (num==result){
	console.log(num,"armstrong number")
}else{
	console.log("not")
}