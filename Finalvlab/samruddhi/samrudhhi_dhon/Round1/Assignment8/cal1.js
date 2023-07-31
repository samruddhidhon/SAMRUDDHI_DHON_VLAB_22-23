var in1 = document.getElementById("in1");
var in2 = document.getElementById("in2");
var in3 = document.getElementById("hi");
var in4 = document.getElementById("hi1");
var in5 = document.getElementById("hi2");
function con() {
    var str = in1.value;
    in3.innerHTML = str.concat(in2.value);
}
function upper() {
    var str = in1.value;
    in4.innerHTML = str.toUpperCase();
}
function lower() {
    var str = in1.value;
    in5.innerHTML = str.toLowerCase();
}
