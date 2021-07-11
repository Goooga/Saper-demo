const exp = document.getElementById("exp");
exp.innerText = " ";
let first_number = 0;
let second_number = 0;
let sign = "0";
let ident = 1;
function number(i){
    if (sign == "."){
        ident =ident * 10;
        first_number = first_number + i/ident;
        exp.innerText = first_number.toString();
    } else {
    first_number = first_number*10+i;
    exp.innerText = first_number.toString();}
}

function share(){
    sign = "/";
    second_number = first_number;
    first_number = 0;
    exp.innerText = sign;
}

function multiply(){
    sign = "*";
    second_number = first_number;
    first_number = 0;
    exp.innerText = sign;
}

function subtract() {
    sign = "-";
    second_number = first_number;
    first_number = 0;
    exp.innerText = sign;
}

function add() {
    sign = "+";
    second_number = first_number;
    first_number = 0;
    exp.innerText = sign;
}

function dot(){
    first_number = first_number;
    sign = ".";
    exp.innerText = first_number.toString() + sign;
}

function equally(){
    if(sign == "/"){
        first_number = second_number/first_number;
        exp.innerText = first_number.toString();
        ident = 1;
        sign = "0"
    } else if (sign == "*"){
        first_number = second_number * first_number;
        exp.innerText = first_number.toString();
        ident = 1;
        sign = "0"
    } else if (sign == "-"){
        first_number = second_number - first_number;
        exp.innerText = first_number.toString();
        ident = 1;
        sign = "0"
    } else if (sign == "+"){
        first_number  = second_number + first_number;
        exp.innerText = first_number .toString();
        ident = 1;
        sign = "0"
    }
}
