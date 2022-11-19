import { Game } from "./game";

const initButton = document.getElementById('init');

initButton?.addEventListener('click', function handleClick(event) {
    new Game().start();
    
    initButton.style.display = 'none';
});