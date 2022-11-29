import { Grid } from "./grid/grid";
import { Snake } from "./snake/snake";
import { Direction } from "./snake/direction";
import { Dimension } from "./grid/dimension";

const canvas: HTMLCanvasElement = <HTMLCanvasElement>document.querySelector('canvas');
const context: CanvasRenderingContext2D = <CanvasRenderingContext2D>canvas.getContext('2d');

export class Game {
    static grid: Grid;
    static snake: { x: number; y: number; }[];
    static direction: string;
    static speed: number;

    public init() {
        Game.snake = new Snake().init();
        Game.direction = Direction.snake.right;
        Game.speed = 15;
    }

    public start() {
        Game.grid = new Grid();
        Game.grid.init(canvas, context);

        this.init();
        this.move();
    }

    public move() {
        const snake = {...Game.snake[Game.snake.length - 1]};
        const snakeAfterMove = snake;
        switch(Game.direction) {
            case Direction.snake.top:
                snakeAfterMove.y = (snake.y === 0) ? (Dimension.grid.height - Dimension.grid.boxSize) : snake.y - Game.speed;
                break;
            case Direction.snake.bottom:
                snakeAfterMove.y = (snake.y + Dimension.grid.boxSize === Dimension.grid.height) ? 0 : snake.y + Game.speed;
                break;
            case Direction.snake.left:
                snakeAfterMove.x = (snake.x === 0) ? (Dimension.grid.width - Dimension.grid.boxSize) : snake.x - Game.speed;
                break;
            case Direction.snake.right:
                snakeAfterMove.x = (snake.x + Dimension.grid.boxSize === Dimension.grid.width) ? 0 : snake.x + Game.speed;
                break;
        }

        Game.snake.push(snakeAfterMove);
        Game.snake.shift();

        Game.grid.generate(context, Game.snake);

        setTimeout(() => {
            this.move();
        }, 100);
    }
}

window.addEventListener('keyup', (event) => {
    switch (event.keyCode) {
        case Direction.keyCode.top:
            if (Game.direction !== Direction.snake.bottom) {
                Game.direction = Direction.snake.top;
            }
            break;
        case Direction.keyCode.bottom:
            if (Game.direction !== Direction.snake.top) {
                Game.direction = Direction.snake.bottom;
            }
            break;
        case Direction.keyCode.left:
            if (Game.direction !== Direction.snake.right) {
                Game.direction = Direction.snake.left;
            }
            break;
        case Direction.keyCode.right:
            if (Game.direction !== Direction.snake.left) {
                Game.direction = Direction.snake.right;
            }
            break;
    }
})