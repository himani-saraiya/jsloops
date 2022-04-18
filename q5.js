var name=require("readline-sync");
var n=name.question("enter name::")
var rev=0;
var i=n;
while (n>0){
	rev=(rev*10)+n%10
	n=Math.floor(n/10)
}
if (i==rev){
	console.log("palindrome")
}else{
	console.log("not palindrome")
}

