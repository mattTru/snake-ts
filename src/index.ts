import {Grid} from "./grid";

const g: Grid = {
    x: 50,
    y: 50
}

function init() {
    alert('Dimension de la grille: ' + g.x + ' sur ' + g.y);
}

const initButton = document.getElementById('init');

initButton?.addEventListener('click', function handleClick(event) {
    init();
})