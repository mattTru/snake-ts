import { Dimension } from "./dimension";

export class Grid {
    public init() {
        const canvas: HTMLCanvasElement = <HTMLCanvasElement>document.querySelector('canvas');
        const context: CanvasRenderingContext2D = <CanvasRenderingContext2D>canvas.getContext('2d');

        canvas.width = Dimension.grid.width;
        canvas.height = Dimension.grid.height;
        canvas.style.display = 'block';

        return <CanvasRenderingContext2D>canvas.getContext('2d');
    }

    public generate(context: CanvasRenderingContext2D, snake: {x: number; y: number; }[], eatBox: {x: number; y: number;}) {
        context.clearRect(0, 0, Dimension.grid.width, Dimension.grid.height);

        // eatBox
        context.fillStyle = 'red'
        context.beginPath();
        context.rect(eatBox.x, eatBox.y, Dimension.grid.boxSize, Dimension.grid.boxSize);
        context.fill();

        // snake
        snake.forEach((item, index) => {
            context.fillStyle = '#34DE01';
            context.beginPath();
            context.rect(item.x, item.y, Dimension.grid.boxSize, Dimension.grid.boxSize);
            context.fill();
        })
    }

    public over(context: CanvasRenderingContext2D) {
        context.fillStyle = 'white';
        context.font = "25px Poppins";
        context.fillText('Game over !', Dimension.grid.boxSize * 2, Dimension.grid.boxSize * 3);
        const initButton = document.getElementById('init');
        if (initButton !== null) {
            initButton.style.display = 'flex';
        }
    }
} 