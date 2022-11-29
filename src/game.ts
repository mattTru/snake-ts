import { Grid } from "./grid/grid";
import { Snake } from "./snake/snake";
import { Direction } from "./snake/direction";
import { Dimension } from "./grid/dimension";

export class Game {
    static grid: Grid;
    static snake: {x: number; y: number; }[];
    static direction: string;
    static speed: number;
    static context: CanvasRenderingContext2D;
    static caseX: number;
    static caseY: number;
    static eatBox: {x: number; y: number};
    static isOver: boolean;
    static isEat: boolean;

    public init() {
        Game.snake = new Snake().init();
        Game.direction = Direction.snake.right;
        Game.speed = 15;
        Game.eatBox = {x: 0, y: 0};
        Game.isOver = false;
        Game.isEat = false;  
    }

    public start() {
        Game.grid = new Grid();
        Game.context = Game.grid.init();

        this.init();
        this.generateEatBox();
        this.move();
    }

    public move() {
        const frontSnake = {...Game.snake[Game.snake.length - 1]};
        switch(Game.direction) {
            case Direction.snake.top:
                frontSnake.y = ({...Game.snake[Game.snake.length - 1]}.y === 0) ? (Dimension.grid.height - Dimension.grid.boxSize) : {...Game.snake[Game.snake.length - 1]}.y - Game.speed;
                break;
            case Direction.snake.bottom:
                frontSnake.y = ({...Game.snake[Game.snake.length - 1]}.y + Dimension.grid.boxSize === Dimension.grid.height) ? 0 : {...Game.snake[Game.snake.length - 1]}.y + Game.speed;
                break;
            case Direction.snake.left:
                frontSnake.x = ({...Game.snake[Game.snake.length - 1]}.x === 0) ? (Dimension.grid.width - Dimension.grid.boxSize) : {...Game.snake[Game.snake.length - 1]}.x - Game.speed;
                break;
            case Direction.snake.right:
                frontSnake.x = ({...Game.snake[Game.snake.length - 1]}.x + Dimension.grid.boxSize === Dimension.grid.width) ? 0 : {...Game.snake[Game.snake.length - 1]}.x + Game.speed;
                break;
        }

        if (!Game.isEat) {
            Game.snake.shift();
        } else {
            Game.isEat = !Game.isEat;
        }

        Game.snake.push(frontSnake);
        Game.grid.generate(Game.context, Game.snake, Game.eatBox);

        this.isDead();
        this.eatBox();

        setTimeout(() => {
            if (!Game.isOver) {
                window.requestAnimationFrame(this.move());
            } else {
                Game.grid.over(Game.context);
            }
        }, 100);
    }

    public generateEatBox() {
        Game.caseX = Math.floor(Math.random() * (Dimension.grid.width / 15)) * 15;
        Game.caseY = Math.floor(Math.random() * (Dimension.grid.height / 15)) * 15;

        Game.snake.forEach((box, index) => {
            if (box.x === Game.caseX && box.y === Game.caseY) {
                this.generateEatBox();
                return;
            }
        })

        Game.eatBox = {x: Game.caseX, y: Game.caseY};
    }

    public isDead() {
        const frontSnake = {...Game.snake[Game.snake.length - 1]};
        Game.snake.forEach((box, index) => {
            if (Game.snake.length - 1 === index) {
                return;
            } else if ((frontSnake.x === box.x && frontSnake.y === box.y)) {
                Game.isOver = true;
            }
        })
    }

    public eatBox() {
        const frontSnake = {...Game.snake[Game.snake.length - 1]};
        if (frontSnake.x === Game.eatBox.x && frontSnake.y === Game.eatBox.y) {
            Game.isEat = true;
            this.generateEatBox();
        }
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