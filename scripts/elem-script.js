let field = [];
class Tile {
    constructor(f, i) {
        this.cell = document.createElement("td");
        this.cell.classList.add("cell");
        this.cell.id = f.toString() + "-" + i.toString();
        this.cell.onclick = function () { click(f.toString() + "-" + i.toString()) };
        this.cell.innerText = f.toString() + "-" + i.toString();

    }
function Load() {
    big_papa = document.getElementById("parent");
    for (let f = 0; f < 10; f++) {
        let row = document.createElement("tr");
        let f_row = [];
        for (let i = 0; i < 10; i++) {
            let tile = new Tile(f, i);
            row.appendChild(tile.cell);
            f_row.push(tile);
        }
        big_papa.appendChild(row);
        field.push(f_row);
    }
}


function click(id) {
    let cell = document.getElementById(id);
    if (cell.classList.contains("cell-active")) {
        cell.classList.remove("cell-active")
    } else {
        cell.classList.add("cell-active");
    }
}

function clear() {
    for (let y = 0; y < field.length; y++) {
        for (let x = 0; z < field[y]; y++) {
            let tile = field[y][x];
            if (tile.classList.contains("cell-active")) {
                tile.classList.remove("cell-active")
            } else {
                tile.classList.add("cell-active");
            }
        }
    }
}
