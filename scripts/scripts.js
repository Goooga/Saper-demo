let good = false;
let fast = false;
let cheap = false;
const easy = 8
const medium = 12
const hard = 15





function hello() {
    let elem = document.getElementById("minefield");
    if (elem !=null){
        elem.remove();
    }
    
    let select = document.getElementById("diff-select");
    let diff = select.value;
    let size_x;
    let size_y;
    if (diff == "easy"){
        size_x = easy;
        size_y = easy;
    }else if (diff == "med"){
        size_x = medium;
        size_y = medium;
    }else{
        size_x = hard;
        size_y = hard;
    }
    const papa = document.getElementById('game-holder');
    let table = document.createElement('table');
    table.id = "minefield";
    table.classList.add('minefield');
    papa.appendChild(table);
    for (let x = 0; x < size_x; x++) {
        let row = document.createElement('tr');
        table.appendChild(row);
        for (let y = 0; y < size_y; y++) {
            let cell = document.createElement('td');
            cell.classList.add('mine-cell');
            cell.classList.add('mine-cell-inactive');
            cell.style.height = (600/size_y).toString()+"px";
            cell.style.width = (600/size_x).toString()+"px";
            cell.id = x.toString() + "-" + y.toString()
            let content = document.createTextNode(x.toString() + "-" + y.toString());
            cell.appendChild(content);
            row.appendChild(cell);
        }
    }
}


function s_cheap(){
    let elem = document.getElementById('cheap')
    cheap = elem.checked;
    if (cheap && good && fast){
        fast = false;
        document.getElementById('fast').checked = false;
    }
}

function s_fast(){
    let elem = document.getElementById('fast')
    fast = elem.checked;
    if (cheap && good && fast){
        good = false;
        document.getElementById('good').checked = false;
    }
}

function s_good(){
    let elem = document.getElementById('good')
    good = elem.checked;
    if (cheap && good && fast){
        cheap = false;
        document.getElementById('cheap').checked = false;
    }
}

