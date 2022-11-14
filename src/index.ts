import { Grid } from "./grid";

const initButton = document.getElementById('init');

initButton?.addEventListener('click', function handleClick(event) {
    new Grid().generate();
})