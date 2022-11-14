import { Grid } from "./grid/grid";

const initButton = document.getElementById('init');

initButton?.addEventListener('click', function handleClick(event) {
    new Grid().init();
})