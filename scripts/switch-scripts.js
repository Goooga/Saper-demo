let cheap = false;
let good = false;
let fast = false;

function cheap_button(){
    let elem = document.getElementById("cheap_b");
    cheap = elem.checked;
    if(cheap && good && fast){
        good = false;
        elem = document.getElementById("good_b");
        elem.checked = false;
    }
}

function fast_button(){
    let elem = document.getElementById("fast_b");
    fast = elem.checked;
    if(cheap && good && fast){
        cheap = false;
        elem = document.getElementById("cheap_b");
        elem.checked = false;
    }
}

function good_button(){
    let elem = document.getElementById("good_b");
    good = elem.checked;
    if(cheap && good && fast){
        fast = false;
        elem = document.getElementById("fast_b");
        elem.checked = false;
    }
}