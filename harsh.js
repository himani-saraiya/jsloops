let num=require("readline-sync")
var n=num.questionInt("enter number   ")
var i=n
var sum=0
while (i>0){
	result=i%10
	sum=sum+result
	i=Math.floor(i/10)
} 
if (n%sum==0){
	console.log(n,"harshad number")
}else{
	console.log(n,"not a harshad number")
}
