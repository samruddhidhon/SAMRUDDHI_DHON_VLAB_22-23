let in1:HTMLInputElement=<HTMLInputElement>document.getElementById("in1");
let in2:HTMLInputElement=<HTMLInputElement>document.getElementById("in2");
let in3:HTMLInputElement=<HTMLInputElement>document.getElementById("hi");
let in4:HTMLInputElement=<HTMLInputElement>document.getElementById("hi1");
let in5:HTMLInputElement=<HTMLInputElement>document.getElementById("hi2");

function con(){
    var str: string=in1.value
    in3.innerHTML=str.concat(in2.value)
}
function upper(){
    var str: string=in1.value
    in4.innerHTML=str.toUpperCase()
}
function lower(){
    var str: string=in1.value
    in5.innerHTML=str.toLowerCase()
}