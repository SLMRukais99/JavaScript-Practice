    

document.getElementById("add").addEventListener("click",addition);
document.getElementById("sub").addEventListener("click",subtraction);
document.getElementById("mul").addEventListener("click",multiplication);
document.getElementById("div").addEventListener("click",division);

function addition(){
    let Num1 =Number( document.getElementById("num1").value);
    let Num2 = Number(document.getElementById("num2").value);
    document.getElementById("res").innerText = Num1+ Num2;
}
function subtraction(){
    let Num1 =Number( document.getElementById("num1").value);
    let Num2 = Number(document.getElementById("num2").value);
    document.getElementById("res").innerText = Num1 - Num2;
}
function multiplication(){
    let Num1 =Number( document.getElementById("num1").value);
    let Num2 = Number(document.getElementById("num2").value);
    document.getElementById("res").innerText = Num1 * Num2;
}
function division(){
    let Num1 =Number( document.getElementById("num1").value);
    let Num2 = Number(document.getElementById("num2").value);
    document.getElementById("res").innerText = Num1 / Num2;
}