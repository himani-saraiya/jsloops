var i=0;
sum=0
while(i<=10){
    let num=require("readline-sync");
    var n=num.questionInt("enter number;;  ")
    sum=sum+n
    console.log(sum)
    i++
}
