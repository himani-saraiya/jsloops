let num=require("readline-sync");
var n=num.questionInt("enter number;;  ")
var i=1
let c=0
while (i<=n){
	if (n%i==0){
		c=c+1
    }
	i++
}
if (c==2){
	console.log(n,'prime number')
}    
else{
	console.log("not")
}