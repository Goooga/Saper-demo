const exp = document.getElementById("exp");
exp.innerText = " ";
let first_number = 0;
let second_number = 0;
function number(i){
    first_number = first_number*10+i;
    exp.innerText = first_number.toString();
}
function first(i){
    first_number = first_number/i;
    exp.innerText = first_number.toString();
}
