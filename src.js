function calc(){
const e = document.createElement("div");
e.innerHTML = `<div id="body"> <div id="txt"><p id="log"> </p> </div> 
<button id="1"> 1 </button> <button id="2"> 2 </button> <button id="3"> 3 </button>
<br>
<button id="4"> 4 </button> <button id="5"> 5 </button> <button id="6"> 6 </button> <button id="+"> + </button> <button id="-"> - </button>
<br> 
<button id="7"> 7 </button> <button id="8"> 8 </button> <button id="9"> 9 </button> <button id="*"> * </button> <button id="/"> / </button>
<br>
<button id="0"> 0 </button> <button id="enter"> Enter  </button> <button id="c"> Clear </button> </div>
`;
document.body.appendChild(e);
var Be = document.getElementById("enter");

var B1 = document.getElementById("1"),
  B2 = document.getElementById("2"),
  B3 = document.getElementById("3"),
  B4 = document.getElementById("4"),
  B5 = document.getElementById("5"),
  B6 = document.getElementById("6"),
  B7 = document.getElementById("7"),
  B8 = document.getElementById("8"),
  B9 = document.getElementById("9"),
  B0 = document.getElementById("0"),
  oP = document.getElementById("log"),
  aB = document.getElementById("+"),
  sB = document.getElementById("-"),
  mB = document.getElementById("*"),
  dB = document.getElementById("/"),
  cB = document.getElementById("c"),
  bD = document.getElementById("body"),
  txt= document.getElementById("txt");
  txt.style='background-color:rgb(170,170,170);'
  oP.style='background-color:rgb(130,130,130);'
  bD.style='background-color:rgb(25,140,255);width:150px;height:160px;'
  var n1 ="" ,n2="",oC = false;

aB.style = 'width:25px;height:25px';
sB.style = 'width:25px;height:25px';
mB.style = 'width:25px;height:25px';
dB.style = 'width:25px;height:25px';

B1.className = "num";
B2.className = "num";
B3.className = "num";
B4.className = "num";
B5.className = "num";
B6.className = "num";
B7.className = "num";
B8.className = "num";
B9.className = "num";
B0.className = "num";
aB.className = "opp";
sB.className = "opp";
mB.className = "opp";
dB.className = "opp";

var answ;

var add, sub, mlt, div;
aB.onclick = function() {
  add = true; sub = false; mlt = false; div = false;oC =true;
  oP.innerHTML = oP.innerHTML + '+';
}
sB.onclick = function() {
  sub = true; add = false; mlt = false; div = false;oC =true;
  oP.innerHTML = oP.innerHTML + '-';
}
mB.onclick = function() {
  mlt = true; add = false; sub = false; div = false;oC =true;
  oP.innerHTML = oP.innerHTML + '*';
}
dB.onclick = function() {
  div = true; add = false; sub = false; mlt = false;oC =true;
  oP.innerHTML = oP.innerHTML + '/';
}

B1.onclick = function() {
  oP.innerHTML = oP.innerHTML + 1; if (oC == true) {n2 = n2 + 1;}
  else if (oC == false) {n1 = n1 + 1;};
}
B2.onclick = function() {
  oP.innerHTML = oP.innerHTML + 2; if (oC == true) {n2 = n2 + 2;}
  else if (oC == false) {n1 = n1 + 2;};
}
B3.onclick = function() {
  oP.innerHTML = oP.innerHTML + 3; if (oC == true) {n2 = n2 + 3;}
  else if (oC == false) {n1 = n1 + 3;};
}
B4.onclick = function() {
  oP.innerHTML = oP.innerHTML + 4; if (oC == true) {n2 = n2 + 4;}
  else if (oC == false) {n1 = n1 + 4;};
}
B5.onclick = function() {
  oP.innerHTML = oP.innerHTML + 5; if (oC == true) {n2 = n2 + 5;}
  else if (oC == false) {n1 = n1 + 5;};
}
B6.onclick = function() {
  oP.innerHTML = oP.innerHTML + 6; if (oC == true) {n2 = n2 + 6;}
  else if (oC == false) {n1 = n1 + 6;};
}
B7.onclick = function() {
  oP.innerHTML = oP.innerHTML + 7; if (oC == true) {n2 = n2 + 7;}
  else if (oC == false) {n1 = n1 + 7;};
}
B8.onclick = function() {
  oP.innerHTML = oP.innerHTML + 8; if (oC == true) {n2 = n2 + 8;}
  else if (oC == false) {n1 = n1 + 8;};
}
B9.onclick = function() {
  oP.innerHTML = oP.innerHTML + 9; if (oC == true) {n2 = n2 + 9;}
  else if (oC == false) {n1 = n1 + 9;};
}
B0.onclick = function() {
  oP.innerHTML = oP.innerHTML + 0; if (oC == true) {n2 = n2 + 0;}
  else if (oC == false) {n1 = n1 + 0;};
}

cB.onclick=function() {
document.body.removeChild(e); calc();
}

Be.onclick = function() {
let N1 =parseFloat(n1),N2 = parseFloat(n2)

  if (add == true)      { answ = N1 + N2;
   oP.innerHTML= answ; ;}
  
  else if (sub == true) { answ = N1 - N2;
   console.log(answ);  ;} 
  
  else if (mlt == true) { answ = N1 * N2;
   oP.innerHTML= answ; ;} 
  
  else if (div == true) { answ = N1 / N2;
   oP.innerHTML= answ; ;} 
  
  else {
    oP.innerHTML = `<h1>` + "Error code:503" + `</h1>` + " number is over infiny/num does not exist, or is to large";} 
   ;} 
 ;}
calc();
