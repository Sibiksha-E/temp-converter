var result=document.getElementById("result");
var tof=document.getElementById("celcius");
var toc=document.getElementById("Fahrenheit");
var data=document.getElementById("num");
let temp;
function results(){
    data=Number(data.value)
    if(tof.checked){
        result.textContent= data * 9/5 + 32
    }
    else if(toc.checked){
        result.textContent=Math.floor((data - 32) / (9/5));
    }
    else{
       result.textContent="choose conversion";
    }
}
