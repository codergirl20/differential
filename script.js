function differential(){
    num=document.getElementById("num").value

  var1=document.getElementById("var1").value

    pow=document.getElementById("pow").value

if(pow==2){
    var d=num*pow+var1
    // console.log(d)
}
else{
    var d=num*pow+var1+"^"+(pow-1)
    // console.log(d)
}
var result=document.getElementById("re").innerHTML=d
console.log(result)
}