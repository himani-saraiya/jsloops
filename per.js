let n=require("readline-sync")
var num=n.questionInt("enter number   ")
var i=1
var sum=0
while (i<=Math.floor/2){
	if (n%i==0){
		sum=sum+i
	i++
    }
}
if (sum==n){
	console.log(n,"perfect number")
}else{
	console.log(n,"not a perfect number")
	
}
